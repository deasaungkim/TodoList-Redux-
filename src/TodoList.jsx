// import App from './App'
function TodoList(props) {
  // const cardBox = []
  // for (let i = 0; i < props.topics.length; i++) {
  //   let t = props.topics[i]
  // }
  // cardBox.push(
  //   <form>
  //     <h1>Working..</h1>
  //     {/* {t.id} */}
  //     //받을 컴포넌트
  //     <div>{props.user.title}</div>
  //     <div>{props.user.content}</div>
  //     <button onClick={() => { props.handleDelete(props.user.id) }}>삭제하기</button>
  //     <button>완료</button>
  //   </form>
  // )
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
  console.log("나는", props.user)

  // function complete() {
  //   return (
  //       <div>
  //         <div>{props.user.title}</div>
  //         <div>{props.user.content}</div>
  //         <div><button>삭제하기</button><button>취소</button></div>
  //       </div>)
  // }

  return (
    <div className='TodoListWrap'>
      {
        props.user ?
          <div className='TodoCard'>
            <div>{props.user.title}</div>
            <div>{props.user.content}</div>

            <div><CustomButton onClick={() => { props.handleDelete(props.user.id) }} color="red">삭제하기</CustomButton>
              <CustomButton color="green">완료</CustomButton></div>
          </div>
          : <p>유저가 없습니다</p>
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