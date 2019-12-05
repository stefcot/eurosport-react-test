import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PlayerDetailsStats from '@/components/PlayerDetailsStats/PlayerDetailsStats'
import styles from './PlayerDetails.module.css'
import Loader from '@/components/Loader/Loader'

class PlayerDetails extends Component {
  componentDidMount() {
    this.props.loadPlayer(this.props.playerId)
  }

  render() {
    const { player, isLoading } = this.props
    return (
      <section className={styles['root']}>
        {isLoading ? (
          <Loader />
        ) : player ? (
          <div className={styles['content']}>
            <header className={styles['header']}>
              <h1 className={styles['title']}>
                {player.firstname}{' '}
                <span className={styles['lastname']}>{player.lastname}</span>,{' '}
                {player.country.code}
              </h1>
              <img
                className={styles['photo']}
                alt={`${player.firstname} ${player.lastname}`}
                src={player.picture}
              />
            </header>

            <ul className={styles['stats']}>
              {Object.keys(player.data).map((key, idx) =>
                key !== 'last' ? (
                  <PlayerDetailsStats
                    key={idx}
                    label={key}
                    value={player.data[key]}
                  />
                ) : null
              )}
            </ul>

            <Link className={styles['back-btn']} to="/">
              Back
            </Link>
          </div>
        ) : null}
      </section>
    )
  }
}

PlayerDetails.propTypes = {
  loadPlayer: PropTypes.func,
  isLoading: PropTypes.bool,
  player: PropTypes.object,
  playerId: PropTypes.any
}

export default PlayerDetails
