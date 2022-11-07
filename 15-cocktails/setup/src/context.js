import React, {useState, useEffect, useContext} from 'react';
const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () =>{
    try {
      setLoading(true)
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const {drinks} = data;
      if(drinks){
        const newCocktails = drinks.map((drink) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
          return {id:idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic, glass:strGlass}
        });
        setCocktails(newCocktails);        
      }else{
        setCocktails([]);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchDrinks();
  },[searchTerm]);
  
  return (
    <AppContext.Provider value={{
      loading,
      searchTerm,
      cocktails,
      setSearchTerm,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export {AppContext, AppProvider};
