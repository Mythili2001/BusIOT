
import React from 'react';
import {Navbar} from  'react-bootstrap';
import {Nav} from 'react-bootstrap'
import {Container} from  'react-bootstrap';
import Styles from '../css/nav.module.css'
import logo from '../Images/logo.png'
function Navigation() {
  return (
    <div>

          <Navbar className='color-nav' collapseOnSelect expand="lg" bg="warning" variant="light">
            <Container>
            <Navbar.Brand href="#home">My Bus Stop </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav >
                    <Nav.Link href="#features"><div className={Styles.linktext}>Home</div></Nav.Link>
                    
                  </Nav>
                  

                  <Nav>
                    <Nav.Link  href="#deets"><div className={Styles.linktext}>About</div></Nav.Link>
                    <Nav.Link  href="#memes"><div className={Styles.linktext}>
                      Contact
                      </div>
                    </Nav.Link>
                  </Nav>

              
            </Navbar.Collapse>
            </Container>
          </Navbar>

    </div>
  )
}
export default Navigation
