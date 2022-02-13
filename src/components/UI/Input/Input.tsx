import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';

import styles from './Input.module.scss'

interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    disabled?: boolean;
}

const Input: FC<InputProps> = ({value, disabled, ...props}) => {
    return (
        <input type={'text'} className={styles.input} value={value} {...props} required disabled={disabled}/>
    );
};

export default Input;