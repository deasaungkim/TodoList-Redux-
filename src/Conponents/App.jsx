import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{ title: '', content: '', isDone: false }])
  // console.log("todos:", todos)

  const initialState = { id: 0, title: "", content: "", isDone: false }

  const [input, setInput] = useState(initialState)
  const inputHandler = (e) => {
    const { target: { value, name } } = e
    setInput({ ...input, [name]: value })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()

    console.log("todos.title:", todos.title)
    if (input.title === '' || input.content === '') return;
    setTodos([...todos, { ...input, id: todos.length + 1 }])
    setInput(initialState)
  }
  console.log("input:", input)
  console.log("todos:", todos)

  const deleteHandler = (id) => {
    const newUserList = todos.filter((items) => items.id !== id);
    setTodos(newUserList)
  }
  const editHandler = (id) => {
    const newUserList = todos.map((items) => {
      if (items.id === id) {
        return {
          ...items,
          isDone: !items.isDone,
        };
      } else {
        return { ...items };
      }
    });
    setTodos(newUserList);
  };

  // data?.map((item, idx) =>return {}) // optional chaining

  return (
    <>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label><input value={input.title} name="title" onChange={inputHandler} />
        <label>내용</label>
        <input value={input.content} name="content" onChange={inputHandler} />
        <button>추가하기</button>
      </form>
      <h1>Working</h1>

      <div>
        {todos.map((items) => {
          if (!items.isDone) {
            return <div><div>{items.title}{items.content}</div>
              <div>
                <button onClick={() => deleteHandler(items.id)}>삭제하기</button>

                <button onClick={() => editHandler(items.id)}>{items.isDone ? "취소" : "완료"}</button></div></div>
          }
        })}
      </div>
      <h1>Done</h1>
      <div>
        {todos.map((items) => {
          if (items.isDone) {
            return <div><div>{items.title}{items.content}</div>
              <div>
                <button onClick={() => deleteHandler(items.id)}>삭제하기</button>

                <button onClick={() => editHandler(items.id)}>{items.isDone ? "취소" : "완료"}</button></div></div>
          }
        })}
      </div>
    </>
  )

}

export default App;












