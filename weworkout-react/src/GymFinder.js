import React, {Component} from 'react'
import axios from 'axios'
// import GymResults from './GymResults'

export default class GymFinder extends Component {
    constructor(props) {
        super(props)
        this.state = {resultsList: [],
            address: '',
            city: '',
            state: '',
            full_address: '',
            latitude: '',
            lng:'',
            gymList: []
        }
    }
    displayNearbyGyms = () => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC3s77vg6vfcFYPZw1hL4gK2YASPXQW7YY&location=<${this.state.full_address}>,${this.state.full_address}&radius=1610&type=gym><`)
            .then((response) => {
            console.log(response.data.results)
            this.state.gymList.push(response.data.results)
            // this.setState({resultsList: this.state.resultsList.pop()})
        })  
        .catch(function (error) {
        console.log(error);
  })
     }
    getCoordinates = (e, result) => {
        this.setState({latitude: e.geometry.location.lat}, function () {
            console.log(this.state.latitude);
        });
        this.setState({lng: e.geometry.location.lng}, function () {
            this.displayNearbyGyms();
        });
    }
     setSearch = (searchAddress) => {
        this.setState({full_address: `${this.state.address} ${this.state.city} ${this.state.state}`
    })
    console.log(this.state.full_address)
    this.searchAddress()
     }
  searchAddress = (e, searchGym) => {  
  axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=<${this.state.full_address}><`)
  .then((response) => {
    console.log(response.data.results)
    this.state.resultsList.push(response.data.results)
    this.setState({resultsList: this.state.resultsList.pop()})
    })  
  .catch(function (error) {
    console.log(error);
  })
}

    handleChange = (e, setSearch) => {
	    this.setState({
	    	[e.target.id]: e.target.value
    	})
        this.setSearch()
     }

render() {
    
	return (
        <div>
		<h1>
			This is the GymFinder Component
		</h1>
        <form id='gymFinder'>
			<label>
				Street address 
			</label>
			<input type="text" name="address" id="address" onChange={this.handleChange}/><br/>
            <label>
				city
			</label>
			<input type="text" name="city" id="city" onChange={this.handleChange}/><br/>
            <label>
				state
			</label>
			<input type="text" name="state" id="state" onChange={this.handleChange}/><br/>
			{/*<label>
				Password: 
			</label>
			<input type="password" name="password" id="password" onChange={this.handleChange}/><br/>*/}
			<input type="submit" value="Submit"/>s
		</form>
        <div>
			Click your location
			{this.state.resultsList.map(result => <div key={result.place_id} onClick={this.getCoordinates.bind(this, result)}>{result.formatted_address}</div>)}
            {/*{console.log(this.state.lng)}*/}
            
		</div>
        </div>
	)
}
}