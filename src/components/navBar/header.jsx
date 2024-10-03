import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';


export default function Header() {
  return (
    <>
      <Navbar className='navBar' >
        <Container>
          <Navbar.Brand href="#home">Doe para salvar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre nós</Nav.Link>
            <Nav.Link href="#pricing">Nossos contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

