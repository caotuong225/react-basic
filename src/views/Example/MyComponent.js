import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abc", tittle: "DEV", salary: "500" },
      { id: "abc1", tittle: "DEV1", salary: "1000" },
      { id: "abc2", tittle: "DEV2", salary: "400" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    console.log("call render", this.state);
    //let {(name, age)} = this.props; khai bao ngan cua props
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default MyComponent;
