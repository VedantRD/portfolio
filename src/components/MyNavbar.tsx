import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar fixed='top' bg="dark" variant="dark" className='my-navbar px-3 px-lg-5' expand="md" collapseOnSelect>
      <Navbar.Brand className='text-primary fw-bold header-2'>{'< VD />'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" id="my-navbar">
          <Nav.Link href="#home" className='text ms-2 ms-lg-3'>Home</Nav.Link>
          <Nav.Link href="#about" className='text ms-2 ms-lg-3'>About</Nav.Link>
          <Nav.Link href="#experience" className='text ms-2 ms-lg-3'>Experience</Nav.Link>
          <Nav.Link href="#projects" className='text ms-2 ms-lg-3'>Projects</Nav.Link>
          <Nav.Link href="#contact" className='text ms-2 ms-lg-3'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default MyNavbar