import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instr,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            img,
            info,
            glass,
            category,
            instr,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>No cocktail to display</h2>;
  }

  const { img, name, category, glass, instr, ingredients, info } = cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={img} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>Category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>Glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instr}
          </p>
          <p>
            <span className='drink-data'>Ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
