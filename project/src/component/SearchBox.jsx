import React from "react";

const SearchBox = (props)=>{
              return(
              <div>
         <input className="input_movie"
          value={props.value} 
         onChange={(event)=>props.setSearchVal(event.target.value)}
         placeholder="enter movie name"></input>
          </div>
         
              );
};

// onChange={(event)=>setTimeout(() => {
//     props.setSearchVal(event.target.value)  
//  },0)}


export default SearchBox;