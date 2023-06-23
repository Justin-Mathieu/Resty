import React from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import {useState, useEffect} from 'react';


function App(){
let [data, setData] = useState(null);
 let [requestParams, setParams] = useState({})
 let [loadMessage, setLoadMessage] = useState(false)

 useEffect(()=>{
  console.log('---------UseEffect---------');
  async function getRequestedData(){
    let response = await axios.get(requestParams.url)
    setData(response.data)
  }
  if(requestParams.url && requestParams.method ){
       setLoadMessage(true);
       setTimeout(()=>{
           getRequestedData();
    setLoadMessage(false);
       }, 1000);
  }
 }, [requestParams])


 const callApi = (requestParams) => {
const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    }
    setData(data);
    setParams(requestParams);
    

  
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
