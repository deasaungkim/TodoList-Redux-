import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  const param = useParams()
  const navigater = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.counter.input)
  // console.log("input::", selector)
  // const detailId = selector.filter(() => { })
  const vali = selector.find((todo) => { return todo.id == parseInt(param.id) })
  console.log("vali::", vali)
  console.log("::", selector)
  // console.log("param::", param)
  // console.log('id::', id)
  // useEffect(() =>)

  return (<Detail>
    <div>{vali?.title}</div>
    <div>{vali?.content}</div>
    <button onClick={() => navigater('/')}>이전으로</button>
  </Detail>)
}

export default About


export const Detail = styled.div`
border: 1px solid #000;
width: 250px;
height: 100px;
margin:auto
`