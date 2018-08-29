import React from 'react'
import Isvg from 'react-inlinesvg'

// import cloudboltIcon from 'icons/cloudbolt.svg'
import cloudLightning from 'icons/cloudLightning.svg'

import styles from './LoadingBolt.scss'

const LoadingBolt = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Isvg className={styles.bolt} src={cloudLightning} />
      <h1>loading</h1>
    </div>
  </div>
)

export default LoadingBolt
