// import App from './App'
function TodoList(props) {

  // const done = [
  //   <form>
  //     <button>삭제하기</button>
  //     <button>취소</button>
  //   </form>
  // ]
  // const deleteUserHandler = (id) => {
  //   const newUserList =
  //     props.user.filter((props.user) => TodoList.id !== id);
  //   setUsers(newUserList)
  // }

  // function complete() {
  //   return (
  //       <div>
  //         <div>{props.user.title}</div>
  //         <div>{props.user.content}</div>
  //         <div><button>삭제하기</button><button>취소</button></div>
  //       </div>)
  // }

  // console.log("나는", props.user)
  return (
    <div className='TodoListWrap'>
      {
        // props.user ?
        <div className='TodoCard'>
          <div>{props.user.title}</div>
          <div>{props.user.content}</div>
          <div>
            <CustomButton onClick={() => { props.deleteUserHandler(props.user.id) }} color="red">삭제하기</CustomButton>

            <CustomButton onClick={() => { props.editUserHandler(props.user.id) }} color="green">{props.user.isDone ? "취소" : "완료"}</CustomButton>
          </div>
        </div>
        // : <p>유저가 없습니다</p>
      }
    </div>
  )
}

function CustomButton(props) {
  const { color, onClick, children } = props
  if (color) {
    return <button
      style={{ backgroundColor: color, color: "white" }}
      onClick={onClick} >
      {children}</button>
  }
  return < button onClick={onClick}>{children}</button>
}
export default TodoList