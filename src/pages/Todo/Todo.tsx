import React, {FC} from 'react';
import {useTodos} from "../../hooks";

import styles from './Todo.module.scss'

const Todo: FC = () => {
    const {data, error, loading} = useTodos();
    console.log(data?.map(el => el.completed));
    if (loading) {
        return (<h1>...Loading</h1>)
    }

    if (error) {
        return (<h1>Error</h1>)
    }

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div>ID</div>
                    <div>Title</div>
                    <div>UserID</div>
                    <div>Completed?</div>
                </li>
            </ul>
            <ul className={styles.list}>
                {data?.map(el =>
                    <li className={styles.listItem} key={el.id}>
                        <div>{el.id}</div>
                        <div>{el.title}</div>
                        <div>{el.userId}</div>
                        <div>{el.completed ? 'yes' : 'no'}</div>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default Todo;