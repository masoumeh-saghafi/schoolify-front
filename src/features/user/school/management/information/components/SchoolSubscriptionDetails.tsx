// React Type
import { useParams } from 'react-router-dom'

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import DataTable from "@schoolify/core/components/common/DataTable";
import AsyncStateHandler from "@schoolify/core/components/common/AsyncStateHandler";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";

// Feature Components
import { SchoolSubscriptionColumns } from "@schoolify/features/user/school/management/information/utilities/SchoolSubscriptionColumns";

// Custom Hooks
import useSchoolInfo from "@schoolify/features/user/school/management/information/hooks/useInfoSchool";


const SchoolSubscriptionDetails = () => {
  // Hooks
  const { schoolId = "" } = useParams();
  const { data, isLoading, error } = useSchoolInfo(schoolId);

  // Helpers
  const subscription = data?.data?.subscription?.data;
  const columns = SchoolSubscriptionColumns();

  // Render
  return (
    <ContentBox label="مشخصات اشتراک">
      <AsyncStateHandler isLoading={isLoading} error={error}>
        <DataTable
          columns={columns}
          rows={[
            {
              createDate: subscription?.createDate,
              expireDate: subscription?.expireDate,
            },
          ]}
          renderCell={(row, col) => {
            switch (col.id) {
              case "createDate":
              case "expireDate":
                return row[col.id] ? (
                  <FormattedDate date={+new Date(row[col.id])} />
                ) : (
                  "---"
                );
            }
          }}
        />
      </AsyncStateHandler>
    </ContentBox>
  );
};

export default SchoolSubscriptionDetails;
