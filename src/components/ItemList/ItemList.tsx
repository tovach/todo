import React, {FC} from 'react';
import {TodoItem} from "../../types";
import Item from "../Item/Item";

import styles from "./ItemList.module.scss"

interface ItemListProps {
    items: TodoItem[];
}

const ItemList: FC<ItemListProps> = ({items}) => {
    return (
        <ul className={styles.list}>
            {items.map(el =>
                <li key={el.id} className={styles.item}>
                    <Item item={el}/>
                </li>
            )}
        </ul>
    );
};

export default ItemList;