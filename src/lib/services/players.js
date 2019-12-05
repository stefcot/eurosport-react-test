const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * Gets all players at app start
 *
 * @return {Promise<any>}
 */
export const getPlayers = () => {
  return fetch(BASE_URL)
    .then((res) => {
      return res.json()
    })
}

/**
 * Get player based on the passed id
 *
 * @return {Promise<any>}
 */
export const getPlayer = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => {
      return res.json()
    })
}
