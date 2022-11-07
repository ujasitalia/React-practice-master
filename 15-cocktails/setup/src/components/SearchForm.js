import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();    
  },[]);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e)=> e.preventDefault()}>
        <div className="form-control">
          <label for='name'>search your favourite cocktail here</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
