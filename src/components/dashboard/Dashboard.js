import React, { Component } from 'react'
import { Container} from 'reactstrap'

import Navigation from './Navigation';

import "./Dashboard.css";

class Dashboard extends Component {

    constructor(props){
        super(props)
               
    }


    



   
    render() {

      
        
        return (
            <React.Fragment>
                <Navigation  />

                <Container>
                </Container>
              
            </React.Fragment>
                
        )
    }
}

export default Dashboard;