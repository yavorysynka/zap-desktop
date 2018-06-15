import React from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight, FaMobile } from 'react-icons/lib/fa'
import styles from './Settings.scss'

const Settings = ({}) => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <span>Bitcoin Conversion</span> <FaAngleRight style={{ verticalAlign: 'top' }} />
        </li>
        <li>
          <span>Fiat Conversion</span> <FaAngleRight style={{ verticalAlign: 'top' }} />
        </li>
        <li>
          <span>Notifications</span> <FaAngleRight style={{ verticalAlign: 'top' }} />
        </li>
        <li>
          <span>Autopay</span> <FaAngleRight style={{ verticalAlign: 'top' }} />
        </li>
        <li className={styles.zapconnect}>
          <span>Zap Connect</span>
          <FaMobile />
        </li>
      </ul>
    </div>
  )
}

Settings.propTypes = {}

export default Settings
