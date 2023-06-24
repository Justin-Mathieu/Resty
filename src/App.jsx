import React from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import {useState, useEffect} from 'react';


function App(){

// State
let [data, setData] = useState(null);
 let [requestParams, setParams] = useState({})
 let [loadMessage, setLoadMessage] = useState(false)

// UseEffect
 useEffect(()=>{
  try{
     if(requestParams.url && requestParams.method ){
setLoadMessage(true);
 async function getRequestedData(){
    let response = await axios.get(requestParams.url)
    setData(response.data)
  }
  getRequestedData();
  setLoadMessage(false);
  }
}
catch{setData('Error No Data');}
}, [requestParams])

// Onsubmit handler
 const callApi = (requestParams) => {
    setData(data);
    setParams(requestParams);
    
// Rendering Components   
  }
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loadMessage={loadMessage} />
        <Footer />
      </React.Fragment>
    );
  }


export default App;
