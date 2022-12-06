import React from "react";
import Form from "../Conponents/Form";
import List from "../Conponents/List";
import "../test.css"

const Home = () => {

  return (<div>
    <h1 className="text-pop-up-top">My Todo List</h1>
    <Form />
    <List />
  </div>)
}

export default Home