import React from 'react';
import rick from '../images/rick.gif'
const Loading = () => {
  return ( 
    <div className="loading">
      <h2 className="loading__caption">GIF by <a href="https://dribbble.com/Julia_Mo">Julia</a></h2>
      <img className="loading__gif" src={rick} alt="Rick"></img>
    </div>
   )
  
}
 
export default Loading;