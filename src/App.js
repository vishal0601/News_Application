import './App.css';
import React, {Component} from'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 

 export default class App extends Component{
   state={
     progress:0
   }
   setProgress=(progress)=>{
     this.setState({progress:progress})
   }
   render(){
     return(
      
       <div>
         <Router>
         <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
         <Routes>
            <Route exact path="/about" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={9} country="us" category="business"/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="business" pageSize={9} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={9} country="us" category="entertainment"/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={9} country="us" category="science"/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="cricket" pageSize={9} country="us" category="technology"/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="health"/>} />
        </Routes>
        </Router>
       </div>
       
     )
   }
 }
 
