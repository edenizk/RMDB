import { useDispatch } from 'react-redux'
import React from 'react';
import { ToggleOverlay } from '../redux/actions/toggleOverlay'

const Card = (props) => {
  const dispatch = useDispatch();
  const { char } = props

  const toggleOverlay = (id) => {
    dispatch(ToggleOverlay({overlay: true, char: char, loading:true}))
  }

  return ( 
    <div className="card" onClick={() => toggleOverlay(char.id)}>
      <img className="card__image" src={char.image} alt=""></img>
      <div className="card__content">
        <h2 className="card__name">
          <span className={`card__status card__status--${char.status}`}></span>
          {char.name}
        </h2>
        <p className="card__fame">Played in: {char.fame} episodes</p>
      </div>
    </div>
   )
  
}
 
export default Card;