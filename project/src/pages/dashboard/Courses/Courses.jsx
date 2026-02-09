import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  CheckSquare,
  Lightbulb,
  Bookmark,
} from "lucide-react";

import data from "../../../Data/Data";

export default function Courses() {
  const getIcon = (icon) => {
    switch (icon) {
      case "check":
        return <CheckSquare size={22} />;
      case "light":
        return <Lightbulb size={22} />;
    //   case "bookmark":
        // return <Bookmark size={22} />;
      default:
        return null;
    }
  };

  return (
    <Row className="pt-4 g-4">

      {data.progress.map((item, index) => (
        <Col xl={4} md={6} key={index}>

          <Card
            className={`overview-card ${item.type} border-0`}
          >
            <Card.Body>
              <div className="icon-body">
                {getIcon(item.icon)}
              </div>

              {/* Value */}
              <h3>
                {item.value.toLocaleString()}
              </h3>

              {/* Title */}
              <p>{item.title}</p>

            </Card.Body>
          </Card>

        </Col>
      ))}

    </Row>
  );
}
