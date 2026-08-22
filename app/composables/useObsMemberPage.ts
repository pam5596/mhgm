import type { FactoryPlayer } from "~/types/factory_player"
import type { ObsMemberParams } from "~/types/obs_member.params"
import type { ObsMemberQuerys } from "~/types/obs_member.querys"
import type { SocketIOMemberEmit } from "~~/shared/dtos/interfaces/socker.io_member.emit.dto"

export default function () {
  const { channel_id } = useRoute().params as unknown as ObsMemberParams
  const { status } = useRoute().query as unknown as ObsMemberQuerys

  const { connect, subscribeEmit } = useMemberSocket()

  const member = ref<SocketIOMemberEmit>()

  onMounted(() => {
    connect()
    if (channel_id) subscribeEmit<SocketIOMemberEmit>(
      channel_id, 
      async (event) => {member.value = event}
    )
  })

  return {
    status,
    member
  }
}