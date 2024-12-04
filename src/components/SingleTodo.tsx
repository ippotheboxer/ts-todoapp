import React from 'react'
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
  return (
    <form className='todosSingle flex justify-between items-center w-11/12 lg:w-4/12 rounded-lg p-2 mt-4 bg-pink-100'>
        <span className="todos_single_textp-1 border-none text-sm">{todo.todo}</span>

        <div className='flex flex-row'>
            <span className="icon">
                <AiFillEdit />
                </span>
            <span className="icon">
                <MdDelete />
                </span>
            <span className="icon">
                <MdDone />
                </span>
        </div>
    </form>
  )
}

export default SingleTodo;