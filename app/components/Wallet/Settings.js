import React from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight, FaMobile } from 'react-icons/lib/fa'
import styles from './Settings.scss'

const Settings = ({ setZapConnect, setSettingsOpen }) => {
  const zapConnectClicked = () => {
    setZapConnect(true)
    setSettingsOpen(false)
  }

  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.zapconnect} onClick={zapConnectClicked}>
          <span>Zap Connect</span>
          <FaMobile />
        </li>
      </ul>
    </div>
  )
}

Settings.propTypes = {
  setZapConnect: PropTypes.func.isRequired,
  setSettingsOpen: PropTypes.func.isRequired
}

export default Settings
