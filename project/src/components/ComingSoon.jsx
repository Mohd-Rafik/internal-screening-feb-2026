import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ComingSoon = ({ pageName = "This" }) => {
  const navigate = useNavigate();

  return (
    <div className="comingsoon">
      <Container className="com">
        <h1 className="coming"> Coming Soon </h1>

        <p className="comingtext">
          {pageName} page is under construction. Please check back later!
        </p>

        <Button
          variant="primary"
          className="mt-3"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Container>
    </div>
  );
};

export default ComingSoon;
