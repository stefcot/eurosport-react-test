// SYNC ACTION CREATOR FUNCTIONS
import { SET_LOADING, SET_PLAYER_LIST, SET_PLAYER } from '@/actions/players/types'

export const setPlayerList = (val) => ({ type: SET_PLAYER_LIST, payload: val }) // Payload is an array of object
export const setCurrentPlayer = (val) => ({ type: SET_PLAYER, payload: val }) // Payload is an object
export const isLoading = (val) => ({ type: SET_LOADING, payload: val }) // payload is a boolean
