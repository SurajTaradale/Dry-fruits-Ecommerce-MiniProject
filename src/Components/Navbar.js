import { Nav, Navbar } from "react-bootstrap";
import "../style/Navbar.css";
import logo from "../Assets/logo.jpg";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";
import items from '../Data/fruitsDetails'
function Navbar1() {
  let history = useHistory();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item.id)
    history.replace('/Services/' + item.id);
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const formatResult = (item) => {
    // return item;
    return (<p dangerouslySetInnerHTML={{ __html: '<strong>' + item + '</strong>' }}></p>); //To format result as html
  };
  return (
    <Navbar bg="light" expand="lg" style={{ height: "65px", boxShadow: ' 0.5rem 0.5rem 1rem rgb(51 51 51 / 10%' }} sticky="top">
      <Navbar.Brand href="#home" className="logo">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{" "}
         Dry Fruits
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='closenav'>
        <Nav className="me-auto navbar">
          <Nav.Link ><Link className='links' to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className='links' to="/About">About</Link></Nav.Link>
          <Nav.Link><Link className='links' to="/Contact">Contact</Link></Nav.Link>
          <Nav.Link><Link className='links' to="/Products">Products</Link></Nav.Link>
          <div style={{ width: 250, height: 35 }}>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbar1;
