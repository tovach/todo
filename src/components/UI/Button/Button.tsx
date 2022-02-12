import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import styles from './Button.module.scss'

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({children,type, ...props}) => {
    return (
        <button className={styles.button} {...props} type={type}>
            {children}
        </button>
    );
};

export default Button;