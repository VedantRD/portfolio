import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'

const MyNavbar = () => {
  return (
    <Navbar fixed='top' bg="dark" variant="dark" className='my-navbar px-2 px-lg-5' expand="md" collapseOnSelect>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" id="navbar-example2">
          <Nav.Link href="#home" className='text ms-2 ms-lg-3'>Home</Nav.Link>
          <Nav.Link href="#about" className='text ms-2 ms-lg-3'>About</Nav.Link>
          <Nav.Link href="#experience" className='text ms-2 ms-lg-3'>Experience</Nav.Link>
          <Nav.Link href="#projects" className='text ms-2 ms-lg-3'>Projects</Nav.Link>
          <Nav.Link href="#contact" className='text ms-2 ms-lg-3'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
    // <nav id="navbar-example2" className="navbar bg-light px-3 mb-3 fixed-top">
    //   <a className="navbar-brand">Navbar</a>
    //   <ul className="nav nav-pills">
    //     <li className="nav-item">
    //       <a className="nav-link" href="#home">First</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#about">Second</a>
    //     </li>
    //     <li className="nav-item dropdown">
    //       <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Dropdown</a>
    //       <ul className="dropdown-menu">
    //         <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
    //         <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
    //         {/* <li><hr className="dropdown-divider"></li> */}
    //         <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
    //       </ul>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default MyNavbar