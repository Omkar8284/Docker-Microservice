import { useState } from "react";
import { api } from '../api/api';
import { toast } from 'react-toastify';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { FaBuilding, FaMapMarkerAlt, FaCode, FaSave } from 'react-icons/fa';

function DepartmentForm() {
  const [department, setDepartment] = useState({
    departmentName: "",
    departmentAddress: "",
    departmentCode: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const saveDepartment = async () => {
    if (!department.departmentName || !department.departmentCode) {
      toast.error("Please fill in Name and Code!");
      return;
    }

    setLoading(true);
    try {
      await api.post("/api/departments", department);
      toast.success("Department created successfully! 🏢");
      setDepartment({
        departmentName: "",
        departmentAddress: "",
        departmentCode: ""
      });
    } catch (error) {
      toast.error("Failed to create department!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="mb-4">
          <FaBuilding className="me-2" />
          Create New Department
        </Card.Title>
        
        <Row className="g-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaBuilding className="me-2" />
                Department Name *
              </Form.Label>
              <Form.Control
                name="departmentName"
                placeholder="e.g., Engineering"
                value={department.departmentName}
                onChange={handleChange}
                className="input-group-custom"
              />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaCode className="me-2" />
                Department Code *
              </Form.Label>
              <Form.Control
                name="departmentCode"
                placeholder="e.g., ENG-001"
                value={department.departmentCode}
                onChange={handleChange}
                className="input-group-custom"
              />
            </Form.Group>
          </Col>
          
          <Col md={12}>
            <Form.Group>
              <Form.Label>
                <FaMapMarkerAlt className="me-2" />
                Department Address
              </Form.Label>
              <Form.Control
                name="departmentAddress"
                placeholder="Full address of the department"
                value={department.departmentAddress}
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
            onClick={saveDepartment}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Creating...
              </>
            ) : (
              <>
                <FaSave className="me-2" />
                Create Department
              </>
            )}
          </Button>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={() => {
              setDepartment({
                departmentName: "Information Technology",
                departmentAddress: "123 Tech Street, Silicon Valley",
                departmentCode: "IT-2024"
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

export default DepartmentForm;