import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const OBJECTIVES = [
      { "id": 1, "title": "First objective", "start": 0, "target": 50, "current": 20, "start_date": "2018-01-05", "end_date": "2018-03-05" },
      { "id": 2, "title": "Second objective", "start": 10, "target": 42, "current": 20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 1 },
      { "id": 3, "title": "Old objective", "start": 20, "target": 0, "current": 20, "start_date": "2018-02-05", "end_date": "2018-03-05", "parent_id": 4 },
      { "id": 4, "title": "French objective", "start": 0, "target": 50, "current": 60, "start_date": "2018-01-05", "end_date": "2018-03-05", "parent_id": 2 },
      { "id": 5, "title": "Void objective", "start": 10, "target": 42, "current": -20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 2 }
    ];

    const TODAY = "2018-02-20";

    class Button extends Component {
      constructor(props) {
        super(props);
      
        this.state = {i:0};
      }

      _onClick=()=>{

        this.setState({i:this.state.i+1})
        this.props.onClick()

      }
      render(){
        return(
          <button onClick={this._onClick} >nb press {this.state.i}</button>)
      }
    }

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      objectives:OBJECTIVES
    };
  }

  _onClick=(index)=>{
    let objectives = this.state.objectives
    objectives[index].current+=1
    this.setState({ objectives})
  }


  render() {
    return (
     <div>
      {this.state.objectives.map((e,index)=><div key={index}>{e.title} {e.current} <Button onClick={()=>this._onClick(index)}/> </div>)}
    </div>
    );
  }
}

export default App;
