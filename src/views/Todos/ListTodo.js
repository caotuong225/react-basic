import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "1", tittle: "Doing homework" },
      { id: "2", tittle: "Watching TV" },
      { id: "3", tittle: "Fixing bugs" },
    ],
    editTodo: {},
  };
  // handleChage = (event) => {
  //   this.setState({
  //     tittle: event.target.value,
  //   });
  // };
  addNewJob = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  // handleAdd = (event) => {
  //   event.preventDefault();
  //   if (!this.state.tittle) {
  //     alert("chua nhap");
  //     return;
  //   }
  //   this.addNewJob({
  //     id: Math.floor(Math.random() * 11),
  //     tittle: this.state.tittle,
  //   });
  //   this.setState({
  //     tittle: "",
  //   });
  // };
  handleDelete = (todo) => {
    let current = this.state.listTodos;
    current = current.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: current,
    });
    toast.success("Delete succeed!");
  };
  handleEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      //log obj to console
      console.log("Before update: ", listTodosCopy[objIndex]);
      //Update obj's tittle property
      listTodosCopy[objIndex].tittle = editTodo.tittle;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update succeed!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.tittle = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    // console.log("state: ", this.state);
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check empty: ", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewJob={this.addNewJob} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.tittle}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1}
                          <input
                            value={editTodo.tittle}
                            onChange={(event) => this.handleOnChangeEdit(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.tittle}
                        </span>
                      )}
                    </>
                  )}

                  <button
                    className="edit"
                    onClick={() => this.handleEdit(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button onClick={() => this.handleDelete(item)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
