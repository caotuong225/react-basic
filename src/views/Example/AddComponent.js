import React from "react";
class AddComponent extends React.Component {
  state = {
    tittle: "",
    salary: "",
  };
  handleChange = (event) => {
    this.setState({
      tittle: event.target.value,
      //   salary: event1.target.value,
    });
  };
  handleChange1 = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleClick = (event) => {
    // alert("click me");
    event.preventDefault(); // ngan chan viec reload lai trang
    console.log("check data input: ", this.state);
    if (!this.state.tittle || !this.state.salary) {
      alert("Chua nhap");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 100),
      tittle: this.state.tittle,
      salary: this.state.salary,
    });
    this.setState({
      tittle: "",
      salary: "",
    });
  };
  render() {
    // console.log("check ", this.state);
    return (
      <form>
        <label htmlFor="fname">Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.tittle}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChange1(event)}
        />
        <br />
        <input
          type="submit"
          // value="Submit"
          onClick={(event) => this.handleClick(event)}
        />
      </form>
    );
  }
}
export default AddComponent;
