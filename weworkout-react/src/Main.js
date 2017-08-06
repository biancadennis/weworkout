import React, {Component} from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
			name: '',
			email: '',
			fitnesslevel: '',
			gender: '',
			username: '',
			password: '',
			location: '',
			goals: ''
		}
    }


  handleSubmit = (e) => {
	  e.preventDefault()
	//   console.log(e.target.value)
	  console.log(this.state)
    return fetch(`/users/sign-up`, {
		method: "POST",
		body: JSON.stringify(this.state),
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
	.then(res => res.json())
    //   .then(newUser => {
    //       console.log('newUser:', newUser)
    //       this.setState({ newUser })
    //   })
	.then(json => console.log(json))
	  .catch(err => {
		  console.log('err', err)
	  })
  };

  handleChange = (e) => {
	this.setState({
		[e.target.id]: e.target.value
	})
  }

  render() {
    return (
      <div>
        <h1>If you're not a WeWorkOut member, sign up here</h1>
		<form action="/users/sign-up" method="POST" onSubmit={this.handleSubmit} id='sign-up-form'>
			<label>
				Name: 
			</label>
			<input type="text" name="name" id="name" onChange={this.handleChange}/><br/>
			<label>
				Email: 
			</label>
			<input type="text" name="email" id="email" onChange={this.handleChange}/><br/>
			<label>
				location: 
			</label>
			<input type="text" name="location" id="location" onChange={this.handleChange}/><br/>
			<label>
				Gender:
			</label>
			<input type="radio" id='gender' name="gender" value="male" onChange={this.handleChange}/> Male
  			<input type="radio" id='gender' name="gender" value="female" onChange={this.handleChange}/> Female
  			<input type="radio" id='gender' name="gender" value="other" onChange={this.handleChange}/> Other <br/>
			<label>
				Fitness Level:
			</label>
			<input type="radio" id="fitnesslevel" name="fitnesslevel" value="newbie" onChange={this.handleChange}/> Newbie
  			<input type="radio" id="fitnesslevel" name="fitnesslevel" value="regular" onChange={this.handleChange}/> Regular
  			<input type="radio" id="fitnesslevel" name="fitnesslevel" value="expert" onChange={this.handleChange}/> expert <br/>
			<label>
				Goals:
			</label>
			<input type="radio" id="goals" name="goals" value="loss" onChange={this.handleChange}/> loss
  			<input type="radio" id="goals" name="goals" value="gain" onChange={this.handleChange}/> gain
  			<input type="radio" id="goals" name="goals" value="maintain" onChange={this.handleChange}/> maintain <br/>
			<label>
				Username: 
			</label>
			<input type="text" name="username" id='username' onChange={this.handleChange}/><br/>
			<label>
				Password: 
			</label>
			<input type="password" name="password" id='password' onChange={this.handleChange}/><br/>
			<label>
				Confirm Password: 
			</label>
			<input type="password" name="confirmPassword" id='password'/><br/>
			{/*Last name: <input type="text" name="lname"/><br/>
			Email: <input type="text" name="email"/><br/>*/}
			<input type="submit" value="Submit"/>
		</form>
      </div>
    );
  }
}