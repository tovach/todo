import React, {FC, FormEvent, useState} from 'react';
import {TodoItem} from "../../types";
import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";

import styles from "./Task.module.scss";
import Button from "../UI/Button/Button";
import {useActions} from "../../hooks";

interface TodoItemProps {
    item: TodoItem
}

const Task: FC<TodoItemProps> = ({item}) => {
    const [todo, setTodo] = useState<TodoItem>(item);
    const [edit, setEdit] = useState(false);

    const {setCompleteStatus, changeTask, removeTask} = useActions();

    const formHandler = () => {
        return (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            changeTask(todo)
            setEdit(!edit)
        }
    }

    return (
        <form className={styles.form} onSubmit={formHandler()}>
            <Input value={todo.userId.toString()}
                       onChange={e => setTodo({...todo, userId: parseInt(e.currentTarget.value) || 0})}
                       disabled={!edit}/>
            <TextArea value={todo.title} onChange={e => setTodo({...todo, title: e.currentTarget.value})}
                      disabled={!edit}/>
            <Button type='button' onClick={() => {
                setTodo({...todo, completed: !item.completed})
                setCompleteStatus(item)
            }}>
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

            <Button type='button' onClick={() => removeTask(todo)}>
                <span className="material-icons">delete</span>
            </Button>
        </form>
    );
};

export default Task;