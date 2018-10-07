const OBJECTIVES = [
      { "id": 1, "title": "First objective", "start": 0, "target": 50, "current": 20, "start_date": "2018-01-05", "end_date": "2018-03-05" },
      { "id": 2, "title": "Second objective", "start": 10, "target": 42, "current": 20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 1 },
      { "id": 3, "title": "Old objective", "start": 20, "target": 0, "current": 20, "start_date": "2018-02-05", "end_date": "2018-03-05", "parent_id": 4 },
      { "id": 4, "title": "French objective", "start": 0, "target": 50, "current": 60, "start_date": "2018-01-05", "end_date": "2018-03-05", "parent_id": 2 },
      { "id": 5, "title": "Void objective", "start": 10, "target": 42, "current": -20, "start_date": "2018-01-25", "end_date": "2018-03-30", "parent_id": 2 }
    ];

const objectives = (state={objectives:OBJECTIVES,clicks:[0,0,0,0,0],random:0} , action) => {
	console.log('action',action)
	switch(action.type){
		case 'INCREMENT':
		let {objectives,clicks}=state

		objectives[action.payload].current=objectives[action.payload].current+1
		clicks[action.payload]=clicks[action.payload]+1
		return {
			...state,
			objectives:objectives,
			clicks:clicks
		}
		case 'RANDOM_INCREMENT':
		let toto=state.objectives
		let tata = state.clicks
		let random=state.random
		let randomIndex=Math.floor(Math.random() * tata.length)
		toto[randomIndex].current=toto[randomIndex].current+1
		tata[randomIndex]=tata[randomIndex]+1
		random=random+1
		return {
			objectives:toto,
			clicks:tata,
			random:random,
		}
		default:
		return state
	}
  
}

export default objectives