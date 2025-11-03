// Feature Components

import BuySubscription from "./BuySubscription";
import SubscriptionsPurchased from "./SubscriptionsPurchased";

// Custom Utilities

// React Types

// Custom Types
interface SubscriptionPageProps {
//   children: ReactNode;
}

const SubscriptionPage = (props: SubscriptionPageProps) => {
  // Props
//   const { children } = props;

  // Render
  return (
    <>
        <BuySubscription />
        <SubscriptionsPurchased/>
    </>
  );
};

export default SubscriptionPage;
