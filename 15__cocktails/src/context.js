import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCoctails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCoctails = drinks.map((cocktail) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            cocktail;
          return {
            id: idDrink,
            img: strDrinkThumb,
            name: strDrink,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCoctails(newCoctails);
      } else {
        setCoctails([]);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{ isLoading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
