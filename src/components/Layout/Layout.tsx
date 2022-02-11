import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
    return (
        <>
            <header>header</header>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;