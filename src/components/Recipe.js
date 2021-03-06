import React from 'react';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';

const API_KEY = "8a96860ad80517ebb4e68f3f7c3f59ae";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.state.activeRecipe.length !== 0 &&
            <div className="active-recipe card">
              <img className="active-recipe__img handelInPhone" src={recipe.image_url} alt={recipe.title} />
              <h3 className="active-recipe__title">{recipe.title}</h3>
              <h4 className="active-recipe__publisher">
                Publisher: <span>{recipe.publisher}</span>
              </h4>
              <p className="active-recipe__website">Website:
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
              </p>
              <button className="active-recipe__button inMobile">
                <Link to="/">Go Home</Link>
              </button>
            </div>
          }
        </div>
        <Footer />
      </div>
    );
  }
};

export default Recipe;