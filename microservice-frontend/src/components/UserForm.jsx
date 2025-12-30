import { useState } from "react";
import { api } from '../api/api';
import { toast } from 'react-toastify';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

function UserForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departmentId: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = async () => {
    if (!user.firstName || !user.email || !user.departmentId) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    try {
      await api.post("/api/users", user);
      toast.success("User created successfully! 🎉");
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        departmentId: ""
      });
    } catch (error) {
      toast.error("Failed to create user. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="mb-4">
          👤 Create New User
        </Card.Title>
        
        <Row className="g-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                First Name *
              </Form.Label>
              <Form.Control
                name="firstName"
                placeholder="John"
                value={user.firstName}
                onChange={handleChange}
                className="input-group-custom"
              />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Doe"
                value={user.lastName}
                onChange={handleChange}
                className="input-group-custom"
              />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                Email *
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="john@example.com"
                value={user.email}
                onChange={handleChange}
                className="input-group-custom"
              />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                Department ID *
              </Form.Label>
              <Form.Control
                name="departmentId"
                placeholder="Enter department ID"
                value={user.departmentId}
                onChange={handleChange}
                className="input-group-custom"
              />
            </Form.Group>
          </Col>
        </Row>
        
        <div className="d-grid gap-2 mt-4">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={saveUser}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Creating...
              </>
            ) : (
              "Create User"
            )}
          </Button>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={() => {
              setUser({
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                departmentId: "1"
              });
              toast.info("Sample data loaded!");
            }}
          >
            Load Sample Data
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserForm;