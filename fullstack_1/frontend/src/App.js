import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Chart } from "react-google-charts";

const OBJECTIVES = [
      { "id": 1, "title": "First objective", "start": 0, "target": 50, "current": 20, "start_date": "2018-01-05", "end_date": "2018-03-05" },
      { "id": 2, "title": "Second objective", "start": 10, "target": 42, "current": 20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 1 },
      { "id": 3, "title": "Old objective", "start": 20, "target": 0, "current": 20, "start_date": "2018-02-05", "end_date": "2018-03-05", "parent_id": 4 },
      { "id": 4, "title": "French objective", "start": 0, "target": 50, "current": 60, "start_date": "2018-01-05", "end_date": "2018-03-05", "parent_id": 2 },
      { "id": 5, "title": "Void objective", "start": 10, "target": 42, "current": -20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 2 }
    ];

    const TODAY = "2018-02-20";

    const result = OBJECTIVES.filter(objective => objective.current > objective.target)

    


class App extends Component {

  
  expectation(date,x1,y1,x2,y2){

    return (y2-y1)/(x2-x1)*(date-x1)+y1
  }

     lineChart=(obj)=>{

      let expectedValue= this.expectation(new Date(TODAY),new Date(obj.start_date),obj.start,new Date(obj.end_date),obj.target)
      const dataTest =[[
      { type: 'date', label: 'Time' },
      'target','current'
    ],
    [new Date(obj.start_date),obj.start,obj.start],
    [new Date(TODAY),expectedValue,obj.current],
    [new Date(obj.end_date),obj.target,null],
    ]

    return(
    <div style={{height:200,width:400, border:'1px solid black'}}>
     <Chart
          chartType="LineChart"
          data={dataTest}
          options={{
    hAxis: {
      title: obj.title,
    }}}
          width="100%"
          height="100%"
        />
    </div>
    )
  }
  render() {
    return (
     <div>
      <div>{result.length} objectives have their current value over their target</div>
      <div>{OBJECTIVES.map(objective=>(<div key={objective.title}>{this.lineChart(objective)}</div>))} </div>
    </div>
    );
  }
}

export default App;
