import { CardType } from '../@types/types'

export const winHandler = (array: Array<CardType>) => {
  let winCounter = 0

  // diagonal
  for (let i = 0; i < 5; i++) {
    if (
      array[i].match &&
      array[i + 5].match &&
      array[i + 10].match &&
      array[i + 15].match &&
      array[i + 20].match
    ) {
      winCounter++
    }
  }

  // horizontal
  for (let j = 0; j <= 20; j += 5) {
    if (
      array[j].match &&
      array[j + 1].match &&
      array[j + 2].match &&
      array[j + 3].match &&
      array[j + 4].match
    )
      winCounter++
  }

  // diagonal
  if (array[0].match && array[6].match && array[18].match && array[24].match) {
    winCounter++
  }

  if (array[4].match && array[8].match && array[16].match && array[20].match) {
    winCounter++
  }

  return winCounter
}
