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
  privileged:false,
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
checkHandler=()=>{
    this.setState(prevState=>{         
        
    })
}



  render() {
    //entries is an array, which you are gonna use...
    let entries = this.state.entries;
    let subTotal=this.state.entries.reduce((acc,current)=>{
        return acc+current.hours*current.rate;
    },0)
    let discount=this.state.privileged?7:2;
    let taxes = 18;
    let deposit=400;
    let total=Math.round(subTotal-(discount/100*subTotal)+(taxes/100*subTotal)-deposit);

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
          <input type="checkbox" id="checkHandler" className="checkHandler" onChange={this.checkHandler}/>
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
            <thead>
              <td>S.No</td>
              <td>Item</td>
              <td>Task</td>
              <td>Hours</td>
              <td>Rate</td>
              <td>Amount</td>
            </thead>
            <tbody>
                {this.state.entries.map((entry,index)=>{
                    return(<tr>
                         <td>{index+1}</td>
                         <td>{entry.title}</td>
                         <td>{entry.description}</td>
                         <td>{entry.rate}</td>
                         <td>{entry.hours}</td>
                         <td>{entry.rate*entry.hours}<button onClick={this.deleteTask}>X</button></td>
                    </tr>)
                   
                })}
            </tbody>


          </table>
          {/* fill in the below table which is the second table for invoice calculations */}
          <table className="tableValues">
            <tbody>
              <tr className="subTable1">
                <td className="subTableLeft">Subtotal</td>
                <td className="subTableRight">{subTotal}             
                </td>
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
                <td className="subTableLeft">Deposit(INR)</td>
                <td className="subTableRight">{deposit}</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="subTable5">
                <td className="subTableLeft">Total</td>
                <td className="subTableRight">{total}</td>
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
