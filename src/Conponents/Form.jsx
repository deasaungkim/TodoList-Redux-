import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { counter } from "../redux/modules/counter"
import { addInput } from "../redux/modules/counter"
import "../style/header.css"


function Form() {
  const dispatch = useDispatch();

  // const [todos, setTodos] = useState([{id:0, title: '', content: '', isDone: false }])
  // console.log("todos:", todos)

  // const initialState = { id: 0, title: "", content: "", isDone: false }

  // const [input, setInput] = useState({ id: 1, title: '', content: '', isDone: false })
  const [input, setInput] = useState({ content: '', title: '' })
  console.log("input::", input)
  const inputHandler = (e) => {
    const { target: { value, name } } = e
    setInput({ ...input, [name]: value })
  }

  // const [num, setNum] = useState(1)
  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (!input.title || !input.content) return;

    dispatch(addInput({ title: input.title, content: input.content, isDone: false }));


    setInput({ title: '', content: '' })
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler} className="HeaderWrap">
        <label ></label>
        <input value={input.title} name="title" onChange={inputHandler} placeholder="제목을  입력하세요" />
        <label></label>
        <input value={input.content} name="content" onChange={inputHandler} placeholder="내용을  입력하세요" />
        <button className='pulsate-bck'>추가하기</button>
      </form>
    </div>

  )
}

export default Form;