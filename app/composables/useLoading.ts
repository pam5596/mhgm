export default function() {
  const is_show_loading = useState('loading-is-show', () => false)

  const toggleLoading = () => is_show_loading.value = !is_show_loading.value

  return { is_show_loading, toggleLoading }
}