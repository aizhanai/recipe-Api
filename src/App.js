import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Form from "./component/Form";
import List from "./component/List";
import Recipe from "./component/Recipe";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      recipes: []
    };
  }
  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };
  getRecipe = async (e) => {
    const searchItem = this.state.inputVal;
    e.preventDefault();
    const api_call = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${searchItem}`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };
  render() {
    const { inputVal, recipes } = this.state;
    console.log(recipes);
    return (
      <Router>
        <div>
          <header>Find your recipe</header>
          <Switch>
            <Route exact path="/">
              <Form
                handleChange={this.handleChange}
                value={inputVal}
                getRecipe={this.getRecipe}
              />
              <List recipes={recipes} />
            </Route>
            <Route path="/recipe" component={Recipe} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
