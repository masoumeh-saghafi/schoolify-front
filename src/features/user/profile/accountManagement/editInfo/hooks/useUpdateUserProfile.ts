import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUserProfile } from '@schoolify/features/user/profile/accountManagement/editInfo/utilities/api/api'
import { userProfileQueryKey } from '@schoolify/features/user/profile/accountManagement/personalInfo/hooks/useUserProfile'

const useUpdateUserProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userProfileQueryKey })
    },
    onError: error => {
      console.error('Error updating profile:', error)
    }
  })
}

export default useUpdateUserProfile
