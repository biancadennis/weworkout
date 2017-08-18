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
            gymList: [],
            gymid: ''
        }
    }

demoMethod = () => {
   this.props.sendData(this.state.gymid);
 }
    getPlaceId = (e, gym) => {
        this.setState({gymid: e.place_id}, function () {
            document.getElementById("gymid").value = String(this.state.gymid);
            this.demoMethod();
        })
    
        
    }
    displayNearbyGyms = () => {
        console.log(this.state)
        // axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC3s77vg6vfcFYPZw1hL4gK2YASPXQW7YY&location=<${this.state.full_address}>,${this.state.full_address}&radius=1610&type=gym><`)
        //     .then((response) => {
        //     console.log(response.data.results)
        //     this.state.gymList.push(response.data.results)
        //     // this.setState({resultsList: this.state.resultsList.pop()})
        // })  
        // .catch(function (error) {
        // console.log(error);
//   })
      return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC3s77vg6vfcFYPZw1hL4gK2YASPXQW7YY&location=${this.state.latitude},${this.state.lng}&radius=1610&type=gym`, {
		method: "get",
        // mode:'no-cors',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials':true,
            // 'Access-Control-Allow-Methods':'POST, GET'
        },
	})
	.then(res => res.json())
    .then((json) => {
        this.state.gymList.push(json.results)
        this.setState({gymList: this.state.gymList.pop()})
        console.log('gyms saved')
        console.log(this.state)
    })
    .then(this.setState({resultsList: []}))
	  .catch(err => {
		  console.log('err', err)
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
  axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=<${this.state.full_address}>`)
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
    return(
        <div>
		<div>
			Your Gym address (or an address within one mile)
		</div>
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
             <div id="addresses">
			Click your location
			{this.state.resultsList.map(result => <div key={result.place_id} onClick={this.getCoordinates.bind(this, result)}>{result.formatted_address}</div>)}
            {/*{console.log(this.state.lng)}*/}
            
		</div>
             <div id='Gyms'>
			Choose your Gym
           {this.state.gymList.map(gym => <div key={gym.place_id} onClick={this.getPlaceId.bind(this, gym)}>{gym.name}</div>)}
           		</div>
             <label>
				GymID
			</label>
			<input type="text" name="gymid" id="gymid"/><br/>

        </div>
    )
}
}