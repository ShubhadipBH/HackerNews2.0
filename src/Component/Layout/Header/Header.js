
import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function Header() {
  const history = useHistory();
  const logout = () => {
    window.sessionStorage.clear();
    history.push("/");
  };
  const notify = () => {
    toast.success("Logout Successfull", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const user = window.sessionStorage.getItem("firstname");

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            HackerNews2.0
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              {" "}
              Home
            </Nav.Link>
            {sessionStorage.getItem("token") ? (
              <>
                <Nav.Link
                  onClick={() => {
                    notify();
                    logout();
                  }}
                >
                  Log out
                </Nav.Link>
                <Nav.Link>
                  <p>
                    <CgProfile />
                    {user}
                  </p>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/LogIn">
                  {" "}
                  LogIn
                </Nav.Link>
                <Nav.Link as={Link} to="/Registration">
                  {" "}
                  Registration
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
