// Feature Components
import BuySubscription from '@schoolify/features/user/profile/accountManagement/subscription/components/BuySubscription'
import SubscriptionsPurchased from '@schoolify/features/user/profile/accountManagement/subscription/components/SubscriptionsPurchased'


// Custom Types
// interface SubscriptionTabProps {

// }

const SubscriptionTab = () => {
  // Props
  //   const { } = props;

  // Render
  return (
    <>
      <BuySubscription />
      <SubscriptionsPurchased />
    </>
  )
}

export default SubscriptionTab
