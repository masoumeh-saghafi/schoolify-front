const profileAccountManagementEndpoints = {
  profile: "/profile",
  subscription: "/subscriptions",
  userSubscription: "/profile/subscriptions",
  buySubscription: "profile/subscriptions/buy",
  renewalSubscription: (subscriptionId: string) =>
    `/profile/subscriptions/${subscriptionId}/renewal`,
  notification: "/profile/notifications",
  payment: "/payments",
};

export default profileAccountManagementEndpoints;
