import React from 'react';
import styles from './Button.module.css';

export default function Button({ secondary, children }) {
    return (
        <button className={`${styles.btn} ${secondary ? styles.btnSecondary : ''}`}>
            {children}
        </button>
    )
}
