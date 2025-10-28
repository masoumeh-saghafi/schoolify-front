import ms from "ms";

import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../utilities/api/api";

const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"], // Unique identifier for cache
    queryFn: getUserProfile, // Must return a Promise
    staleTime: ms("1h"), // How long data is considered “fresh”
    gcTime: ms("24h"), // How long inactive data stays in cache
    refetchOnWindowFocus: false, // Prevents auto refetch when window refocuses
    refetchOnReconnect: true, // Good for mobile/offline cases
    retry: 2, // Retry failed requests (default 3)
    retryDelay: 1000, // Wait 1s between retries
    // enabled: !!token,              // Optional: conditionally run query
    select: (data) => data.data,
  });
};

export default useUserProfile;
