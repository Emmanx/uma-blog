export const truncateString = (str: string, num = 100) => {
  if (!str) return ''
  return str.length > num ? str.slice(0, num) + '...' : str
}
