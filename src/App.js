// import logo from './logo.svg';
import './App.css';
import Done from './Done'
import TodoList from './TodoList';
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([{ id: 0, title: '', content: '' }])
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title,
      content
    }
    setUsers([...users, newUser])
  }

  function targetHandler(event) {
    setTitle(event.target.value)

  }
  function targetHandlerContent(event) {
    setContent(event.target.value)
  }

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList)
  }


  return (
    <div className='Layout'>
      <h1>My Todo List</h1>
      <header className='HeaderWrap'>

        <label>제목</label>
        <input onChange={targetHandler} value={title} />

        <lable>내용</lable>
        <input onChange={targetHandlerContent} value={content} />

        <button onClick={addUserHandler}>추가하기</button>
      </header>
      <h1>Working..</h1>
      {users.map((user) => {
        return <TodoList user={user} key={user.id} handleDelete={deleteUserHandler}  ></TodoList>
      })}
      <TodoList />
      <h1>Done..</h1>
      {/* <Done user={user} key={user.id} handleDelete={deleteUserHandler} /> */}


    </div>
  );
}

export default App;
