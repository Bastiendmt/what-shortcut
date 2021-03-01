import React from 'react'
import Key from '../Key/Key'
import styles from './Shortcut.module.css'

const Shortcut = props => {

    return <div className={styles.Row}>
        <div className={styles.Name}>Switch window</div>
        <div className={styles.Keybindings}>
            <Key>Alt</Key><Key>Tab</Key>
        </div>
        <div className={styles.Description}>Allows you to switch between opened windows</div>
    </div>
}

export default Shortcut