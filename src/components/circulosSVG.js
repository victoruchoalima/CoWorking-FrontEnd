import React from 'react'
import CircularImg from './CicularImg.js';
import styles from './components/circulosSVG.module.css';

const circulosSVG = ({ radius, cx, cy }) => {
  return (
    <div className={styles.containerCenter}>
      <CircularImg />
      <svg className={styles.contentCirclesvg} width="100" height="100">
      <circle r={radius} cx={cx} cy={cy} className={styles.contentCircle} />
    </svg>
    </div>
  )
}

export default circulosSVG;