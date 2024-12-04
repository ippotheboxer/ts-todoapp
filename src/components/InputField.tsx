import React, { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
    className='flex w-11/12 relative items-center' 
    onSubmit={(e) => { handleAdd(e); 
    inputRef.current?.blur()}}>
        <input 
        ref={inputRef}
        type="text" 
        placeholder='Enter a task' 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}
        className='inputBox'/>
        <button 
        className='inputSubmit' 
        type='submit'>+</button>
    </form>
  )
}

export default InputField;