import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
export default function instructors() {
    return (
        <Container fluid className="py-5">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col md={8} lg={6}>
                    <Card className="text-center shadow-sm border-0 coming-card">
                        <Card.Body className="p-5">

                            {/* Icon */}
                            <div className="coming-icon mb-4">
                                <FaChalkboardTeacher size={60} />
                            </div>

                            {/* Title */}
                            <h2 className="fw-bold mb-3">
                                Instructors Page
                            </h2>

                            {/* Coming Soon Text */}
                            <p className="text-muted mb-4">
                                We are working hard to bring you this feature.
                                <br />
                                Stay tuned 🚀
                            </p>

                            {/* Button */}
                            <Button variant="primary">
                                Coming Soon
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
