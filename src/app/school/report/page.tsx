// React Type
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// MUI Components
import routes from '@schoolify/core/utilities/routes'

const SchoolReportPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(routes.school.report.student.full.index(schoolId))
  }, [])
  
  // Render
  return <></>
}

export default SchoolReportPage
