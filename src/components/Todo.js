import { useState } from 'react';
import styled from 'styled-components';

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
const Label = styled.label`
  border: 1px solid black;
`
function Todo() {

  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')

  return (
    <>
      <TodoInput >
        <Label htmlFor='todo' >Todo: </Label>
        <Input name="todo" type="text" onInput={(e) => setTodo(e.target.value)}></Input>
        <Button onClick={() => { setTodoList([...todoList, { text: todo }]) }}>Add Todo</Button>
      </TodoInput >
      <TodoList>
        {todoList.map((item) => <TodoItem>{item.text}</TodoItem>)}
      </TodoList>
    </>
  )
}

export default Todo