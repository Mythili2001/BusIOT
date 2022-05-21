import React, {useEffect,useState} from 'react';
import stop2 from '../../Images/stop2.jpg';
import firebase from '../../firebase'
import stop from '../../Images/stop.png';
import stop1 from '../../Images/stop1.png'

import Styles from '../../css/stops.module.css';
import {Card,Button, Row,Col,CardGroup,Container} from 'react-bootstrap';



function BusNumber4() {

  const [stops , setStops] = useState([]);
  const refThree = firebase.firestore().collection("Home");

  useEffect(()=>{
      function getStops() {
          refThree.onSnapshot((querySnapshot)=>{
              const hsptls = [];
              querySnapshot.forEach((doc)=>{
                  hsptls.push(doc.data());
              });
              console.log(hsptls);
          setStops(hsptls);
          });
      }  
          getStops();
  },[])


  return (

    
    <div>
    <br></br>
    <br></br>
    <Container>


  


    <Row>
    {stops.map((stop)=>(
        <Col >
                    <div className={Styles.stop} >
                            <img className={Styles.image} src={stop1} alt="busStop"/>
                            <div>
                            <i>(DESTINATION)</i>
                                <h5>KONGU ENGINEERING COLLEGE</h5>
                                <h6>ARRIVAL TIME</h6>
                            </div>    
                        </div> 
                        </Col>  
                  
             ))}      
      </Row>


      

     
          
    </Container>
    </div>
  )
}

export default BusNumber4