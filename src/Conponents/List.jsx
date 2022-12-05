import { useState } from 'react';
import Todo from './Todo'
import { useSelector, useDispatch } from "react-redux"
import

  function List() {

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
        { }
        <h2>Done</h2>
        { }
      </div>

    )
  }
export default List;