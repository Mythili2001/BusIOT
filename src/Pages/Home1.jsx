import React from 'react'
import busImg from '../Images/bus.jpeg'
import Styles from '../css/home.module.css';
import {Button,Row,Col,Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
function Home1() {
  return (
      <div>
      <Container>
      <Row>
      <LinkContainer to="/BusNumber4">
          <Col>
          <div className={Styles.busCard}>
                <img src={busImg} alt="bus"/>
                <div className={Styles.overlay}>
                    <h1 className={Styles.text}>1</h1>
                </div>
                <Button className={Styles.btn} variant="warning">Bus Number 4 [Erode]</Button>
        </div>
          </Col>
          </LinkContainer>


          <LinkContainer to="/BusNumber10">
                <Col>
                <div className={Styles.busCard}>
                        <img src={busImg} alt="bus"/>
                        <div className={Styles.overlay}>
                            <h1 className={Styles.text}>2</h1>
                        </div>
                        <Button className={Styles.btn} variant="warning">Bus Number 10 [Erode]</Button>
                </div>
                </Col>
          </LinkContainer>
          <Col>
          <div className={Styles.busCard}>
                <img src={busImg} alt="bus"/>
                <div className={Styles.overlay}>
                    <h1 className={Styles.text}>3</h1>
                </div>
                <Button className={Styles.btn} variant="warning">Bus Number 15 [Erode]</Button>
        </div>
          </Col>
      </Row>
        
<Row>
<LinkContainer to="">
<Col>
        <div className={Styles.busCard}>
                <img src={busImg} alt="bus"/>
                <div className={Styles.overlay}>
                    <h1 className={Styles.text}>4</h1>
                </div>
                <Button className={Styles.btn} variant="warning">Bus Number 17 [Erode]</Button>
        </div>
</Col>
 </LinkContainer>
<Col>
        <div className={Styles.busCard}>
                <img src={busImg} alt="bus"/>
                <div className={Styles.overlay}>
                    <h1 className={Styles.text}>5</h1>
                </div>
                <Button className={Styles.btn} variant="warning">Bus Number 24 [Erode]</Button>
        </div>
    </Col>
    <Col>
<div className={Styles.busCard}>
                <img src={busImg} alt="bus"/>
                <div className={Styles.overlay}>
                    <h1 className={Styles.text}>6</h1>
                </div>
                <Button className={Styles.btn} variant="warning">Bus Number 56 [Tiruppur]</Button>
        </div>

        </Col>
</Row>
      </Container>  
      </div>
  )
}

export default Home1




