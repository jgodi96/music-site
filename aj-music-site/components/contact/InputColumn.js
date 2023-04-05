import React from 'react'
import styles from './InputColumn.module.css'

const InputColumn = ({children}) => {
  return (
    <div className={styles["input-column"]}>{children}</div>
  )
}

export default InputColumn