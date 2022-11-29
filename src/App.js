// import logo from './logo.svg';
import './App.css';
// import Done from './Done'
import TodoList from './TodoList';
import { useState } from 'react';


function App() {

  const [title, setTitle] = useState('');
  //제목의 input값을 지정
  function targetHandler(event) {
    setTitle(event.target.value)
  }//titleSetter
  const [content, setContent] = useState('')
  //내용의 input값을 지정
  function targetHandlerContent(event) {
    setContent(event.target.value)
  }//contentSetter

  const [users, setUsers] = useState([])
  //Todo의 제목과 내용을들을 담을 배열
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title,
      content,
      isDone: false
    }
    setUsers([...users, newUser])
  }
  //Todo를 받는 setter함수

  const deleteUserHandler = (id) => {
    console.log("id:", id)
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList)
  }

  const editUserHandler = (id) => {
    const newUserList = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isDone: !user.isDone,
        };
      } else {
        return { ...user };
      }
    });
    setUsers(newUserList);
  };


  const onSubmit = (event) => {
    event.preventDefault()
    //form 태그의 submit후의 일을 실행하지x
    if (title === '') { return; }
    if (content === '') { return; }
    //submit이 된후 값이''으로 초기화되므로 setter도 ''로 초기화한다
    setTitle(''); setContent('');
  }

  return (
    <div className='Layout'>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit} className='HeaderWrap'>

        <label>제목</label>
        <input onChange={targetHandler} value={title} />
        <label>내용</label>
        <input onChange={targetHandlerContent} value={content} />
        <button onClick={addUserHandler}>추가하기</button>
      </form>

      <h1>Working..</h1>
      <div className="A">
        {users.map((user) => {
          if (!user.isDone) {
            return (
              <TodoList user={user} key={user.id}
                deleteUserHandler={deleteUserHandler}
                editUserHandler={editUserHandler}>
              </TodoList>)
          }
          else { return null }
        })}
        {/* <TodoList /> */}
      </div>

      <h1>Done..</h1>
      <div className="A">
        {users.map((user) => {
          if (user.isDone) {
            return (
              <TodoList user={user} key={user.id}
                deleteUserHandler={deleteUserHandler}
                editUserHandler={editUserHandler}>
              </TodoList>)
          }
          else { return null }
        })}
      </div>
    </div>
  );
}

export default App;
