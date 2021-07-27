import "./App.css";
import { useState } from "react";

function App() {
  const [hideAddRecipe, setHideAddRecipe] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipes, setRecipes] = useState([]);

  // hide button when clicked
  const hideButton = () => {
    setHideAddRecipe(true);
    setShowForm(true);
  };

  // get recipe name/instructions from userinput
  const userInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setRecipeName(value);
    } else if (name === "instructions") {
      setRecipeInstructions(value);
    }
  };

  // handle form submit
  // save recipe
  const formSubmitted = (e) => {
    e.preventDefault();
    // add recipeName and instructions to an object
    //then add to recipes
    const newRecipe = { name: recipeName, instructions: recipeInstructions };
    // add newRecipe to list and keep items already added
    setRecipes((prevRecipes) => [...recipes, newRecipe]);
    //hide form show add recipe button
    setHideAddRecipe(false);
    setShowForm(false);
    setRecipeName("");
    setRecipeInstructions("");
  };

  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>
      {/* remove button when clicked */}
      {hideAddRecipe === false ? (
        <button onClick={() => hideButton()}>Add recipe</button>
      ) : (
        ""
      )}

      {/* render my recipes and hide no recipes text when recipes exist */}
      {recipes.length >= 1 ? "" : <p>There are no recipes to list</p>}
      {recipes.length >= 1 &&
        recipes.map((recipe, idx) => {
          return (
            <div key={idx}>
              <p>{recipe.name}</p>
            </div>
          );
        })}
      {/* render form when button is clicked */}
      {showForm === true ? (
        <form onSubmit={(e) => formSubmitted(e)}>
          <label>Recipe Name</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => userInput(e)}
            name="name"
            required
          />
          <label>Recipe Instructions</label>
          <input
            type="text"
            value={recipeInstructions}
            onChange={(e) => userInput(e)}
            name="instructions"
            required
          />
          <button>Submit</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
