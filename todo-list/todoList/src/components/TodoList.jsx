import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            inputValue: ""
        };
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    addTask = () => {
        const task = this.state.inputValue.trim();

        if (!task) return;

        this.setState({
            tasks: [...this.state.tasks, task],
            inputValue: ""
        });
    };

    render() {
        return (
            <div className="todo-container">
                <h2>{this.props.title}</h2>

                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    placeholder="Введіть завдання"
                />

                <button onClick={this.addTask}>Додати</button>

                <ul>
                    {this.state.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;