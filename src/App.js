import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Header from './components/Header';

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
        <Header />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
        <Footer />
      </div>
    );
  }
}

export default App;
