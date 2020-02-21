import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import {
    Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap';
import "../login/Login.css";
import axois from 'axios';



class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            email:'',
            phone:'',
            location:'',
            registered:false
        }
    }

        //to handle change of form
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        //handling form submit
        register=(e)=>{

            //prevent default
            e.preventDefault();
            
          //using axois to hit api
          axois.post('http://localhost:3011/registration',this.state)
          .then((response)=>{
              //setting registered to true to redirect to login component
              this.setState({
                username:'',
                password:'',
                email:'',
                phone:'',
                location:'',
                registered:true
              })
              console.log(this.state)
          }).catch((err)=>{console.log(err)})

        }

    render() {
        if (this.state.registered === true) {
            return <Redirect to='/' location="User Registered"/>
        }
        return (
            <Container>
            <div >
             <Modal.Dialog >
                <Modal.Title> <h2 className="move">Register Here</h2></Modal.Title>
                <Modal.Body>
                 <Form>
                 <Col>
                     <FormGroup>
                         <Input type='text' name='username' placeholder="Username" id='username' value={this.state.username} onChange={this.handleChange} />
                     </FormGroup>
                 </Col>

                 <Col>
                     <FormGroup>
                         <Input type='password' name='password' placeholder="Password" id='password' value={this.state.password} onChange={this.handleChange} />
                     </FormGroup>
                 </Col>
                 <Col>
                     <FormGroup>
                         <Input type='email' name='email' placeholder="email" id='email' value={this.state.email} onChange={this.handleChange} />
                     </FormGroup>
                 </Col>

                 <Col>
                     <FormGroup>
                         <Input type='phone' name='phone' placeholder="Phone" id='pohne' value={this.state.phone} onChange={this.handleChange} />
                     </FormGroup>
                 </Col>

                 <Col>
                     <FormGroup>
                         <Input type='location' placeholder="Location" name='location' id='location' value={this.state.location} onChange={this.handleChange} />
                     </FormGroup>
                 </Col>
                 
       
                 <Col>
                 <Button color="primary" className="btnMove" onClick={this.register} type="submit">Register</Button>
                 </Col>
             </Form>
</Modal.Body>

<Modal.Footer>
<FormText>Already a user? <Link to='/'> Login in here!</Link></FormText>
</Modal.Footer>
</Modal.Dialog>
</div>
         </Container>
        )
    }

}

export default Register;

