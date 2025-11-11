import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { getSchoolInfo } from "@schoolify/features/user/school/management/information/utilities/api/api";

export const schoolInfoQueryKey = (schoolId: string) => [
  "SchoolInfo",
  schoolId,
];

const useSchoolInfo = (schoolId: string) => {
  return useQuery({
    queryKey: schoolInfoQueryKey(schoolId),
    queryFn: ({ queryKey }) => getSchoolInfo(queryKey[1] as string),
    staleTime: ms("1h"),
    gcTime: ms("24h"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: 1000,
    // enabled: !!token,
    select: (data) => data.data,
  });
};

export default useSchoolInfo;
