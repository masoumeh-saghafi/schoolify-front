// Feature Components
import BuySubscription from '@schoolify/features/user/profile/accountManagement/subscription/components/BuySubscription'
import SubscriptionsPurchased from '@schoolify/features/user/profile/accountManagement/subscription/components/SubscriptionsPurchased'


// Custom Types
interface SubscriptionPageProps {

}

const SubscriptionPage = (props: SubscriptionPageProps) => {
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

export default SubscriptionPage
