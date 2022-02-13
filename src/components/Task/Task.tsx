import React, {FC, FormEvent, useState} from 'react';
import {TodoItem} from "../../types";
import TextInput from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";

import styles from "./Task.module.scss";
import Button from "../UI/Button/Button";

interface TodoItemProps {
    item: TodoItem
}

const Task: FC<TodoItemProps> = ({item}) => {
    const [todo, setTodo] = useState<TodoItem>(item);
    const [edit, setEdit] = useState(false);

    const formHandler = (obj: TodoItem) => {
        return (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setEdit(!edit)
        }
    }

    return (
        <form className={styles.form} onSubmit={formHandler(item)}>
            <TextInput value={todo.userId.toString()}
                       onChange={e => setTodo({...todo, userId: parseInt(e.currentTarget.value) || 0})}
                       disabled={!edit}/>
            <TextArea value={todo.title} onChange={e => setTodo({...todo, title: e.currentTarget.value})}
                      disabled={!edit}/>
            <Button type='button' onClick={() => setTodo({...todo, completed: !item.completed})}>
                {
                    item.completed ?
                        <span className="material-icons">done_all</span>
                        :
                        <span className="material-icons">highlight_off</span>
                }
            </Button>

            {
                !edit ?
                    <Button onClick={() => setEdit(!edit)} type='button'>
                        <span className="material-icons">edit</span>
                    </Button>
                    :
                    ''
            }

            {
                edit ?
                    <Button type='submit'>
                        <span className="material-icons">done</span>
                    </Button>
                    :
                    ''
            }
        </form>
    );
};

export default Task;