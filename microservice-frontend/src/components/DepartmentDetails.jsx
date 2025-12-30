import { useState } from "react";
import { api } from '../api/api';
import { toast } from 'react-toastify';
import { Form, Button, Card, Row, Col, Badge, InputGroup } from 'react-bootstrap';

function DepartmentDetails() {
  const [id, setId] = useState("");
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDepartment = async () => {
    if (!id.trim()) {
      toast.warning("Please enter a Department ID!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.get(`/api/departments/${id}`);
      setDepartment(res.data);
      toast.success("Department found successfully!");
    } catch (error) {
      toast.error("Department not found or error occurred!");
      setDepartment(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="mb-4">
          🏢 Find Department Details
        </Card.Title>
        
        <InputGroup className="mb-4 input-group-custom">
          <InputGroup.Text>
            🔍
          </InputGroup.Text>
          <Form.Control
            placeholder="Enter Department ID (e.g., 1, 2, 3...)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchDepartment()}
          />
          <Button 
            variant="primary" 
            onClick={fetchDepartment}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Searching...
              </>
            ) : (
              "Search Department"
            )}
          </Button>
        </InputGroup>

        {department ? (
          <div className="p-4 border rounded" style={{background: '#f8f9fa'}}>
            <Row>
              <Col md={6}>
                <h4 className="mb-3">
                  🏢 Department Information
                </h4>
                <div className="mb-3">
                  <Badge bg="primary" className="me-2">ID: {id}</Badge>
                  <Badge bg="success" className="me-2">Active</Badge>
                  <Badge bg="info">
                    👥 {department.userCount || "N/A"} Users
                  </Badge>
                </div>
                <p className="mb-2">
                  <strong>Name:</strong> {department.departmentName}
                </p>
                <p className="mb-2">
                  <strong>Code:</strong> {department.departmentCode}
                </p>
              </Col>
              
              <Col md={6} className="mt-3 mt-md-0">
                <h4 className="mb-3">
                  📍 Location Details
                </h4>
                <p className="mb-2">
                  <strong>Address:</strong>
                </p>
                <p className="mb-0" style={{background: 'white', padding: '10px', borderRadius: '5px'}}>
                  {department.departmentAddress || "Address not specified"}
                </p>
              </Col>
            </Row>
            
            <div className="mt-4 pt-3 border-top">
              <small className="text-muted">
                Last updated: {new Date().toLocaleDateString()}
              </small>
            </div>
            
            <Button 
              variant="outline-danger" 
              size="sm" 
              className="mt-3"
              onClick={() => {
                setDepartment(null);
                setId("");
                toast.info("Cleared search results");
              }}
            >
              Clear Results
            </Button>
          </div>
        ) : (
          <div className="text-center py-5 text-muted">
            <div className="display-4 mb-3">🏢</div>
            <p>Enter a Department ID and click search to view details</p>
            <small>Try IDs like 1, 2, 3, etc.</small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default DepartmentDetails;