import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

type Props = {
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id? {...todo, isDone:!todo.isDone}: todo))
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map(todo => (
            todo.id === id? {...todo, todo: editText} : todo
        )))
    setEdit(false);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
    className='todosSingle flex justify-between items-center w-11/12 lg:w-4/12 rounded-lg p-2 mt-4 bg-pink-100'
    onSubmit={(e) => handleEdit(e, todo.id)}
    >
        { edit ? (
            <input 
            ref={inputRef}
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            className='outline-none'/>
            ) : todo.isDone ? (
                <s className="todos_single_textp-1 border-none text-sm">{todo.todo}</s>
            ) : (
                <span className="todos_single_textp-1 border-none text-sm">{todo.todo}</span>
            )}
        
        
        
        

        <div className='flex flex-row'>
            <span className="icon" 
            onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit);
                }
            }}
            >
                <AiFillEdit />
                </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <MdDelete />
                </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
                </span>
        </div>
    </form>
  )
}

export default SingleTodo;