import React, {FC, useEffect, useState} from 'react';
import {useActions, useGetTodos, useTypedSelector} from "../../hooks";

import styles from './Todo.module.scss'
import Button from "../../components/UI/Button/Button";
import TaskList from "../../components/TaskList/TaskList";
import {useSelector} from "react-redux";
import AddNewTask from "../../components/AddNewTask/AddNewTask";

const Todo: FC = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const {data, error, loading, totalPages} = useGetTodos(page, limit);

    const {setTodos} = useActions();
    const {todoSlice} = useTypedSelector(state => state);


    useEffect(() => {
        setTodos(data || [])
    }, [page, data])

    if (loading) {
        return (<h1>...Loading</h1>)
    }

    return (

        <section className={styles.container}>
            <AddNewTask/>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div>UserID</div>
                    <div>Title</div>
                    <div>Completed?</div>
                    <div>Edit</div>
                    <div>Remove</div>
                </li>
            </ul>

            <TaskList items={todoSlice.items}/>

            <ul className={styles.pagination}>
                {
                    Array(totalPages).fill(0).map((el, index) =>
                        <li key={index}>
                            <Button onClick={e => setPage(parseInt(e.currentTarget.innerText))}>
                                {index + 1}
                            </Button>
                        </li>
                    )
                }
            </ul>

        </section>
    );
};

export default Todo;