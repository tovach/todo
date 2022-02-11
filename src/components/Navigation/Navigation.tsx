import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss';

interface NavigationProps {
    links: { id: number, title: string, path: string }[]
}

const Navigation: FC<NavigationProps> = ({links}) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {links.map(el =>
                    <li key={el.id} className={styles.item}>
                        <Link to={el.path}>{el.title}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;