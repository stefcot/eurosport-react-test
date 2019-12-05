import { connect } from 'react-redux'
import { loadPlayers } from '@/actions/players/async'
import PlayersList from '@/components/PlayersList/PlayersList'

const mapStateToProps = (state) => ({
  players: state.players,
  isLoading: state.isLoading
});

const mapDispatchToProps = {loadPlayers}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList)
