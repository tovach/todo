import {useEffect, useState} from "react";
import {TodoItem} from "../types";

export const useGetTodos = (page: number, limit: number=10) => {
    const url = `https://jsonplaceholder.typicode.com/todos/?_page=${page}&_limit=${limit}`;
    const [data, setData] = useState<TodoItem[]>();
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);


    const getTodos = async () => {
        try {
            const response = await fetch(url);
            const headers = response.headers.get('x-total-count');
            const result: TodoItem[] = await response.json();

            setTotalPages(Math.ceil(parseInt(headers || '') / limit))

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
        , [page])
    return {data, error, loading, totalPages}
}