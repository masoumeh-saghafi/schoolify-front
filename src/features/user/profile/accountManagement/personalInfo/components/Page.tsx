// Feature Components
import PersonalInfo from '@schoolify/features/user/profile/accountManagement/personalInfo/components/PersonalInfo'
import NotificationInfo from '@schoolify/features/user/profile/accountManagement/personalInfo/components/NotificationInfo'

// Custom Types
interface PersonalInfoPageProps {

}

const PersonalInfoPage = (props: PersonalInfoPageProps) => {
  // Props
  //   const { } = props;

  // Render
  return (
    <>
      <PersonalInfo />
      <NotificationInfo />
    </>
  )
}

export default PersonalInfoPage
