import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '8a96860ad80517ebb4e68f3f7c3f59ae';

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20${recipeName}`)

    const data = await api_call.json();
    console.log('data :', data);
    this.setState({ recipes: data.recipes });
    // document.getElementById("create-food-form").reset();
  }

  componentDidMount = () => {
    const jsonItem = localStorage.getItem("recipes")
    if (jsonItem) {
      const json = jsonItem;
      const recipes = JSON.parse(json);
      this.setState({ recipes });
    }

  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Food-App</h1>
          <a href="https://github.com/sumitkumar1207" target="_blank">Get The Code
          </a>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
