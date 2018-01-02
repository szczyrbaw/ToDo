import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}

		this.inputChange = this.inputChange.bind(this);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	inputChange(e) {
		this.setState({inputValue: e.target.value});
	}

	onClickHandler(event) {
		this.props.add(this.state.inputValue);
		this.setState({inputValue: ''});
	}

	render() {
		return (
			<form className={style.TodoForm}>
				<div className="form-group">
					<input className="form-control" value={this.state.inputValue} onChange={this.inputChange} />
				</div>
				<button type="button" className="btn btn-primary" onClick={(e) => this.onClickHandler(e)} >Add</button>
			</form>
		);
	}
};
export default TodoForm;