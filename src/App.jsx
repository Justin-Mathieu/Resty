import React from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Components/Header';
import History from './Components/History';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useEffect, useReducer} from 'react';
import { response } from 'msw';

const initState = {
  data: null,
  loadMessage: false,
  history: [],
  requestParams:{}
}

function reducer(state=initState, action){
  switch(action.type){
    
    case 'LOAD': 
    return {...state, loadMessage: action.payload}

    case 'DATA':
      return {...state, data: action.payload}

    case 'PARAMS':
      return {...state, requestParams: action.payload}

    case 'HISTORY':
      return {...state, history: [...state.history, action.payload]}

      case 'ADD-HISTORY':
        return {...state, data:state.history[action.payload]}
    default:
        return state;
  }
}

function App(){
const [state, dispatch] = useReducer(reducer, initState);

// UseEffect
 useEffect(()=>{
  try{
     if(state.requestParams.url && state.requestParams.method ){
dispatch({type:'LOAD', payload: true});
 async function getRequestedData(){
    let response = await axios.get(state.requestParams.url)
    dispatch({type:'DATA', payload: response});
  dispatch({type: 'HISTORY', payload: {
    method: state.requestParams.method,
    url: state.requestParams.url,
    results: response.data.results,
  }})
  }
  getRequestedData();
  dispatch({type:'LOAD', payload: false});
}
}
catch{dispatch({type:'DATA', payload: 'Error No Data'});}
}, [state.requestParams])


// Onsubmit handler
 const callApi = (requestParams) => {
dispatch({type:'PARAMS', payload: requestParams })    
  };

function showHistory(index){
dispatch({type:'ADD-HISTORY', payload:index})
}


// Rendering Components   
  return (
      <React.Fragment>
        <Header />
        <div>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <History history={state.history} showHistory={showHistory}/>
        <Results data={state.data} loadMessage={state.loadMessage} />
        <Footer />
      </React.Fragment>
    );
  }


export default App;
