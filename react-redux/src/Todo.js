import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:"",
            task: "",
            todos: ['Revise for the test']
        }
    }
    
    changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name]: value
        });
    }

    addTask = () => {
        console.log('addTask')

        if(!this.state.task) {
            this.setState({
                error: 'Please enter the task.'
            })
        }
        else if(this.state.todos.includes(this.state.task)){
            this.setState({
                error: 'Please enter the a new task.'
            })
        }
        else {
            const todos = [ ...this.state.todos, this.state.task ];
            this.setState({
                task:'',
                todos: todos
            })
        }

    }

    deleteTask = (todo) => {
        // const todos = this.state.todos.filter(item => item !== todo);
        const todos = this.state.todos.filter(function(item) {
            return item !== todo;
        });
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    <input name="task" value={this.state.task} onChange={this.changeHandler}/>
                    <button onClick={this.addTask}>Add Tasks</button>
                </div>
                <div>
                    <span>{this.state.error}</span>
                </div>
                <div>
                    <ul>
                        {
                            this.state.todos.map((todo,idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <li >{todo}</li>
                                        <button onClick={() => this.deleteTask(todo)}>Delete</button>
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo;