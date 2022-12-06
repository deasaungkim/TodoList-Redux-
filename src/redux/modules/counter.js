

//Action value
const ADD_INPUT = "ADD_INPUT";
const DELETEBTN = 'DELETEBTN'
const ADITBTN = "ADITBTN"

//Action Creator
export const addInput = (payload) => {
  // const num = 1
  return {
    type: ADD_INPUT,
    payload: { ...payload, id }
    // id,
    // title,
    // content
  }
}

export const deleteBtn = (payload) => {
  return {
    type: DELETEBTN,
    payload
  }
}

export const aditBtn = (payload) => {
  return {
    type: ADITBTN,
    payload,

  };
};

// 초기 상태값
const initialState = {
  input: [
    {
      id: 1, title: "리액트",
      content: "리액트를 배워봅시다", isDone: false,
    },
  ],
};

// 리듀서
let id = 2
const counter = (state = initialState, action) => {

  switch (action.type) {
    case ADD_INPUT:
      id++
      return { input: [...state.input, action.payload] }

    case DELETEBTN:
      // console.log("pay::", state.input)
      const newTodoDelete = state.input.filter((items) => items.id !== action.payload)
      return { input: newTodoDelete }

    case ADITBTN:
      // console.log("pay::", state.input.isDone)
      const newTodoAdit = state.input.map((items) => {
        if (items.id === action.payload) {
          return {
            ...items,
            isDone: !items.isDone,
          };
        } else {
          return { ...items };
        }
      });
      return { newTodoAdit }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;

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