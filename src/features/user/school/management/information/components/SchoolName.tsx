// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import BaseField from '@schoolify/core/components/common/BaseField'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'

// Custom Hooks
import useSchoolInfo from '@schoolify/features/user/school/management/information/hooks/useInfoSchool'

const SchoolName = () => {

  // Hooks
  const { schoolId = '' } = useParams()

  const { data, isLoading, error } = useSchoolInfo(schoolId)

  // Render
  return (
    <Box>
      <ContentBox label='مشخصات مدرسه'>
        <AsyncStateHandler isLoading={isLoading} error={error}>
          <Grid container sx={{ margin: 2 }} spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <BaseField
                label='نام مدرسه'
                type='text'
                value={data?.data?.title}
              />
            </Grid>
          </Grid>
        </AsyncStateHandler>
      </ContentBox>
    </Box>
  )
}

export default SchoolName
