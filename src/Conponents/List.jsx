import React from 'react';
import Todo from './Todo'
import { useSelector, useDispatch } from "react-redux"



function List() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.counter.input)
  // const deleteHandler = (id) => {
  //   const newUserList = todos.filter((items) => items.id !== id);
  //   setTodos(newUserList)
  // }
  // const editHandler = (id) => {
  //   const newUserList = todos.map((items) => {
  //     if (items.id === id) {
  //       return {
  //         ...items,
  //         isDone: !items.isDone,
  //       };
  //     } else {
  //       return { ...items };
  //     }
  //   });
  //   setTodos(newUserList);
  // };
  // data?.map((item, idx) =>return {}) // optional chaining

  return (
    <div>
      <h2>Working</h2>
      <div>
        {todos.map((user) => {

          if (!user.isDone) {
            return (
              <div>
                <div>상세보기</div>
                <div>{user.title}</div>
                <div>{user.content}</div>
                <div>
                  <button>삭제하기</button>
                  <button>취소</button>
                </div>
              </div>
            )
          }
          else {
            return null
          }
        })}
      </div>
      <h2>Done</h2>
      { }
    </div>

  )
}
export default List;