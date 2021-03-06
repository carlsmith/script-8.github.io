import equal from 'deep-equal'
import { parseGistGame } from '../reducers/game.js'
import { extractGistMap } from '../reducers/map.js'
import { extractGistSprites } from '../reducers/sprites.js'
import { extractGistPhrases } from '../reducers/phrases.js'
import { extractGistChains } from '../reducers/chains.js'
import { extractGistSongs } from '../reducers/songs.js'

const isDirty = ({ gist, game, sprites, map, phrases, chains, songs }) =>
  !equal(parseGistGame(gist.data), game) ||
  !equal(extractGistMap(gist.data), map) ||
  !equal(extractGistSprites(gist.data), sprites) ||
  !equal(extractGistPhrases(gist.data), phrases) ||
  !equal(extractGistChains(gist.data), chains) ||
  !equal(extractGistSongs(gist.data), songs)

export default isDirty
