import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout: FC = () => {
    const paths = [
        {id: 0, title: 'Home',path: '/'},
        {id: 1, title: 'Todo',path: '/todo'}]
    return (
        <>
            <header>
                <Navigation links={paths}>

                </Navigation>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;