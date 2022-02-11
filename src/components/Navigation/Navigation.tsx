import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface NavigationProps {
    links: { id: number, title: string, path: string }[]
}

const Navigation: FC<NavigationProps> = ({links}) => {
    return (
        <nav>
            <ul>
                {links.map(el=>
                <li key={el.id}>
                    <Link to={el.path}>{el.title}</Link>
                </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;