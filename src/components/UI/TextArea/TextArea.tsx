import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import styles from './TextArea.module.scss'

interface TextInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    value: string;
    disabled?: boolean;
}

const TextArea: FC<TextInputProps> = ({value, disabled, ...props}) => {
    return (
        <textarea className={styles.textArea} rows={2} cols={2} wrap={'soft'} maxLength={50} value={value} {...props} required disabled={disabled}/>
    );
};

export default TextArea;