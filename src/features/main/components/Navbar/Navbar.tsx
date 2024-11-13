import { Navbar as NavBarBootstrap, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <NavBarBootstrap bg="dark" variant="dark" expand="lg">
      <Container>
        <NavBarBootstrap.Brand href="#" className="mx-auto">
          <img
            src="https://logo.clearbit.com/clearbit.com"
            alt="Logo de la empresa"
            height="30"
            className="d-inline-block align-text-top"
          />
        </NavBarBootstrap.Brand>
      </Container>
    </NavBarBootstrap>
  );
};
