import { SET_LOADING, SET_PLAYER_LIST, SET_PLAYER } from '@/actions/players/types'

const initialState = {
  players: [], // players displayed in the players list screen
  currentPlayer: null, // player displayed in the player detail screen
  isLoading: false // loading state for displaying loader component
}

export default (state = initialState, action) => {
  switch(action.type){
    case  SET_LOADING:
      return {...state, isLoading: action.payload}
    case  SET_PLAYER_LIST:
      return {...state, players: action.payload}
    case  SET_PLAYER:
      return {...state, currentPlayer: action.payload}
    default:
      return state
  }
}
