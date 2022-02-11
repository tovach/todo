import {useEffect, useState} from "react";
import {TodoItem} from "../types";

export const useTodos = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const [data, setData] = useState<TodoItem[]>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    const getTodos = async () => {
        try {
            const response = await fetch(url);
            const result: TodoItem[] = await response.json();
            setData(result);
            setError(false);
        } catch (e) {
            console.log(e)
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
            getTodos()
        }
        , [])
    return {data, error, loading}
}