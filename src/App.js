import React,{ Component } from 'react';
import './App.css';
import{ CardList }from './components/card-list/cardlist.component';
import {Search} from './components/searchbox/search';

class App extends Component {
    constructor(){
      super();
      this.state = {
        monsters: [],
        seachField: ""
      };
      // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(app=> app.json())
      .then(users =>{this.setState({monsters: users})})
    }

    handleChange=(e)=>{
      this.setState({seachField: e.target.value})
    }

    render(){
      const { monsters,seachField }= this.state;
      const filterdMonster = monsters.filter(monster => monster.name.toLowerCase().includes(seachField.toLowerCase()));
    return (
      <div className="App">
        
        <h1> Monster Roledox</h1>
        
        <Search  
          placeholder = 'search'
          handleChange = {this.handleChange}
        />

        <CardList monsters={filterdMonster} />
      </div>
    )}
};

export default App;
