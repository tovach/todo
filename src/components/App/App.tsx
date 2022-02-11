import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Todo from "../../pages/Todo/Todo";
import Home from "../../pages/Home/Home";

import styles from './App.module.scss'

const App: FC = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/todo'} element={<Todo/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;