import React from 'react';
import { useSelector } from 'react-redux'
import Card from "./card"
import Overlay from "./overlay"
import schwifty from '../images/loading.png'

const Cards = () => {
  const chars = useSelector(state => state.dataReducer.chars)
  const overlay = useSelector(state => state.UIReducer.overlayCard)
  const loading = useSelector(state => state.UIReducer.loading)

  return ( 
    <div className="cards">
      <ul className="cards__cardList">
        {chars.map((char, index) => {
          return (
            <li className="cards__card" key={index}>
              <Card char={char}></Card>
            </li>
          )
        })}
      </ul>
    {
    overlay ? 
      loading ? 
      <div className="cards__loading">
        <img src={schwifty} alt="schwifty" className="cards__loadingImage"></img>
      </div>
         : 
        <Overlay></Overlay> 
      : null}
      
    </div>
   )
  
}
 
export default Cards;