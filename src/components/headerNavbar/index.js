import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../../assets/img/lbt_logo.png';
import logoLbl from '../../assets/img/lbt_logo2.png';
import styles from './index.module.css';
import helper from '../../lib/helper';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = (/* dispatch */) => ({});

const HeaderNavbar = (props) => {
  const {} = props;

  const isActive = relativeUrl => helper.getRelativeUrl().includes(relativeUrl);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <div className="flex items-center">
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={logoLbl} alt="logo" className={`ml1 ${styles.logoLbl}`} />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/actu" bsPrefix={`nav-link ${isActive('actu') ? 'active' : ''}`}>Actu' Tweet</Nav.Link>
          <Nav.Link href="/secret" bsPrefix={`nav-link ${isActive('secret') ? 'active' : ''}`}>Secret Tweet</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar);
