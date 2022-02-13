import React, {FC, FormEvent, useState} from 'react';
import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import styles from './AddNewTask.module.scss'
import Button from "../UI/Button/Button";
import {TodoItem} from "../../types";
import {useActions} from "../../hooks";

const AddNewTask: FC = () => {
    const [userId, setUserId] = useState(0);
    const [title, setTitle] = useState('');
    const {addNewTask} = useActions()

    const formHandler = () => {

        const task: TodoItem = {
            completed: false,
            id: Date.now(),
            title,
            userId
        }

        return (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setUserId(0)
            setTitle('');
            addNewTask(task)
        }
    }

    return (
        <>
            <h3>Add new task</h3>
            <form className={styles.form} onSubmit={formHandler()}>
                <Input value={userId.toString()} onChange={(e) => setUserId(parseInt(e.currentTarget.value) || 0)}/>
                <TextArea value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
                <Button type={"submit"}>
                    <span className="material-icons">add</span>
                </Button>
            </form>
        </>
    );
};

export default AddNewTask;