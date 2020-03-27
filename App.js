import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { isTemplateElement } from '@babel/types';
import TodoListHeader from "./TodoListHeader";
import TodoList from "./TodoList";
class App extends Component{
  render(){
  
    return (
      <div className="App">
        <TodoListHeader />
        <TodoList />
      </div>
    );
  }
}

export default App;
