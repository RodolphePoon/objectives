import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'

class Objectives extends Component{

	render(){
		let {objectives}=this.props.objectives
		return(
			<div>{objectives.map((e,index)=>(<div key={e.id}>{e.title} {e.current} <Button tp={e.current} index={index}/></div>))}</div>
			
			)
	}
}
const mapStateToProps=(state)=>({
  objectives:state.objectives
})
export default  connect(mapStateToProps)(Objectives);
