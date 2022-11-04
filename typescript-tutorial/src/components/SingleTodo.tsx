import React, {useEffect, useRef, useState} from "react";
import {Todo} from "../model";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md";
import "./styles.css";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (todo_id: number) => {
        setTodos(todos.map((todo) => todo.id === todo_id ? {...todo, isDone: !todo.isDone} : todo));
    }

    const handleDelete = (todo_id: number) => {
        setTodos(todos.filter((todo) => todo.id !== todo_id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? {...todo, todo: editTodo} : todo)));
        setEdit(false);
    }
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="todo_single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input
                        ref={inputRef}
                        className="todo_single_text" value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}/>
                ) : (
                    todo.isDone ? (<s className="todo_single_text">{todo.todo}</s>)
                        : (<span className="todo_single_text">{todo.todo}</span>)
                )
            }

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone/>
                </span>
            </div>

        </form>
    );
}
export default SingleTodo;