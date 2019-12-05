import { getPlayers, getPlayer } from '@/lib/services/players'
import {
  isLoading,
  setPlayerList,
  setCurrentPlayer
} from '@/actions/players/sync'

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Gets the list of all Players, will also assgin an index to retrieve a given player
 *
 * @returns {Function}
 */
export const loadPlayers = () => {
  return async (dispatch, getState) => {
    const { players } = getState()
    if (players.length === 0) {
      dispatch(isLoading(true))

      try {
        await sleep(1500) // some mock delay in the request
        await getPlayers()
          .then(data => {
            dispatch(isLoading(false))
            dispatch(setPlayerList(data))
          })
          .catch(err => {
            console.error(err)
          })
      } catch (err) {
        console.error(err)
      }
    } else {
      dispatch(setPlayerList(players))
    }
  }
}

/**
 * Gets current player based on a given index
 *
 * @returns {Function}
 */
export const loadPlayer = id => {
  return async (dispatch, getState) => {
    const { currentPlayer } = getState()
    console.log(currentPlayer, id)
    if (currentPlayer === null || currentPlayer.id !== parseInt(id)) {
      dispatch(isLoading(true))

      try {
        await sleep(1500) // some mock delay in the request
        getPlayer(id)
          .then(data => {
            dispatch(isLoading(false))
            dispatch(setCurrentPlayer(data))
          })
          .catch(err => {
            console.error(err)
          })
      } catch (err) {
        console.error(err)
      }
    } else {
      dispatch(setCurrentPlayer(currentPlayer))
    }
  }
}
