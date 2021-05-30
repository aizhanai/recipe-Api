import React from "react";


class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRecipe: {}
    };
  }
  fetchRecipe = async () => {
    const id = this.props.location.state.id;
    const req = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rid=${id}`
    );
    const res = await req.json();
    this.setState({ currentRecipe: res.recipe });
  };
  componentDidMount = () => {
    this.fetchRecipe();
  };
  render() {
    console.log(this.props);
    const { currentRecipe } = this.state;
    return (
      <div>
        <h2>{currentRecipe.title}</h2>
        <img src={currentRecipe.image_url} alt="" />
        <button>
          <a href={currentRecipe.publisher_url}>Publisher</a>
        </button>
      </div>
    );
  }
}
export default Recipe;
