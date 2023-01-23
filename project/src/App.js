import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import MovieListHeading from './component/MovieListHeading';
import SearchBox from './component/SearchBox';



function App() {

  const[movies, setMovies] = useState([]);
  const[searchVal ,setSearchVal] = useState("Naruto");
  const[favourites, setFavourites] = useState([]);
  //Ab movie fetch krenge toh function bnange and api call k liye async function bnaenge and url le lnge. qki man thread pr call nhi krenge so async function bnaya.

  const getMovieRequest = async (searchVal) =>{
    const url =`https://www.omdbapi.com/?s=${searchVal}&apikey=5b7fc5d3`;
    const resp = await fetch(url);
    const  data = await resp.json();
    if(data.Search){
      setMovies(data.Search);
    }

  //data.array ka naam(jo ki search h)
    //ab api call krenge jo ki use effect k andr krte hn.
};
useEffect(()=>{
  getMovieRequest(searchVal);//call kr denge ab api ko jiska name diya h hmne getMovieRequest. ar ek hi barr call krna so we will pass empty array of dependencies. baar baar load na ho issliye array of dependencies pass kri ek baar in use effect
}, [searchVal]);

const AddFavouriteMovie = (movie)=>{
  if(!favourites.includes(movie)){
    const newFavouriteList = [...favourites, movie]
    localStorage.setItem("NewFavName",JSON.stringify(newFavouriteList))
    setFavourites(newFavouriteList);
  }

};

const removeFavouriteMovie = (movie)=>{
  const newFavouriteList = favourites.filter((favourit)=> favourit.imdbID !==movie.imdbID
  );
  localStorage.setItem("NewFavName",JSON.stringify(newFavouriteList))
  setFavourites(newFavouriteList);
}

  return (
    <div>
      <MovieListHeading heading="Search Movies"/>
      <SearchBox searchVal={searchVal} setSearchVal= {setSearchVal}/>
      <MovieList name="Add To Favourite" handleFavouriteClick={AddFavouriteMovie }  movies={movies}/>
      {/* movies ko as props pass krenge. poora poora movie array aa aega useState me jo first parameter h movies me . so yha se pass kiya props ko toh udhr catch krenge props */}
       <div className='favhead'>
      <MovieListHeading heading="Favourite Movies"/>
      </div>
      <MovieList name="Remove From Favourite" handleFavouriteClick={removeFavouriteMovie}movies={favourites}
      />
    </div>
  );
}

export default App;
