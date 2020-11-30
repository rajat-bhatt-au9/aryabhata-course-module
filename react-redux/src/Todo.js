import React from 'react';
import { connect } from 'react-redux';
import TodoItems from './TodoItems';
class Todo extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:"",
            task: "",
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
        else if(this.props.todos.includes(this.state.task)){
            this.setState({
                error: 'Please enter the a new task.'
            })
        }
        else if(this.state.task.length < 10) {
            this.setState({
                error: 'Task must have atleat 10 characters.'
            })
        }
        else {
            this.props.dispatch({
                type: 'ADD_TASK',
                payload: this.state.task
            });
            this.setState({
                error:'',
                task:'',
            })
        }

    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    <input name="task" value={this.state.task} onChange={this.changeHandler}/>
                    <button onClick={this.addTask}>Add Tasks</button>
                </div>
                {
                    this.state.error &&
                    <div>
                        <span>{this.state.error}</span>
                    </div>
                }
                <TodoItems />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state
    }
}
export default connect(mapStateToProps)(Todo);