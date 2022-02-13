import React, {FC} from 'react';
import {TodoItem} from "../../types";
import Task from "../Task/Task";

import styles from "./TaskList.module.scss"

interface ItemListProps {
    items: TodoItem[];
}

const TaskList: FC<ItemListProps> = ({items}) => {
    return (
        <ul className={styles.list}>
            {items.map(el =>
                <li key={el.id} className={styles.item}>
                    <Task item={el}/>
                </li>
            )}
        </ul>
    );
};

export default TaskList;