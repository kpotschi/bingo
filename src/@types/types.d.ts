export type CardType = {
  sentence: string
  match: boolean
}

export type GameProps = {
  cards: CardType[]
  setCards: (cards: CardType[]) => void
}

export type CardProps = {
  sentence: string
  matchHandler: any
  match: boolean
  identifier: any
}
