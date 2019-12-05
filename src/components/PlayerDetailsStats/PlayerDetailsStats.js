import React from 'react'
import styles from './PlayerDetailsStats.module.css'
import PropTypes from 'prop-types'

const PlayerDetailsStats = ({ label, value }) => {
  const transformValue = (l, v) => {
    switch (l) {
      case 'weight':
        return `${parseInt(v) / 1000} kg`
      case 'height':
        return `${parseInt(v) / 100} m`
      case 'age':
        return `${v} years old`
      default:
        return v
    }
  }

  return (
    <li className={styles['root']}>
      <span className={styles['label']}>{label}</span>
      <span className={styles['value']}>{transformValue(label, value)}</span>
    </li>
  )
}

PlayerDetailsStats.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any
}

export default PlayerDetailsStats
