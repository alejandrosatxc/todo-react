import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <body>
        < Todo />
      </body>
      <footer>
        <h5>Written By Alejandro Zapien</h5>
      </footer>
    </div>
  );
}

const TodoInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`

const Input = styled.input`
  background-color: blue;
`

const Button = styled.button`
  background-color: red;
  border-radius: 5px;
  border: none;
`
const TodoList = styled.ul`
  list-style: numbers;
`
const TodoItem = styled.li`
  background-color: lightblue;
  border-radius: 5px;
  height: 30px;
  margin: 10px 0;
  padding: 10px;
`
const Title =styled.h3`
  border: 1px solid black;
`
function Todo() {

  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')

  return (
    <>
      <TodoInput >
        <Title>Todo: </Title>
        <Input type="text" onInput={(e) => setTodo(e.target.value)}></Input>
        <Button onClick={() => { setTodoList([...todoList, { text: todo }]) }}>Add Todo</Button>
      </TodoInput >
      <TodoList>
        {todoList.map((item) => <TodoItem>{item.text}</TodoItem>)}
      </TodoList>
    </>
  )
}

export default App;
