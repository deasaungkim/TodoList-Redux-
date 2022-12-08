import React from "react";
import Form from "../Conponents/Form";
import List from "../Conponents/List";
import "../test.css"
import { Layout, Title, Background } from "../style/Title"
const Home = () => {

  return (<Background>
    <Layout>
      <Title  >My Todo List</Title>
      <Form />
      <List />
    </Layout>
  </Background>)
}

export default Home

