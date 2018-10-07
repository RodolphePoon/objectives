import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-google-charts';

const OBJECTIVES = [
      { "id": 1, "title": "First objective", "start": 0, "target": 50, "current": 20, "start_date": "2018-01-05", "end_date": "2018-03-05" },
      { "id": 2, "title": "Second objective", "start": 10, "target": 42, "current": 20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 1 },
      { "id": 3, "title": "Old objective", "start": 20, "target": 0, "current": 20, "start_date": "2018-02-05", "end_date": "2018-03-05", "parent_id": 4 },
      { "id": 4, "title": "French objective", "start": 0, "target": 50, "current": 60, "start_date": "2018-01-05", "end_date": "2018-03-05", "parent_id": 2 },
      { "id": 5, "title": "Void objective", "start": 10, "target": 42, "current": -20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 2 }
    ];

    const TODAY = "2018-02-20";

    const result = OBJECTIVES.filter(objective => objective.current > objective.target)

    //const data =OBJECTIVES.map(e=>[{v:e.id.toString(),f:e.title},e.parent_id?e.parent_id.toString():""])

    const data = [[
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' }
        ],
        ...OBJECTIVES.map(e=>[e.id.toString(),e.title,new Date(e.start_date),new Date(e.end_date),new Date(e.end_date)-new Date(e.start_date),100*(e.current-e.start)/Math.abs(e.target-e.start),e.parent_id?e.parent_id.toString():""])
      ]
    

class App extends Component {



  render() {
    return (
     <div>
      <div>{result.length} objectives have their current value over their target</div>
    
    <Chart
  width={'100%'}
  height={'500px'}
  chartType="Gantt"//OrgChart/Gantt
  loader={<div>Loading Chart</div>}
  data={data}
/>
    </div>
    );
  }
}

export default App;
