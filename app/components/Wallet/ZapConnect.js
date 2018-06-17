import React from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode.react'
import Isvg from 'react-inlinesvg'
import link2 from 'icons/link-2.svg'

import x from 'icons/x.svg'
import styles from './ZapConnect.scss'

const ZapConnect = ({ isOpen, setZapConnect, genZapConnect }) => {
  if (!isOpen) { return null }

  return (
    <div className={styles.container}>
      <div className={styles.closeContainer}>
        <span onClick={() => setZapConnect(false)}>
          <Isvg src={x} />
        </span>
      </div>

      <header className={styles.header}>
        <Isvg src={link2} />
        <h1>Zap Connect</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.qrContainer}>
          <QRCode value={JSON.stringify(genZapConnect)} size={300} renderAs='svg' />
        </div>
      </div>
    </div>
  )
}

ZapConnect.propTypes = {
  genZapConnect: PropTypes.object.isRequired
}

export default ZapConnect
