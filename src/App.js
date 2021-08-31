import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Route } from "react-router-dom";
import ComponentA from './components/ComponentA'

const App = (props) => {
  return (
    <div className="App">
      
      deneme

      <ComponentA/>
   
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, { sepeteEkle })(App);
