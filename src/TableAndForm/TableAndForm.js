import React, { Component } from "react";

const initialState = {
  //define required state variables here
  
};

class TableAndForm extends Component {
  constructor() {
    super();

    this.state = initialState;
    this.handleChange.bind(this);
  }

  // write your event handlers and lifecycle methods in here

  handleChange=(event)=>{
    const value = event.target.value;    
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    //entries is an array, which you are gonna use...
    let entries = this.state.entries;

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
          <input type="checkbox" id="checkHandler" className="checkHandler" />
        </div>
        <div className="tag4">
          <p className="tag04">
            invoice #:4653
            <br />
          </p>

          <label htmlFor="currency">Currency:</label>
          <select id="currency">
            {/* write the options required. On selecting an option it should display where ever it's required */}
          </select>
        </div>
        <hr />
        <fieldset className="field">
          <table className="tableClass">
            {/* write code for adding the new rows into the table */}
            

          </table>
          {/* fill in the below table which is the second table for invoice calculations */}
          <table className="tableValues">
            <tbody>
              <tr className="subTable1">
                <td className="subTableLeft"></td>
                <td className="subTableRight">
                   
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable2">
                <td className="subTableLeft"></td>
                <td className="subTableRight"></td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable3">
                <td className="subTableLeft"></td>
                <td className="subTableRight"></td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable4">
                <td className="subTableLeft"></td>
                <td className="subTableRight"></td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable5">
                <td className="subTableLeft"></td>
                <td className="subTableRight"></td>
              </tr>
            </tbody>
          </table>
        </fieldset>

        <br />
        <button className="showForm" id="showForm">
          Add new task
        </button>
        <br />
        <br />

        {/* fill in the form which should display on clicking the 'Add new Task' button */}
        <div className="Add" id="addForm">
          <form className="myform" id="myForm" ref="myform">
            <fieldset className="field">
              <label>Title:</label>
              <input type="text" className="title" value={this.state.title} onChange={this.handleChange}/>
              <p className="error"></p>
              <br />
              <label>Description:</label>
              <input type="text" className="description" value={this.state.description}  onChange={this.handleChange}/>
              <p className="error"></p>
              <br />
              <label>Rate:</label>
              <input type="number" className="rate" value={this.state.rate} onChange={this.handleChange}/>
              <p className="error"></p>
              <br />
              <label>Hours:</label>
              <input type="number" className="hours" value={this.state.hours} onChange={this.handleChange} />
              <p className="error"></p>
              <br />
              <br />
              <button type="submit" className="btn">
                Add
              </button>
              <button type="submit" className="closeBtn">
                Close
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default TableAndForm;
