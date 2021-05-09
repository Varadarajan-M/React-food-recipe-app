import { Searchbox } from "./Searchbox";
import { Resultcards } from "./Resultcards";
import { Moreresults } from "./Moreresults";
import SentimentVeryDissatisfiedIcon from "../../node_modules/@material-ui/icons/SentimentVeryDissatisfied";
import React, { useState } from "react";
export default function App() {
  const [results, setResults] = useState([]);
  const [viewState, setViewState] = useState(true);
  const [state, setState] = useState(true);
  const [searchState, setSearchState] = useState(false);

const handleClick=(item)=> {
    localStorage.setItem("SearchQuery", item);
    setViewState(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals == null) {
          setState(false);
        } else {
          setResults(data.meals);
          setState(true);
          setSearchState(true);
        }
      });
  }

  const viewMoreHandler=(id)=> {
 

    setViewState(!viewState);

    setResults((results) => {
      return results.filter((item, index) => {
        return index === id;
      });
    });
  }

  return (
    <div className="App">
      <Searchbox onclick={handleClick} />
      {searchState ? <p>Search Results </p> : ""}
      {state ? (
        <div className="row">
          {viewState
            ? results.map((item, index) => {
                return (
                  <Resultcards
                    key={item.idMeal}
                    id={index}
                    itemName={item.strMeal}
                    thumbnail={item.strMealThumb}
                    category={item.strCategory}
                    area={item.strArea}
                    viewmore={viewMoreHandler}
                  />
                );
              })
            : results.map((item) => {
                return (
                  <Moreresults
                    key={item.idMeal}
                    itemName={item.strMeal}
                    thumbnail={item.strMealThumb}
                    category={item.strCategory}
                    area={item.strArea}
                    instructions={item.strInstructions}
                    ingredient1={item.strIngredient1}
                    ingredient2={item.strIngredient2}
                    ingredient3={item.strIngredient3}
                    ingredient4={item.strIngredient4}
                    ingredient5={item.strIngredient5}
                    ingredient6={item.strIngredient6}
                    ingredient7={item.strIngredient7}
                    ingredient8={item.strIngredient8}
                    video={item.strYoutube}
                    onclick={handleClick}
                  />
                );
              })}
        </div>
      ) : (
        <div className="text-center">
          Oops We Didn't Find that one <SentimentVeryDissatisfiedIcon />
        </div>
      )}
    </div>
  );
}
