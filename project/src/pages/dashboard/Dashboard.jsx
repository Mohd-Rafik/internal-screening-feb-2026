import React from "react";
import { Card, Row, Col, Container, ProgressBar } from "react-bootstrap";
import { BookOpen, CheckSquare, Bookmark, MoreHorizontal } from "lucide-react";


import LearningActivity from "./charts/LearningActivity";
import CalendarCard from "./CalendarCard/CalendarCard";
import ProgressCard from "./ProgressCard/ProgressCard";
import ScheduleCard from "./ScheduleCard/ScheduleCard";
import ScoreActivity from "./charts/ScoreActivity";
import Courses from "./Courses/Courses";
import { FaCalendarAlt } from "react-icons/fa";

export default function Dashboard() {

  return (
    <section className="dashboard-page">

      <Container fluid>
        <Row>
          <Col lg={8}>
            <Card className="promo-banner border-0">
              <Card.Body>
                <Row className="align-items-center">
                  <Col lg={8}>
                    <h2 className="promo-title">
                      Join Now and Get Discount <br />
                      Voucher Up To 20%
                    </h2>
                    <p className="promo-desc">
                      Learn anytime, anywhere. Improve your skills with expert instructors.
                    </p>
                  </Col>
                  <Col lg={4} className="promo-icon d-flex justify-content-between">
                    <BookOpen size={48} />
                    <FaCalendarAlt size={48} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Courses />

            {/* CHART + PROGRESS */}
            <Row>

              <Col lg={7} sm={12} className="pt-4">
                <LearningActivity />
              </Col>

              <Col lg={5} sm={12} className="pt-4">
                <ProgressCard />
              </Col>

            </Row>
            <Row >
              <Col className="pt-4">
                <ScoreActivity />
              </Col>
            </Row>

          </Col>

          {/* ================= RIGHT SIDE ================= */}
          <Col lg={4} >
            {/* Calendar */}
            <CalendarCard />

            {/* Homework */}
            <Card className="homework-card border-0 mt-4">
              <Card.Body>

                <div className="homework-header">
                  <h5>Home Work</h5>
                  <MoreHorizontal size={20} />
                </div>

                <div className="homework-item">
                  <div className="progress-info">
                    <span>Web Design</span>
                    <span>9/10</span>
                  </div>
                  <ProgressBar now={60} className="bar-green mb-3" />
                </div>

                <div className="homework-item">
                  <div className="progress-info">
                    <span>Graphic Design</span>
                    <span>4/10</span>
                  </div>
                  <ProgressBar now={40} className="bar-yellow" />
                </div>

              </Card.Body>
            </Card>
            <div className="mt-4">
              <ScheduleCard />
            </div>

          </Col>

        </Row>
      </Container>

    </section>
  );
}


