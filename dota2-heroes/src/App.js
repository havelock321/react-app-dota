import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      searchField: ""
    };

    //this.handleChange = this.handleChange.bind(this); sem arrow function
  }

  componentDidMount() {
    fetch("https://api.opendota.com/api/heroes")
      .then(response => response.json())
      .then(heroes => this.setState({ heroes: heroes.slice(0, 9) }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { heroes, searchField } = this.state;
    const filteredHeroes = heroes.filter(hero =>
      hero.localized_name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
      <h1>Dota 2 Heroes</h1>
        <SearchBox
          placeholder="search dota 2 heroes"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList heroes={filteredHeroes}></CardList>
      </div>
    );
  }
}

export default App;
