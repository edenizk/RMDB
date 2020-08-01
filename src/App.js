import React, { useEffect } from 'react';
import './App.scss';
import Loading from './components/loading';
import Cards from './components/cards';
import { useDispatch, useSelector } from 'react-redux'
import { InitData } from './redux/actions/initData';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.dataReducer.loading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(InitData())
    }, 6400);

  });

  return (
    <div className="App">
        {loading ? <Loading></Loading> : <Cards></Cards>}
    </div>
  );
}

export default App;
