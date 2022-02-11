import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Todo from "../../pages/Todo/Todo";
import Home from "../../pages/Home/Home";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/todo'} element={<Todo/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;