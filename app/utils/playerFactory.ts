import type { DisplayUser } from "~/types/display_user";
import type { FactoryPlayer } from "~/types/factory_player";

export default class PlayerFactory {
  streamer: DisplayUser
  quest_limit: number
  quests: number = 0
  players: FactoryPlayer[] = []

  constructor(streamer: DisplayUser, quest_limit: number) {
    this.streamer = streamer
    this.quest_limit = quest_limit
  }

  refresh() {
    this.players = this.players.reduce((current_players, player, index) => {
      if(index > this.quest_limit) {
        // 待機枠の場合
        player.join_quests = 0
        player.status = StatusEnum.wait
        if (index > this.quest_limit * 2) {
          // 待機列2列目以降の場合
          player.wait_quests = current_players[index - 2]!.wait_quests + this.quest_limit
        } else {
          // 待機列1列目の場合
          player.wait_quests = this.quest_limit - current_players[index % 3]!.join_quests
        }
      } else {
        // 参加枠の場合
        player.wait_quests = 0
        player.status = StatusEnum.join
      }
      return [...current_players, player]
    }, [] as FactoryPlayer[])
  }

  entryPlayer(user: DisplayUser) {
    const is_duplicate = this.players.some(p => p.channel_id === user.channel_id)
    if (!is_duplicate) {
      const player = user as FactoryPlayer
      this.players = [...this.players, player]
      this.refresh()
    }
  }

  cancelPlayer(channel_id: string) {
    this.players = this.players.filter(p => p.channel_id !== channel_id)
    this.refresh()
  }

  changePlayer(joiner_channel_id: string, waiter_channel_id: string) {
    const joiner_index = this.players.findIndex(p => p.channel_id === joiner_channel_id)!
    const waiter = this.players.find(p => p.channel_id === waiter_channel_id)!

    this.players = this.players.filter(p => p.channel_id !== waiter_channel_id).with(joiner_index, waiter)
    this.refresh()
  }

  changePlayerQuests(channel_id: string, quests: number) {
    const player = this.players.find(p => p.channel_id === channel_id)!
    const player_index = this.players.findIndex(p => p.channel_id === channel_id)!

    if (player.status === StatusEnum.join) {
      this.players[player_index]!.join_quests = quests
    } else {
      this.players[player_index]!.wait_quests = quests
    }
  }

  increaceQuests() {
    this.players = this.players.map(player => {
      if (player.status === StatusEnum.join) {
        player.join_quests += 1

        if (player.join_quests >= this.quest_limit) {
          return null
        } 
      }
      return player
    }).filter(p => p !== null)
    this.refresh()
  }
}