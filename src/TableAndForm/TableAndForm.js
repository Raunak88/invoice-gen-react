import React, { Component } from "react";

const initialState = {
  //define required state variables here
  entries: [
    {
      title: "Microsoft",
      description: "microsoft suit installation",
      rate: "2",
      hours: "120",
    },
    {
      title: "Amazon",
      description: "Amazon web services",
      rate: "2",
      hours: "120",
    },
  ],
  formValues: {
    title: "",
    description: "",
    rate: "",
    hours: "",
  },
  privileged: false,
  currency: "INR",
  taskFormOpen: false,
};

class TableAndForm extends Component {
  constructor() {
    super();

    this.state = initialState;
    this.handleChange.bind(this);
    this.checkHandler.bind(this);
    this.openTaskForm.bind(this);
    this.closeTaskForm.bind(this);
  }

  // write your event handlers and lifecycle methods in here

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => {
      return {
        formValues: {
          ...this.state.formValues,
          [name]: value,
        },
      };
    });
    console.log(this.state)
  };

  deleteTask=(indexToRemove)=>{
    let entriesAfterDeletion = [...this.state.entries.slice(0, indexToRemove), ...this.state.entries.slice(indexToRemove + 1)]
    this.setState({
      entries:entriesAfterDeletion
    })
  }
  checkHandler = () => {
    this.setState((prevState) => {
      return { privileged: !prevState.privileged };
    });
  };

  selectHandler = (event) => {
    this.setState({
      currency: event.target.value,
    });
  };

  openTaskForm = () => {
    this.setState({
      taskFormOpen: true,
    });
  };
  closeTaskForm = () => {
    this.setState({
      taskFormOpen: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    let newEntries = [...this.state.entries, this.state.formValues]
    this.setState({
      entries: newEntries,
      formValues:initialState.formValues
    });
    console.log(this.state);
  };
  render() {
    //entries is an array, which you are gonna use...
    let entries = this.state.entries;
    var subTotal = entries.reduce((acc, current) => {
      return acc + current.hours * current.rate;
    }, 0);
    let discount = this.state.privileged ? 7 : 2;
    let taxes = 18;
    let deposit = 400;
    let total = Math.round(
      subTotal -
        (discount / 100) * subTotal +
        (taxes / 100) * subTotal -
        deposit
    );

    return (
      <div>
        <div className="tag3">
          <h3 className="tag3">Global client</h3>
          <p>
            456 North St., Ahmedabad, Gujarat 380001
            <br />
            phone:8888888888
            <br />
            tested@client.com
            <br />
          </p>
          {/* checkbox.. when user check the checkBox the discount should change as per instructions */}
          Previleged:
          <input
            type="checkbox"
            id="checkHandler"
            className="checkHandler"
            onChange={this.checkHandler}
          />
        </div>
        <div className="tag4">
          <p className="tag04">
            invoice #:4653
            <br />
          </p>

          <label htmlFor="currency">Currency:</label>
          <select id="currency" onChange={this.selectHandler}>
            {/* write the options required. On selecting an option it should display where ever it's required */}
            <option value="(INR)">INDIA(INR)</option>
            <option value="(USD)">USA(USD)</option>
            <option value="(EURO)">EUPROPE(EURO)</option>
          </select>
        </div>
        <hr />
        <fieldset className="field">
          <table className="tableClass">
            {/* write code for adding the new rows into the table */}
            <thead>
              <tr>
              <th>S.No</th>
              <th>Item</th>
              <th>Task</th>
              <th>Hours</th>
              <th>Rate</th>
              <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{entry.title}</td>
                    <td>{entry.description}</td>
                    <td>{entry.rate}</td>
                    <td>{entry.hours}</td>
                    <td>
                      {entry.rate * entry.hours}
                      <button onClick={()=>this.deleteTask(index)}>X</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* fill in the below table which is the second table for invoice calculations */}
          <table className="tableValues">
            <tbody>
              <tr className="subTable1">
                <td className="subTableLeft">Subtotal</td>
                <td className="subTableRight">{subTotal}</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable2">
                <td className="subTableLeft">Discount</td>
                <td className="subTableRight">{discount}</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable3">
                <td className="subTableLeft">Taxes%</td>
                <td className="subTableRight">{taxes}</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable4">
                <td className="subTableLeft">Deposit {this.state.currency}</td>
                <td className="subTableRight">{deposit}</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable5">
                <td className="subTableLeft">Total {this.state.currency}</td>
                <td className="subTableRight">{total}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>

        <br />
        <button className="showForm" id="showForm" onClick={this.openTaskForm}>
          Add new task
        </button>
        <br />
        <br />

        {/* fill in the form which should display on clicking the 'Add new Task' button */}
        {this.state.taskFormOpen ? (
          <div className="Add" id="addForm">
            <form className="myform" id="myForm" ref="myform">
              <fieldset className="field">
                <label>Title:</label>
                <input
                  type="text"
                  className="title"
                  name="title"
                  value={this.state.formValues.title}
                  onChange={this.handleChange}
                />
                <p className="error"></p>
                <br />
                <label>Description:</label>
                <input
                  type="text"
                  className="description"
                  name="description"
                  value={this.state.formValues.description}
                  onChange={this.handleChange}
                />
                <p className="error"></p>
                <br />
                <label>Rate:</label>
                <input
                  type="number"
                  className="rate"
                  name="rate"
                  value={this.state.formValues.rate}
                  onChange={this.handleChange}
                />
                <p className="error"></p>
                <br />
                <label>Hours:</label>
                <input
                  type="number"
                  className="hours"
                  name="hours"
                  value={this.state.formValues.hours}
                  onChange={this.handleChange}
                />
                <p className="error"></p>
                <br />
                <br />
                <button type="submit" className="btn" onClick={this.handleSubmit}>
                  Add
                </button>
                <button
                  type="submit"
                  className="closeBtn"
                  onClick={this.closeTaskForm}
                >
                  Close
                </button>
              </fieldset>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default TableAndForm;
