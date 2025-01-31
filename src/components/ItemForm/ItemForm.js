import React from 'react';
import { withRouter } from 'react-router';

import { v4 as uuidv4 } from 'uuid'; 

import Button from '../buttons';

import './ItemForm.css';


class ItemForm extends React.Component {

    constructor(props) {
      super(props);
      const data = props.data ? props.data : {
        viikko: "",
        mittauspaiva: "",
        paino: 0,
        vyotaro: 0
      }
      this.state = {
        data: data
           
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
      }

     handleInputChange(event) {
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked : target.value;
         const name = target.name;
     
         this.setState({
             data: {
                 ...this.state.data,
                 [name]: value
             }
         });
        }

        handleCancel(event) {
          event.preventDefault();
          this.props.history.goBack();

        }

       handleSubmit(event) {
         event.preventDefault();
         console.log("lisää kirjaus");
        let data = Object.assign({}, this.state.data);
        data.paino = parseFloat(data.paino);
        data.id = data.id ? data.id : uuidv4();
        this.props.onFormSubmit(data);
        this.props.history.push("/");
       }

       handleDeleteItem(event) {
       event.preventDefault();
       this.props.onDeleteItem(this.state.data.id);
       this.props.history.push("/");
       }

    render() {
        return (

<form onSubmit={this.handleSubmit}>

<div className="itemform">

  <div className="itemform__row">

    <div>
        <label htmlFor="name"> viikko: </label>
        <input type="week" name="viikko" value={this.state.data.viikko} onChange={this.handleInputChange}  />
      </div>
     </div>
      <div className="itemform__row">
      <div>
      <label htmlFor="name">mittauspäivä: </label>
       <input type="date" name="mittauspaiva" value={this.state.data.mittauspaiva} onChange={this.handleInputChange} />
     </div>
     </div>

    

  <div className="itemform__row">
       <div>
          <label htmlFor="name">paino: </label>
          <input type="number" name="paino" step="O.5"  value={this.state.data.paino} onChange={this.handleInputChange} />
      </div>  

       <div>
           <label htmlFor="name">vyötärö: </label>
           <input type="number" name="vyotaro" step="0.5" value={this.state.data.vyotaro} onChange={this.handleInputChange} />
       </div> 
    </div>

    <div className="itemform__row">
      <div>
      <Button onClick={this.handleCancel}>PERUUTA</Button>
      </div>
      <div>
      <Button type="submit" primary>{this.state.data.id ? "TALLENNA" : "  LISÄÄ  "} </Button>
      </div>
    </div>

    { this.props.onDeleteItem ? 
    <div className="itemform__row">
      <div>
      <Button onClick={this.handleDeleteItem}>POISTA</Button> 
      </div>
      <div></div> 
  </div> : "" }
  </div>

</form>
        );
    }
} 

export default withRouter(ItemForm);