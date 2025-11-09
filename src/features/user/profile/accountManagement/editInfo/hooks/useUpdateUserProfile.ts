import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "@schoolify/features/user/profile/accountManagement/editInfo/utilities/api/api";

const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
    },
  });
};

export default useUpdateUserProfile;
