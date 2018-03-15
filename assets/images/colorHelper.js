export default function populateColor(status) {
  switch (status) {
    case 'PENDING':
      {
        return '#d8a430'
      }
    case 'COMPLETED':
      {
        return '#4ccc45'
        break
      }
    case 'CANCELLED':
      {
        return '#cfcfcf'
      }
    default:
      {
        return
      }
  }
}
