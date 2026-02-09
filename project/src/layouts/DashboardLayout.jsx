import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  return (
    <Container fluid className="dashboard-layout p-0">
      <Row className="g-0">

        <Col
          xxl={2}
          xl={2}
          lg={3}
          className={`sidebar-wrapper ${showSidebar ? "show" : ""}`}
        >
          <Sidebar closeSidebar={closeSidebar} />
        </Col>

        {showSidebar && (
          <div className="sidebar-overlay" onClick={closeSidebar}></div>
        )}

        <Col xxl={10} xl={10} lg={9} className="main-wrapper">
          <Topbar toggleSidebar={toggleSidebar} />

          <div className="page-content">
            <Outlet />
          </div>
        </Col>

      </Row>
    </Container>
  );
}
