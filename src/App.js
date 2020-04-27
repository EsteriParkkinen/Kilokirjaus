import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import firebase from './firebase';

import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    data: []
  }
  this.dbRef = firebase.firestore();
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleDeleteItem = this.handleDeleteItem.bind(this);
}

componentDidMount() {
  this.refData = this.dbRef.collection('data');
  this.refData.orderBy("mittauspaiva","desc").onSnapshot((docs) => {
    let data = [];
    docs.forEach((doc) => {
      let docdata = doc.data();
      data.push(docdata);
    });
    this.setState({
      data: data
    });
  });
}

 handleFormSubmit(newdata) {
   this.refData.doc(newdata.id).set(newdata);
 }

 handleDeleteItem(id) {
   this.refData.doc(id).delete().then().catch(error => {console.error("Virhe tietoa poistettaessa: ", error)});
 }

  render () {
    return (
      <Router>
    <div className="App">
        <Header />
       <Route path="/" exact render={() => <Items data={this.state.data} />} />
       <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
       <Route path="/settings" component={Settings} />
       <Route path="/add" render={() => <AddItem onFormSubmit={this.handleFormSubmit}/>} />
       <Route path="/edit/:id" render={(props) => <EditItem data={this.state.data}
                                                             onFormSubmit={this.handleFormSubmit}
                                                             onDeleteItem={this.handleDeleteItem}
                                                             {...props} />} />
       <Menu />
      </div>
    </Router>
   );
  }
}


export default App;
