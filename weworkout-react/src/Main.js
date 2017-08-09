import React, {Component} from 'react'
// import axios from 'axios';
import Login from './Login';
import Signup from './Signup'

export default class Main extends Component {
    constructor(props) {
//sets state for new user
        super(props)
        this.state = {
			name: '',
			email: '',
			fitnesslevel: '',
			gender: '',
			username: '',
			password: '',
			location: '',
			goals: '',
			gym: ''
		}
    }


//used to search for gym location
	// findGym = (e) => {
	// 	axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=<${e.target.value}>`)
  	// 	.then((response) => {
    // 		console.log(response);
  	// 	})
  	// 	.catch(function (error) {
    // 		console.log(error);
  	// 	})
	// }
  render() {
    return (
      <div>
		<Signup />
		<Login />
      </div>
    );
  }
}