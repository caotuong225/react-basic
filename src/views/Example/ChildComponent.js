import React from "react";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleHideShow = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnClickDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs = true" : "showJobs= false";
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleHideShow()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.tittle}-{item.salary}$<></>{" "}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <button onClick={() => this.handleHideShow()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       {console.log("check props: ", props)}
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.tittle}- {item.salary}$
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
