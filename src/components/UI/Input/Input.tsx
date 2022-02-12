import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';

import styles from './Input.module.scss'

interface TextInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    disabled?: boolean;
}

const Input: FC<TextInputProps> = ({value, disabled, ...props}) => {
    return (
        <input type={'text'} className={styles.input} value={value} {...props} required disabled={disabled}/>
    );
};

export default Input;