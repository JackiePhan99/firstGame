import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar2() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#"><img src="https://livedemo00.template-help.com/joomla_53859/images/logo.png" alt="" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">Games</Nav.Link>
						<NavDropdown title="Info" id="navbarScrollingDropdown" menuVariant="dark">
							<NavDropdown.Item href="#action3">About</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navbar2;