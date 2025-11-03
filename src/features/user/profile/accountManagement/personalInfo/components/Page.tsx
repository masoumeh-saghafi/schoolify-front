// Feature Components

// Custom Utilities

// React Types
import PersonalInfo from "./PersonalInfo";
import NotificationInfo from "./NotificationInfo";

// Custom Types
interface PersonalInfoPageProps {
//   children: ReactNode;
}

const PersonalInfoPage = (props: PersonalInfoPageProps) => {
  // Props
//   const { children } = props;

  // Render
  return (
    <>
        <PersonalInfo />
        <NotificationInfo/>
    </>
  );
};

export default PersonalInfoPage;
