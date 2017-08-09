import React, {Component} from 'react'

export default class Login extends Component {
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
			gym: '',
			list: false,
		}
    }

//talks to express database to create new user
  handleSubmitLogin = (e) => {
	  console.log('hi');
	  e.preventDefault()
      console.log('hi 2')
	//   console.log(e.target.value)
    console.log('hi 3')
	  console.log('state', this.state)
      console.log(JSON.stringify({
            username: this.state.email,
            password: this.state.password
        }))
    return fetch(`/users/log-in`, {
		method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.email,
            password: this.state.password
        })
	})
	.then(res => res.json())
    //   .then(newUser => {
    //       console.log('newUser:', newUser)
    //       this.setState({ newUser })
    //   })
	.then(json => console.log(json))
	.then(() => {
		// this.setState({
		// 	list: true,
		// })
	})
// 	.then(render() {
//     return (
//       <div>
// 		<Signup />
// 		<Login />
//       </div>
//     );
//   })
	  .catch(err => {
		  console.log('err', err)
	  })
  };
//sets properties of the state from form.
  handleChange = (e) => {
	this.setState({
		[e.target.id]: e.target.value
	})
  }
  renderList = () => {
	  this.setState({
		  signupvisible: false,
		  loginVisible: false
	  })
	  return (
		  <div>
			  <ul>
				  <li>one</li>
				  <li>two</li>
			  </ul>
		  </div>
	  )
  }
render() {
	return (
        <div>
		<h1>
			This is the login Component
		</h1>
        <form onSubmit={this.handleSubmitLogin} id='log-in-form'>
			<label>
				Email: 
			</label>
			<input type="text" name="email" id="email" onChange={this.handleChange}/><br/>
			<label>
				Password: 
			</label>
			<input type="password" name="password" id="password" onChange={this.handleChange}/><br/>
			<input type="submit" value="Submit"/>s
		</form>
		{this.state.list === true ? this.renderList() : null}
        </div>
	)
}

}