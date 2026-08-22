export default function () {
  const is_show_alert = useState('alert-is-show', () => false)

  const default_content = {
    type: "info" as "info" | "success" | "error",
    title: ""
  }
  type ContentType = {
    type: "info" | "success" | "error",
    title: string,
    detail?: string,
    error?: string
  }

  const alert_content = useState('alert-content', () => 
    shallowRef<ContentType>(default_content)
  )

  const showAlert = (new_content: ContentType) => {
    alert_content.value = new_content
    is_show_alert.value = true
    setTimeout(() => {
      is_show_alert.value = false
    }, 10000)
  }

  return { is_show_alert, alert_content, showAlert }
}