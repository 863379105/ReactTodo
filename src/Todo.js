import {Component} from 'react'
import TodoItem from './TodoItem.js'

class Todo extends Component{
    state={
        todoList : [
            
        ]
    }
    randomId = ()=>{
        return Math.ceil(Math.random(0,1) * 10000000)
    }
    addTodo = (e) => {
        if(e.keyCode === 13){
            let todoInput = document.querySelector('input')
            let todoItem = {id:this.randomId(),content:todoInput.value}
            if(todoInput.value === ''){
                return
            }
            this.state.todoList.push(todoItem)
            this.setState({
                todoList:this.state.todoList
            })
            todoInput.value=''
        }
    }
    removeTodo(id){
        this.setState({
            todoList:this.state.todoList.filter(item => item.id !== id)
        })
    }
    render(){
        return(
            <div>
                <input onKeyDown={ e => this.addTodo(e) }></input>
                <ul>
                    { 
                        this.state.todoList.map(item => {
                            return <TodoItem key={item.id} data={{id:item.id,content:item.content}} parent={this} />
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todo