export default function() {
  const is_show_loading = useState('loading-is-show', () => false)

  const openLoading = () => is_show_loading.value = true
  const closeLoading = () => is_show_loading.value = false

  return { is_show_loading, openLoading, closeLoading }
}