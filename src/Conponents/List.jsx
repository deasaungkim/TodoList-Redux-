import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { deleteBtn, aditBtn } from "../redux/modules/counter"
import "../test.css"


function List() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.counter.input)
  // console.log(todos)

  const deleteTodos = (id) => { dispatch(deleteBtn(id)) }
  const aditTodos = (id) => { dispatch(aditBtn(id)) }

  return (
    <div>
      <h2 className='text-flicker-out-glow'>Working</h2>
      <div>
        {todos.map((user) => {
          if (!user.isDone) {
            return (
              <div>
                <div>상세보기</div>
                <div>{user.title}</div>
                <div>{user.content}</div>
                <div>
                  <button className='' onClick={() => deleteTodos(user.id)}>삭제하기</button>
                  <button onClick={() => aditTodos(user.id)}>{user.isDone ? "취소" : "완료"}</button>
                </div>
              </div>
            )
          }
          else {
            return null
          }
        })}
      </div>
      <h2 className='tracking-in-contract-bck-bottom '>Done</h2>
      <div>
        {todos.map((user) => {
          console.log("USER::", user)
          if (user.isDone) {
            return (
              <div>
                <div>상세보기</div>
                <div>{user.title}</div>
                <div>{user.content}</div>
                <div>
                  <button onClick={() => deleteTodos(user.id)}>삭제하기</button>
                  <button onClick={() => aditTodos(user.id)}>{user.isDone ? "취소" : "완료"}</button>
                </div>
              </div>
            )
          }
          else {
            return null
          }
        })}
      </div>
    </div>

  )
}
export default List;