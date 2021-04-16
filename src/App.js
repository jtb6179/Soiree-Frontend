import React,{Component} from 'react';
import { Router, Switch, Route, withRouter, Link} from 'react-router-dom'
import HomePage  from "./components/HomePage";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
// import Link from '@material-ui/core/Link';
// import { background } from "./images/7f76e8e7692375107e5998013155af0d.jpg";
// import { TravelerEffect, MosaicGroundEffect, OceanEffect,
//   RainEffect, SeaWaveEffect, SnowFallEffect, SnowFallSlowEffect,
//   SpacingEffect, CloudWaveEffect 
// } from 'react-background-animation'

class App extends Component {

  state = {
    user: {
        email: "",
        username: "",
        is_active: "",
        first_name: "",
        last_name: "",
        bio: "",
        age: "",
        birth_place: "",
        school: "",
        occupation: "",
        what_are_you_seeking_on_site: "",
        profile_pic: null,
        loginErrors: "",
    },
    token: "",
  }

  handleResponse (resp) {
      console.log(resp.user); 
        if (resp.user) {
          localStorage.setItem('token', resp.token)
          this.setState({
            user: resp.user,
            token: resp.token
          }, () => {
            this.props.history.push("/dashboard")
          })
        }
        else {
          alert(resp.error)
        }
      }

      

  componentDidMount(){
    if (localStorage.getItem("token")) {
      fetch('http://localhost:8000/current_user/', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResp)
    }
  }

  handleRegister(newUser){
    // debugger
        fetch( "http://localhost:8000/rest-auth/registration", {
          method: "POST",
          headers: {
              'content-type': "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            user: data
          })
        })
      }


      handleLogin(returningUser){
        fetch('http://127.0.0.1:8000/rest-auth/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(returningUser)
        })
          .then(res => res.json())
          .then(this.handleResponse)
      }

  renderRegisterForm = (routerProps) => {
        if (routerProps.location.pathname === "/register") {
            // debugger
          return <Register formName="Register Form" 
            handleSubmit={this.handleRegister}
             />

        }else if(routerProps.location.pathname === "/") {
          return <HomePage formName="Log into Account"
          handleSubmit={this.handleLogin} 
          />
        } 
      }

     

    render() {
      return (
          <div>
              {/* <Link  to="/register">Sign Up</Link> */}
              <Switch>
                <Route exact path="/" render={this.renderRegisterForm} />   
                <Route exact path="/register" render={this.renderRegisterForm} /> 
                <Route path="/dashboard" exact component={Dashboard} />
                <Route render={ () => <p>Page not Found</p> } />
              </Switch>
              {/* <Link href="/register"
                    // onClick={this.handleRegisterLinkPage}
                     variant="body1">
                      {"Don't have an account? Sign Up"}
                    </Link> */}
          </div>
      );
    }
      
}

export default withRouter(App);
