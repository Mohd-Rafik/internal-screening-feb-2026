import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MaxSkills from '../../assets/icons/MaxSkills.png'
import user from '../../assets/icons/boyimage.png';
import { toast } from "react-toastify";
export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showCpass, setShowCpass] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept Terms & Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const ok = validateForm();
    if (!ok) return;


    const users =
      JSON.parse(localStorage.getItem("users")) || [];


    const exists = users.find(
      (u) => u.email === formData.email
    );

    if (exists) {
      toast.error("Email already registered ...");
      return;
    }


    const newUser = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };


    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );
    toast.success("Account Created Successfully ");


    navigate("/sign-in");
  };

  return (
    <section className="signup-page">
      <Container className="p-0">
        <Row className="g-0 min-vh-100">

          {/* LEFT */}
          <Col lg={6} className="signup-left d-flex align-items-center">
            <div className="signup-form-wrapper">
              <img src={MaxSkills} alt="logo image " className="img-fluid pt-5 pb-5" />

              <h1 className="title lh-lg">
                If opportunity doesn’t <br />
                knock, build a <span>door</span>.
              </h1>

              <p className="subtext lh-lg">
                A designer knows he has achieved perfection not when there is
                nothing left to add, but when there is nothing left to take away.
              </p>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                
                <Form.Group className="mb-3">
                  <Form.Label className="label">
                    Full Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`input-line ${errors.fullName ? "is-invalid-custom" : ""
                      }`}
                  />

                  {errors.fullName && (
                    <div className="error-text">
                      {errors.fullName}
                    </div>
                  )}
                </Form.Group>

             
                <Form.Group className="mb-3">
                  <Form.Label className="label">
                    E-mail Address
                  </Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className={`input-line ${errors.email ? "is-invalid-custom" : ""
                      }`}
                  />

                  {errors.email && (
                    <div className="error-text">
                      {errors.email}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="label">
                    Password
                  </Form.Label>

                  <InputGroup className="pass-group">
                    <Form.Control
                      type={showPass ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className={`input-line ${errors.password ? "is-invalid-custom" : ""
                        }`}
                    />

                    <Button
                      type="button"
                      variant="light"
                      className="eye-btn"
                      onClick={() => setShowPass((p) => !p)}
                    >
                      {showPass ? <Eye size={18} /> : <EyeOff size={18} />}
                    </Button>
                  </InputGroup>

                  {errors.password && (
                    <div className="error-text">
                      {errors.password}
                    </div>
                  )}
                </Form.Group>

               
                <Form.Group className="mb-3">
                  <Form.Label className="label">
                    Confirm Password
                  </Form.Label>

                  <InputGroup className="pass-group">
                    <Form.Control
                      type={showCpass ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      className={`input-line ${errors.confirmPassword
                          ? "is-invalid-custom"
                          : ""
                        }`}
                    />

                    <Button
                      type="button"
                      variant="light"
                      className="eye-btn"
                      onClick={() => setShowCpass((p) => !p)}
                    >
                      {showCpass ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </Button>
                  </InputGroup>

                  {errors.confirmPassword && (
                    <div className="error-text">
                      {errors.confirmPassword}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    label={
                      <>
                        I agree to all the{" "}
                        <a href="#" className="link">
                          Term of conditions
                        </a>{" "}
                        &{" "}
                        <a href="#" className="link">
                          Privacy Policy
                        </a>
                      </>
                    }
                    className="terms-check"
                  />

                  {errors.terms && (
                    <div className="error-text">
                      {errors.terms}
                    </div>
                  )}
                </Form.Group>

                <Button type="submit" className="btn-create">
                  Create Account
                </Button>

                <p className="bottom-text">
                  Already have an account?{" "}
                  <Link to="/sign-in">Log In</Link>
                </p>

              </Form>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={6} className="signup-right d-none d-lg-flex">
            <div className="banner-content">
              <div className="image-box">
                <div className="fake-image-icon">

                  <img src={user} alt="user image " className="img-fluid" />
                </div>
              </div>

              <h2 className="banner-title">
                Where remote teams <br />
                get <span>work</span> done
              </h2>

              <p className="banner-desc">
                The online collaborative whiteboard platform to bring teams
                together, anytime, anywhere.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
