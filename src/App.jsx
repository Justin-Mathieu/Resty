import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import {useState} from 'react';


function App(){
let [data, setData] = useState(null);
 let [requestParams, setParams] = useState({})
 let [loadMessage, setLoadMessage] = useState(false)

 const callApi = (requestParams) => {
    setLoadMessage(true);
    setTimeout(()=>{
const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    }
    setData(data);
    setParams(requestParams);
    setLoadMessage(false);
  }, 2000)
  
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
