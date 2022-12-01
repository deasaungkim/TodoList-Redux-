import { useState } from 'react';

function App() {
  const [content, setContent] = useState('')
  const handler = (event) => {
    setContent(event.target.value)
  }
  const [inputo, setInput] = useState([{ text: "리액트를 배워봅시다", id: 1 }])

  const onSubmit = (event) => {
    event.preventDefault()
  }
  const put = () => {
    const newInputo = { text: content, id: inputo.length + 1 }
    setInput([...inputo, newInputo])
  }
  console.log(inputo)



  return (
    <div>

      <form onSubmit={onSubmit}>
        <input type='text' value={content} onChange={handler}></input>
        <button onClick={put}>추가하기</button>
      </form>
      <h1>Todo List</h1>
      <div>
        {inputo.map((user) => { return (<div><div>{user.content}</div></div>) })}
      </div>

    </div >)
}

export default App;