import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from '@/components/PlayerListItem/PlayerListItem'
import Loader from '@/components/Loader/Loader'

import styles from './PlayersList.module.css'

class PlayersList extends Component {
  componentDidMount() {
    this.props.loadPlayers()
  }

  render() {
    const { players, isLoading } = this.props
    return (
      <section className={styles['root']}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles['content']}>
            <h1 className={styles['title']}>Players list</h1>
            <ul className={styles['players-list']}>
              {players.map((player, idx) => (
                <PlayerListItem key={idx} {...player} />
              ))}
            </ul>
          </div>
        )}
      </section>
    )
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
  loadPlayers: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default PlayersList
