import React, {FC} from 'react';
import logo from '../../assets/logo.jpg'

import styles from './Home.module.scss'

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p>
                    Focus — эффeктивное приложение для планирования и
                    управления задачами.

                </p>
                <p>
                    Focus поможет составить расписание,
                    распределить нагрузку, сфокусироваться, не забыть о срочных делах и организовать жизнь, на работе и
                    где бы то ни было ещё!

                </p></div>
            <img className={styles.img} src={logo} alt=""/>
        </div>
    );
};

export default Home;