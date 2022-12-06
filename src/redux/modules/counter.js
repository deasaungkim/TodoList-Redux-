

//Action value
const ADD_INPUT = "ADD_INPUT";
const DELETEBTN = 'DELETEBTN'

//Action Creator
export const addInput = (payload) => {
  return {
    type: ADD_INPUT,
    payload,
  }
}

export const deletebtn = (payload) => {
  return {
    type: DELETEBTN,
    payload,

  }
}
// 초기 상태값
const initialState = {
  input: [
    {
      id: 1, title: "리액트",
      content: "리액트를 배워봅시다", isDone: false,
    },
  ],
  // input: {
  //   id: "0", title: "",
  //   content: "", isDone: false,
  // },
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return { ...state, input: [...state.input, action.payload] }
    case DELETE:
      return {}
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;