import React, { Component } from 'react';
import {increment,randomIncrement} from './actions'
import { connect } from 'react-redux'

class Button extends Component{


	_onClick=()=>{
		const index=this.props.index!=undefined?this.props.index+1:0

		this.props.index!=undefined?
		this.props.dispatch(increment(this.props.index)):
		this.props.dispatch(randomIncrement())
		
	}

	renderTest(){
		if(this.props.index==undefined){
		return this.props.random
		}
		else{
			return this.props.clicks[this.props.index]
		}

	}

	render(){
		console.log('render Button')

		return(
			<button onClick={this._onClick}>nb press {this.renderTest()}</button>
			)
	}
}

const mapStateToProps=(state)=>({
  clicks:state.objectives.clicks,
   random:state.objectives.random
})



export default  connect(mapStateToProps)(Button);
