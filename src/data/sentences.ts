import { CardType } from '../@types/types'

const getRandomData = (): CardType[] => {
  const sentences = [
    `who's\nmissing?`,
    'can you\nall hear me?',
    'what am I\ndoing wrong?',
    'can you see me now?',
    `~three ehm's\nin one sentence~`,
    '~spilled drink~',
    '~talks while muted~',
    'sorry for\nthe mess',
    "what's with the\npenguin?",
    "i couldn't get\nmy camera to work",
    'can you\nsee my screen?',
    '~construction at\nneighbours place~',
    '~doorbell rings~',
    '~awkward silence~',
    '~waiting to be\nlet into the room~',
    '~forgot to turn off screen sharing~',
    "~there's a cat~",
    'can you email that to everyone?',
    'lets wait for ___!',
    'abysmal connection\nwhile explaining something',
    'could you\nshare the\nslides afterwards?',
    'i need to jump into another call',
    `sorry, i couldn't find the conf id`,
    '~doorbell rings~',
    '~awkward silence~'
  ]

  const randomArray = sentences
    .sort(() => 0.5 - Math.random())
    .map(item => ({
      sentence: item,
      match: false
    }))
    .splice(0, 25)

  return randomArray
}

export default getRandomData
