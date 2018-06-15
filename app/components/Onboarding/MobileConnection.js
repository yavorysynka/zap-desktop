import React from 'react'
import PropTypes from 'prop-types'
import Isvg from 'react-inlinesvg'
import { FaCircle, FaCircleThin, FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa'
import zapLogo from 'icons/zap_logo.svg'
import styles from './MobileConnection.scss'

class MobileConnection extends React.Component {
  componentDidMount() {
    // fetch the IP of the device
    this.props.fetchConnectionIp()
  }

  render() {
    const { mobileConnection, setMobileConnection, next, back } = this.props

    return (
      <div className={styles.container}>
        <header>
          <div>
            <Isvg src={zapLogo} />
          </div>
          <div />
        </header>

        <div className={styles.content}>
          <section>
            <img src='icons/zap_mobile.png' alt='Mobile' />
          </section>
          <section>
            <h1>Connect Zap mobile</h1>
            <p>By selecting allow, we configure your desktop node to accept incoming connections from other devices given proper authentication.</p>
            <div className={`${styles.option} ${mobileConnection && styles.active}`}>
              <div className={`${styles.button}`} onClick={() => setMobileConnection(true)}>
                {mobileConnection ? <FaCircle style={{ verticalAlign: 'top' }} /> : <FaCircleThin style={{ verticalAlign: 'top' }} />}
                <span className={styles.label}>Allow connection</span>
              </div>
            </div>
            <div className={`${styles.option} ${!mobileConnection && styles.active}`}>
              <div className={`${styles.button}`} onClick={() => setMobileConnection(false)}>
                {mobileConnection ? <FaCircleThin style={{ verticalAlign: 'top' }} /> : <FaCircle style={{ verticalAlign: 'top' }} />}
                <span className={styles.label}>No thanks</span>
              </div>
            </div>
          </section>
        </div>
        <footer className={styles.footer}>
          <div className={styles.buttonsContainer}>
            <div onClick={back}><FaAngleLeft style={{ verticalAlign: 'top' }} /> Back</div>
            <div onClick={next}>Next <FaAngleRight style={{ verticalAlign: 'top' }} /></div>
          </div>
        </footer>
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
