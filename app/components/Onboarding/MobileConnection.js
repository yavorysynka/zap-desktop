import React from 'react'
import PropTypes from 'prop-types'
import { FaCircle, FaCircleThin } from 'react-icons/lib/fa'
import styles from './MobileConnection.scss'

class MobileConnection extends React.Component {
  componentDidMount() {
    // fetch the IP of the device
    this.props.fetchConnectionIp()
  }

  render() {
    const { mobileConnection, setMobileConnection } = this.props

    return (
      <div className={styles.container}>
        <section>
          <div className={`${styles.option} ${mobileConnection && styles.active}`}>
            <div className={`${styles.button}`} onClick={() => setMobileConnection(true)}>
              {mobileConnection ? <FaCircle /> : <FaCircleThin />}
              <span className={styles.label}>Let's do it</span>
            </div>
          </div>
          <div className={`${styles.option} ${!mobileConnection && styles.active}`}>
            <div className={`${styles.button}`} onClick={() => setMobileConnection(false)}>
              {mobileConnection ? <FaCircleThin /> : <FaCircle />}
              <span className={styles.label}>No thanks</span>
            </div>
          </div>
        </section>
        <section>
          <img src='icons/zap_mobile.png' />
        </section>
      </div>
    )
    
  }
}

MobileConnection.propTypes = {
  mobileConnection: PropTypes.bool.isRequired,
  setMobileConnection: PropTypes.func.isRequired,
  fetchConnectionIp: PropTypes.func.isRequired
}

export default MobileConnection
