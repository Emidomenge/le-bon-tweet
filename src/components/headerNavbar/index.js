import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../../assets/img/lbt_logo.png';
import logoLbl from '../../assets/img/lbt_logo2.png';
import styles from './index.module.css';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = (/* dispatch */) => ({});

const HeaderNavbar = (props) => {
  const {} = props;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <div className="flex items-center">
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={logoLbl} alt="logo" className={`ml1 ${styles.logoLbl}`} />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#public">Actu' Tweet</Nav.Link>
          <Nav.Link href="#private">Secret Tweet</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar);
