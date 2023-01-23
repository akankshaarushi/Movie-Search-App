import React from "react";

const MovieList =(props) =>{
      if(!props){
        props=localStorage.getItem("NewFavName");
      }

    return(
            <div className="movie-app">
              <div className="movie_card">
              {props.movies.map((abc)=>(// map me jo bhi key pass krenge wohi hme img me pass krni hogi ar alt k sath bhi and html ko render krane k liye round bracket lena hota jsx likh rhe issliye ar agr curley braces lga denge toh browser sochega ki function krrhe kch so we use paraenthesi
                       <div className="poster_card">
                            <img src={abc.Poster} alt={abc.Title} className="Images" />
                            <button onClick={()=>props.handleFavouriteClick(abc)} className="AddtoFav">{props.name}</button>
                       </div>
                       
              ))}
              </div>
              </div>
    )
}

















export default MovieList;