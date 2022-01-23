import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    tittle: "",
  };
  handleChange = (event) => {
    this.setState({
      tittle: event.target.value,
    });
  };
  handleAdd = (event) => {
    event.preventDefault();
    if (!this.state.tittle) {
      //if(undifined/null/empty)=> false them dau ! se la true va chay dong code ben trong
      toast.warning(`Missing tittle's Todo!`);
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 100),
      tittle: this.state.tittle,
    });
    this.setState({
      tittle: "",
    });
    // cach viet khac
    // let todo = {
    //   id: Math.floor(Math.random() * 100),
    //   tittle: this.state.tittle,
    // };
    // this.props.addNewJob(todo);
  };
  render() {
    let { tittle } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={tittle}
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={(event) => this.handleAdd(event)}>Add</button>
      </div>
    );
  }
}
export default AddTodo;
