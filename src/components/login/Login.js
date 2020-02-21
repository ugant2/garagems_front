import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
    Container, Col, Form, FormGroup, Input, Button, FormText
} from 'reactstrap'
import "./Login.css";
import axios from 'axios';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            logged:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

       
        login=(e)=>{
            e.preventDefault();
           
            axios.post('http://localhost:3011/login', this.state)
            .then((response)=>{
               
                localStorage.setItem('userToken',response.data.token)
                this.setState({logged:true})
            }).catch((err)=>{
                console.log(err.response.status)
               

               
                this.setState({
                    username:'',
                    password:''
                })
            })
        }
    

    render() {


        //if logged in then to dashboard
        if (this.state.logged === true) {
            return <Redirect to='/dashboard' />
        }


        return (

            <Container>
<h1>Garage MS</h1>
              <h2>Login Form</h2>
            
                 <Form>
                     <div className="form-group">
                    <Col>
                        <FormGroup>
                            <Input type='text' name='username' placeholder="Username" id='username' value={this.state.username} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input type='password' placeholder="Password" name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                    <Button color="primary" className="btnMove" onClick={this.login} type="submit">Login</Button>
                    </Col>
                    </div>
                </Form>
 


                <h3>Already a user? <Link to='/register'> Login in here!</Link></h3>

            </Container>
        )
    }

}

export default Login;

