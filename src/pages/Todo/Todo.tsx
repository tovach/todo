import React, {FC, useState} from 'react';
import {useGetTodos} from "../../hooks";

import styles from './Todo.module.scss'
import ItemList from "../../components/ItemList/ItemList";
import Button from "../../components/UI/Button/Button";

const Todo: FC = () => {
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1)

    const {data, error, loading, totalPages} = useGetTodos(page, limit);

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
                    <div>UserID</div>
                    <div>Title</div>
                    <div>Completed?</div>
                    <div>Edit</div>
                    <div>Remove</div>
                </li>
            </ul>

            <ItemList items={data!}/>

            <ul className={styles.pagination}>
                {
                    Array(totalPages).fill(0).map((el, index)=>
                        <li key={index}>
                            <Button onClick={e=>setPage(parseInt(e.currentTarget.innerText))}>
                                {index+1}
                            </Button>
                        </li>
                    )
                }
            </ul>

        </section>
    );
};

export default Todo;