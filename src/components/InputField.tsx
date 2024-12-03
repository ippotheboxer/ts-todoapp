import React from 'react';

const InputField = () => {
    const buttonClick = (e: any) => {
        e.preventDefault()
    }
  return (
    <form className='flex w-11/12 relative items-center'>
        <input type="text" placeholder='Enter a task' className='inputBox'/>
        <button className='inputSubmit' onClick={(e) => buttonClick(e)}>+</button>
    </form>
  )
}

export default InputField;