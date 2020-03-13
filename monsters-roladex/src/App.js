import React, { Component } from "react";
import "./App.css";
import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: []
    };
  }

  componentDidMount() {
    fetch("https://api.opendota.com/api/heroes")
      .then(response => response.json())
      .then(heroes => this.setState({ heroes: heroes.slice(0, 9) }));
  }

  render() {
    return (
      <div className="App">
      <CardList heroes={this.state.heroes}>
      </CardList>
      </div>
    );
  }
}

export default App;
