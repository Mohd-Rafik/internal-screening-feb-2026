import { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Dropdown,
  Image,
  Button

} from "react-bootstrap";

import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaCog,FaBars
} from "react-icons/fa";

import data from "../Data/Data";

export default function Topbar({ toggleSidebar }) {
  const [selectedLang, setSelectedLang] = useState(data.languages[0]);

  return (
    <header className="topbar">
      <Container fluid>
        <Row className="align-items-center">

          {/* LEFT */}
          <Col lg={3}>
           <Button variant="link" className="toggle-btn p-0" onClick={toggleSidebar}>
              <FaBars />
            </Button>
            <h3 className="page-title m-0">Dashboard</h3>
          </Col>

          {/* SEARCH */}
          <Col lg={5}>
            <InputGroup className="search-box">
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search here..." />
            </InputGroup>
          </Col>

          {/* RIGHT */}
          <Col lg={4} className="d-flex justify-content-end align-items-center gap-4">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="d-flex align-items-center gap-2">
                <Image src={selectedLang.flag} width={20} height={20} roundedCircle />
                {selectedLang.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {data.languages.map((item) => (
                  <Dropdown.Item
                    key={item.code}
                    onClick={() => setSelectedLang(item)}
                    className="d-flex align-items-center gap-2"
                  >
                    <Image src={item.flag} width={20} height={20} roundedCircle />
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className="icon-wrapper">
              <FaEnvelope className="icon" />
              <span className="notify-dot"></span>
            </div>

            <div className="icon-wrapper">
              <FaBell className="icon" />
              <span className="notify-dot"></span>
            </div>
        
            <FaCog className="icon" />

          
          </Col>

        </Row>
      </Container>
    </header>
  );
}
