import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar fixed='top' bg="dark" variant="dark" className='my-navbar px-3 px-lg-5' expand="md" collapseOnSelect>
      <Navbar.Brand className='text-primary fw-bold header-2'>{'< VD />'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" id="my-navbar">
          <a href="#home" className='nav-link text ms-2 ms-lg-3'>Home</a>
          <a href="#about" className='nav-link text ms-2 ms-lg-3'>About</a>
          <a href="#experience" className='nav-link text ms-2 ms-lg-3'>Experience</a>
          <a href="#projects" className='nav-link text ms-2 ms-lg-3'>Projects</a>
          <a href="#contact" className='nav-link text ms-2 ms-lg-3'>Contact</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default MyNavbar