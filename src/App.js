import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { actions } from './store/index';

function App() {

  const counter = useSelector((state)=>state.counter);

  const dispatch = useDispatch();

  const incre = () =>{
    dispatch(actions.increment());
    // dispatch({type:"INC"})
  }

  const decre = ()=>{
    dispatch(actions.decrement())
  }

  const addBy = ()=>{
    dispatch(actions.addBy(10));
    // dispatch({type: "ADD", payload:10})
  }
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={incre}>Incre</button>
      <button onClick={decre}>Decre</button>
      <button onClick={addBy}>ADD by 10</button>
    </div>
  );
}

export default App;
