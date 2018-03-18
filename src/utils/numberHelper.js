export default toLocaleString = (number) => {
  if (number) 
    return parseFloat(number)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return '0'
}
