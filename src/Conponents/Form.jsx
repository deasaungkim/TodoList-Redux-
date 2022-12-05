import { useState } from 'react';
import { useDispatch } from "react-redux"
import { ADDINPUT } from '../redux/config/redux1/modules/counter'
function Form() {

  const dispatch = useDispatch();

  // const [todos, setTodos] = useState([{id:0, title: '', content: '', isDone: false }])
  // console.log("todos:", todos)

  // const initialState = { id: 0, title: "", content: "", isDone: false }

  const [input, setInput] = useState([{ id: 0, title: '', content: '', isDone: false }])

  const inputHandler = (e) => {
    const { target: { value, name } } = e
    setInput({ ...input, [name]: value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (input.title === '' || input.content === '') return;

    dispatch({ type: "ADDINPUT", payload: { ...input, id } });

    setTodos([...todos, { ...input, id: todos.length + 1 }])
    setInput(initialState)
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label>
        <input value={input.title} name="title" onChange={inputHandler} />
        <label>내용</label>
        <input value={input.content} name="content" onChange={inputHandler} />
        <button>추가하기</button>
      </form>
    </div>

  )
}

export default Form;