import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerList from '@/containers/PlayersList'
import PlayerDetails from '@/containers/PlayerDetails'
import './0-Reset.css'
import './1-App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/">
              <PlayerList />
            </Route>
            <Route
              path="/:id"
              render={({match}) => (
                <PlayerDetails playerId={match.params.id} />
              )}
            >
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App
