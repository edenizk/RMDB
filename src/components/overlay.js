import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { ToggleOverlay } from '../redux/actions/toggleOverlay'

const Overlay = (props) => {
  const dispatch = useDispatch();
  const char = useSelector(state => state.UIReducer.char)
  const episodes = useSelector(state => state.UIReducer.episodes)

  const toggleOverlay = () => {
    dispatch(ToggleOverlay({overlay: false}))
  }

  return ( 
    <div className="overlay">
      <button className="overlay__button" onClick={() => toggleOverlay()}>X</button>
      <img className="overlay__image" src={char.image} alt=""></img>
      <div className="overlay__content">
        <h2 className="overlay__name">
          <span className={`overlay__status overlay__status--${char.status}`}></span>
          {char.name}
        </h2>
        <p className="overlay__fame">Played in: {episodes ? episodes.length : '...' } episodes</p>
        <h3 className="overlay__episodesTitle">EPISODE LIST</h3>
        <ul className="overlay__episodeList">
          {
            episodes ?     
            episodes.map((ep, index) => {
              return (
                <li className="overlay__episode" key={index}>
                  <h3 className="overlay__episodeNumber">- {ep.data.episode}</h3>
                  <h4 className="overlay__episodeName">{ep.data.name}</h4>
                </li>
              )
            }) : null
          }
        </ul>
      </div>
    </div>
   )
  
}
 
export default Overlay;