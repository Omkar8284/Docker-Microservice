import { useState } from "react";
import { api } from '../api/api';
import { toast } from 'react-toastify';
import { Form, Button, Card, Row, Col, Badge, InputGroup } from 'react-bootstrap';

function UserDetails() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!id.trim()) {
      toast.warning("Please enter a User ID!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.get(`/api/users/${id}`);
      setData(res.data);
      toast.success("User found successfully!");
    } catch (error) {
      toast.error("User not found or error occurred!");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="mb-4">
          🔍 Find User Details
        </Card.Title>
        
        <InputGroup className="mb-4 input-group-custom">
          <InputGroup.Text>
            🔍
          </InputGroup.Text>
          <Form.Control
            placeholder="Enter User ID (e.g., 1, 2, 3...)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchUser()}
          />
          <Button 
            variant="primary" 
            onClick={fetchUser}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Searching...
              </>
            ) : (
              "Search User"
            )}
          </Button>
        </InputGroup>

        {data ? (
          <div className="p-4 border rounded" style={{background: '#f8f9fa'}}>
            <Row>
              <Col md={6}>
                <h4 className="mb-3">
                  👤 User Information
                </h4>
                <div className="mb-3">
                  <Badge bg="info" className="me-2">ID: {id}</Badge>
                  <Badge bg="success">Active</Badge>
                </div>
                <p className="mb-2">
                  <strong>Name:</strong> {data.user.firstName} {data.user.lastName}
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> {data.user.email}
                </p>
                <p className="mb-0">
                  <strong>User ID:</strong> {data.user.id || "N/A"}
                </p>
              </Col>
              
              <Col md={6} className="mt-3 mt-md-0">
                <h4 className="mb-3">
                  🏢 Department Details
                </h4>
                <div className="mb-3">
                  <Badge bg="primary" className="me-2">
                    Dept ID: {data.department.id || "N/A"}
                  </Badge>
                </div>
                <p className="mb-2">
                  <strong>Department:</strong> {data.department.departmentName}
                </p>
                <p className="mb-2">
                  <strong>Code:</strong> {data.department.departmentCode}
                </p>
                <p className="mb-0">
                  <strong>Address:</strong> {data.department.departmentAddress || "Not specified"}
                </p>
              </Col>
            </Row>
            
            <Button 
              variant="outline-danger" 
              size="sm" 
              className="mt-3"
              onClick={() => {
                setData(null);
                setId("");
                toast.info("Cleared search results");
              }}
            >
              Clear Results
            </Button>
          </div>
        ) : (
          <div className="text-center py-5 text-muted">
            <div className="display-4 mb-3">🔍</div>
            <p>Enter a User ID and click search to view details</p>
            <small>Try IDs like 1, 2, 3, etc.</small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserDetails;