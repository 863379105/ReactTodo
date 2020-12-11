import {Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component{
    state = {
        completeFlag:false
    }
    completeTodo = () => {
        console.log('ok');
        this.setState({
            completeFlag:!this.state.completeFlag
        })
    }
    removeTodo = () => {
        this.props.parent.removeTodo(this.props.data.id)
    }
    render(){
    return(
        <li>
            <span className={this.state.completeFlag?'todo-item':''}>{this.props.data.content}</span>
            <span onClick={ this.completeTodo } style={{cursor:'pointer'}}>  完成</span>
            <span onClick={ this.removeTodo } style={{cursor:'pointer'}}>  删除</span>
        </li>)
    }
}
export default TodoItem