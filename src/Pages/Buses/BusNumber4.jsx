import React, {useEffect,useState} from 'react';
import stop2 from '../../Images/stop2.jpg';
import firebase from '../../firebase'
import stop from '../../Images/stop.png';
import stop1 from '../../Images/stop1.png'
import Styles from '../../css/stops.module.css';
import {Card,Button, Row,Col,CardGroup,Container} from 'react-bootstrap';
function BusNumber4() {
  // const [stops , setStops] = useState([]);
  // const refThree = firebase.firestore().collection("Home");
  // useEffect(()=>{
  //     function getStops() {
  //         refThree.onSnapshot((querySnapshot)=>{
  //             const hsptls = [];
  //             querySnapshot.forEach((doc)=>{
  //                 hsptls.push(doc.data());
  //             });
  //             console.log(hsptls);
  //         setStops(hsptls);
  //         });
  //     }  
  //         getStops();
  // },[])
 return (
    <div>
    <br></br>
    <br></br>
    <Container>
{/* 
    <Row>
    {stops.map((stop)=>(
                    <div >
                   <Col align="middle" lg={{span:5 ,offset:10}}  >
                   <img src={stop1} alt="busStop"/>
                        <div className={Styles.btn}>
                        <Button type="link" href={stop.path} block>{stop.name}</Button>
                        </div>
                     
                    </Col>  
                    </div>
             ))}      
      </Row> */}
<Row>
<Col>
      <div className={Styles.stops}>
      <div className={[Styles.stops, Styles.inner].join(" ")}>
      <div className={[Styles.stops, Styles.front].join(" ")}>
          <img  alt="stop" src={stop} className={Styles.image}></img>
          <br></br>
            <h5>CIKKAIYANAYAKAR COLLEGE(CNC)</h5>
      </div>
          <div className={[Styles.stops, Styles.back].join(" ")}> 
            <h3>ARRIVAL TIME</h3>
          </div>
          </div>
        </div>
      </Col>


      <Col>
      <div className={Styles.stops}>
          <img  alt="stop" src={stop1} className={Styles.image}></img>
          <br></br>
          <br></br>
          <div>
          <i>(DESTINATION)</i>
            <h5>KONGU ENGINEERING COLLEGE</h5>
            <h6>ARRIVAL TIME</h6>
          </div>
          
        </div>
      </Col>

      <Col>
      <div className={Styles.stops}>
      <div className={[Styles.stops, Styles.inner].join(" ")}>
      <div className={[Styles.stops, Styles.front].join(" ")}>
          <img  alt="stop" src={stop} className={Styles.image}></img>
          <br></br>
            <h5>BHARATHI THEATRE</h5>
      </div>
          <div className={[Styles.stops, Styles.back].join(" ")}>
            <h3>ARRIVAL TIME</h3>
          </div>
          </div>
        </div>
      </Col>
     
    </Row>
<br></br>
<br></br>


    <Row lg={2}>
    <Col>
      <div className={Styles.stops}>
      <div className={[Styles.stops, Styles.inner].join(" ")}>
      <div className={[Styles.stops, Styles.front].join(" ")}>
          <img alt="stop" src={stop} className={Styles.image1}></img>
          <br></br>
            <h5>ERODE G.H</h5>
      </div>
          <div className={[Styles.stops, Styles.back].join(" ")}>
            <h3>ARRIVAL TIME</h3>
          </div>
          </div>
        </div>
      </Col>

      <Col>
      <div className={Styles.stops}>
      <div className={[Styles.stops, Styles.inner].join(" ")}>
      <div className={[Styles.stops, Styles.front].join(" ")}>
          <img  alt="stop" src={stop} className={Styles.image1}></img>
          <br></br>
            <h5>VEERAPPAN SATHRAM</h5>
      </div>
          <div className={[Styles.stops, Styles.back].join(" ")}>
            <h3>ARRIVAL TIME</h3>
          </div>
          </div>
      </div>
      </Col>
         </Row>
      <div>
      </div>      
    </Container>
    </div>
  )
}

export default BusNumber4