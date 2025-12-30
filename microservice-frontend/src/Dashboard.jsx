import React, { useState } from 'react';
import { Tab, Nav, Row, Col, Card, Container, Badge, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import DepartmentForm from './components/DepartmentForm';
import DepartmentDetails from './components/DepartmentDetails';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    departments: 12,
    users: 48,
    activeToday: 8,
    totalRequests: 156
  });

  const handleTabSelect = (key) => {
    setActiveTab(key);
    toast.info(`Switched to ${key.charAt(0).toUpperCase() + key.slice(1)}`);
  };

  return (
    <Container className="dashboard-container">
      {/* Header */}
      <div className="header-section">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold">
              📊 Microservices Dashboard
            </h1>
            <p className="lead mb-0">Manage Departments & Users efficiently</p>
          </Col>
          <Col md={4} className="text-end">
            <Badge bg="light" text="dark" className="p-3">
              📈 System Status: <span className="text-success">Active</span>
            </Badge>
          </Col>
        </Row>
      </div>

      {/* Stats Cards */}
      <Row className="mb-4 g-4">
        <Col md={3}>
          <Card className="stat-card custom-card">
            <div className="icon-wrapper" style={{background: '#4b6cb7'}}>
              <span className="text-white" style={{fontSize: '24px'}}>🏢</span>
            </div>
            <h3>{stats.departments}</h3>
            <p className="text-muted mb-0">Departments</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="stat-card custom-card">
            <div className="icon-wrapper" style={{background: '#2ecc71'}}>
              <span className="text-white" style={{fontSize: '24px'}}>👥</span>
            </div>
            <h3>{stats.users}</h3>
            <p className="text-muted mb-0">Users</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="stat-card custom-card">
            <div className="icon-wrapper" style={{background: '#e74c3c'}}>
              <span className="text-white" style={{fontSize: '24px'}}>📊</span>
            </div>
            <h3>{stats.activeToday}</h3>
            <p className="text-muted mb-0">Active Today</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="stat-card custom-card">
            <div className="icon-wrapper" style={{background: '#f39c12'}}>
              <span className="text-white" style={{fontSize: '24px'}}>🔄</span>
            </div>
            <h3>{stats.totalRequests}</h3>
            <p className="text-muted mb-0">Total Requests</p>
          </Card>
        </Col>
      </Row>

      {/* Tabs Navigation */}
      <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="pills" className="mb-3" style={{
          background: 'white',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <Nav.Item>
            <Nav.Link eventKey="dashboard" className="me-2">
              🏠 Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="createDept" className="me-2">
              ➕ Create Department
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="findDept" className="me-2">
              🔍 Find Department
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="createUser" className="me-2">
              👤 Create User
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="findUser">
              🔎 Find User
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tab Content */}
        <Tab.Content className="tab-content">
          <Tab.Pane eventKey="dashboard">
            <Row>
              <Col md={6}>
                <h3 className="mb-4">Welcome to Admin Dashboard</h3>
                <p>Manage your organization's departments and users through this intuitive interface.</p>
                <ul className="list-unstyled">
                  <li className="mb-2">✅ Create new departments with codes</li>
                  <li className="mb-2">✅ Add users to departments</li>
                  <li className="mb-2">✅ Search and view details instantly</li>
                  <li className="mb-2">✅ Real-time notifications</li>
                </ul>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={() => handleTabSelect('createUser')}
                  className="mt-3"
                >
                  👤 Get Started - Add User
                </Button>
              </Col>
              <Col md={6}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dashboard Illustration" 
                  className="illustration-img"
                />
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="createDept">
            <DepartmentForm />
          </Tab.Pane>

          <Tab.Pane eventKey="findDept">
            <DepartmentDetails />
          </Tab.Pane>

          <Tab.Pane eventKey="createUser">
            <UserForm />
          </Tab.Pane>

          <Tab.Pane eventKey="findUser">
            <UserDetails />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default Dashboard;