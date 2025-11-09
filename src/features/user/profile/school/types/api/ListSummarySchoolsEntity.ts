export default interface ListSummarySchoolsEntity {
  title: string
  role: string
  status: 'waitingForPayment' | 'active' | 'expired'
}
