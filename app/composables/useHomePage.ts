export default function() {
  const { user } = useUserSession()
  return { user }
}