import React from 'react';
import uuid from 'uuid';
import style from '../../App.css';
import Title from '../components/Title'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="To Do List" nr={this.state.data.length}/>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
    
}

export default App;



