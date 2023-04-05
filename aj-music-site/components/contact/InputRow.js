import React from 'react'
import styles from './InputRow.module.css'
const InputRow = ({children}) => {
  return (
    <div className={styles['input-row']}>{children}</div>
  )
}

export default InputRow