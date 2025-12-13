import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { listSummaryEducationYear } from "@schoolify/features/user/school/management/educationLevel/utilities/api/api";

const useListSummaryEducationYear = (schoolId: string) =>
  useQuery({
    queryKey: ["ListSummaryEducationYear", schoolId],
    queryFn: ({ queryKey }) => listSummaryEducationYear(queryKey[1] as string),

    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retryDelay: 1000,
    select: (data) => data?.data,
    enabled: !!schoolId,
  });
export default useListSummaryEducationYear;
