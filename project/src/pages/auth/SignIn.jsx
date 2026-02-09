import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/MaxSkills.png";
import usres from"../../assets/icons/boyimage.png";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  /* ---------------- Validation ---------------- */

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (pass) => {
    return pass.trim().length >= 6;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- Change ---------------- */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* ---------------- Submit ---------------- */

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const ok = validateForm();
    if (!ok) return;

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Match login
    const matchedUser = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (!matchedUser) {
      toast.error("Invalid Email or Password ");
      return;
    }
    localStorage.setItem(
      "currentUser",
      JSON.stringify(matchedUser)
    );

 toast.success("Login Successful ");
    navigate("/dashboard");
  };

  return (
    <section className="signin-page">
      <Container className="p-0">
        <Row className="g-0 min-vh-100">

          {/* LEFT */}
          <Col lg={6} className="signin-left d-flex align-items-center">
            <div className="signin-form-wrapper">

              <div className="brand">
                <img src={logo} alt="MaxSkills Logo" />
              </div>

              <h1 className="title">
                Logout the past, Login <br />
                to the <span>new!</span>
              </h1>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                {/* EMAIL */}
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">
                    E-mail Address
                  </Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`input-custom ${
                      errors.email ? "is-invalid-custom" : ""
                    }`}
                  />

                  {errors.email && (
                    <div className="error-text">
                      {errors.email}
                    </div>
                  )}
                </Form.Group>

                {/* PASSWORD */}
                <Form.Group className="mb-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Label className="form-label-custom mb-0">
                      Password
                    </Form.Label>

                    <Link to="/forgot-password" className="forgot-link">
                      Forgot Password
                    </Link>
                  </div>

                  <InputGroup className="mt-2 password-group">
                    <Form.Control
                      type={showPass ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`input-custom ${
                        errors.password ? "is-invalid-custom" : ""
                      }`}
                    />

                    <Button
                      type="button"
                      variant="light"
                      className="eye-btn"
                      onClick={() => setShowPass((prev) => !prev)}
                    >
                      {showPass ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </Button>
                  </InputGroup>

                  {errors.password && (
                    <div className="error-text">
                      {errors.password}
                    </div>
                  )}
                </Form.Group>

                {/* REMEMBER */}
                <Form.Group className="mb-4 mt-3">
                  <Form.Check
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    label="Remember my password"
                    className="remember-check"
                  />
                </Form.Group>

                <Button type="submit" className="btn-login w-50">
                  Login
                </Button>

                <p className="bottom-text mt-4">
                  Don't have an account?{" "}
                  <Link to="/sign-up">Sign Up</Link>
                </p>

              </Form>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={6} className="signin-right d-none d-lg-flex">
            <div className="banner-content">
              <div className="image-box">
                <div className="fake-image-icon">
                   <img src={usres} alt="user image " className="img-fluid"/>
                </div>
              </div>

              <h2 className="banner-title">
                Where remote teams <br />
                get <span>work</span> done
              </h2>

              <p className="banner-desc">
                MaxSkills helps you manage your remote work easily and track
                your progress anytime, anywhere.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
