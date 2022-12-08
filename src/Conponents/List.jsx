import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { deleteBtn, aditBtn } from "../redux/modules/counter"
import { Link } from "react-router-dom"
import { Wrapper, TodoCard, Working } from "../style/Working"
import { Done } from "../style/Done"
import "../style/TodoElement.css"
function List() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.counter.input)

  // console.log("adit::", aditBtn)
  const deleteTodos = (id) => { dispatch(deleteBtn(id)) }
  const aditTodos = (id) => { dispatch(aditBtn(id)) }
  // const effect = useEffect()

  return (
    <div>
      <Working>Working</Working>
      <TodoCard>
        {todos.map((user) => {

          if (!user.isDone) {
            return (
              <Wrapper className='TodoElement' id='wrapper'>
                <Link to={`/about/${user.id}`} key={user.id} >상세보기</Link>
                <div>{user.title}</div>
                <div>{user.content}</div>
                <div>
                  <button onClick={() => deleteTodos(user.id)}>삭제하기</button>
                  <button onClick={() => aditTodos(user.id)}>{user.isDone ? "취소" : "완료"}</button>
                </div>
              </Wrapper>
            )
          }
          else {
            return null
          }
        })}
      </TodoCard>

      <Done>Done</Done>
      <TodoCard>
        {todos.map((user) => {
          if (user.isDone) {
            return (
              <Wrapper className='TodoElement ' id='wrapper'>
                <Link to={"about"} key={user.id} >상세보기</Link>
                <div>{user.title}</div>
                <div>{user.content}</div>
                <div>
                  <button onClick={() => deleteTodos(user.id)}>삭제하기</button>
                  <button onClick={() => aditTodos(user.id)}>{user.isDone ? "취소" : "완료"}</button>
                </div>
              </Wrapper>
            )
          }
          else {
            return null
          }
        })}
      </TodoCard>
    </div>
  )
}
export default List;