import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PlayerListItem.module.css'

const PlayerListItem = ({firstname, lastname, country, id}) => (
  <li className={styles['item']}>
    <img
      className={styles['flag']}
      alt={`${firstname} ${lastname}`}
      src={country.picture} />
    <Link
      to={`/${id}`}
      title={`${firstname} ${lastname}`}
      className={styles['link']}>
      {firstname} {lastname}, {country.code}
    </Link>
  </li>
);

PlayerListItem.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  country: PropTypes.object.isRequired
}

export default PlayerListItem
