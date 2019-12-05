import { connect } from 'react-redux'
import { loadPlayer } from '@/actions/players/async'
import PlayerDetails from '@/components/PlayerDetails/PlayerDetails'

const mapStateToProps = (state) => ({
  player: state.currentPlayer,
  isLoading: state.isLoading
});

const mapDispatchToProps = {loadPlayer}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetails)
