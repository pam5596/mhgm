import type { DisplayUser } from "~/types/display_user";
import type { FactoryPlayer } from "~/types/factory_player";

export class PlayerFactory {
  quest_limit: number
  joiner_limit: number = 3
  players: FactoryPlayer[]

  constructor(quest_limit: number, from_players?: FactoryPlayer[]) {
    this.quest_limit = quest_limit
    this.players = from_players || []
  }

  static create(quest_limit: number, from_players?: FactoryPlayer[]) {
    return new PlayerFactory(quest_limit, from_players)
  }

  refresh() {
    this.players = this.players.reduce((current_players, player, index) => {
      if(index >= this.joiner_limit) {
        // 待機枠の場合
        player.join_quests = 0
        player.status = StatusEnum.wait
        if (index >= this.joiner_limit * 2) {
          // 待機列2列目以降の場合
          player.wait_quests = current_players[index - this.joiner_limit]!.wait_quests + this.quest_limit
        } else {
          // 待機列1列目の場合
          player.wait_quests = this.quest_limit - current_players[index % this.joiner_limit]!.join_quests
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
      player.join_quests = 0
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
    this.players = this.players
      .toSorted((a,b) => b.join_quests - a.join_quests)
      .toSorted((a,b) => a.wait_quests - b.wait_quests)
    this.refresh()
  }

  increaceQuests() {
    this.players = this.players.map(player => {
      if (player.status === StatusEnum.join) {
        player.join_quests += 1

        if (player.join_quests > this.quest_limit) {
          return null
        } 
      }
      return player
    }).filter(p => p !== null)
    this.refresh()
  }

  get joiners() {
    return this.players.filter(p => p.status === StatusEnum.join)
  }

  get waiters() {
    return this.players.filter(p => p.status === StatusEnum.wait)
  }

  get next() {
    const simulater = new PlayerFactory(this.quest_limit, this.players)
    simulater.increaceQuests()
    return simulater.joiners
  }
}