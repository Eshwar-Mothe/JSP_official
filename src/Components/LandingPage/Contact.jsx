import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <img
          src="waiting.png"
          alt="Page Under Construction"
          style={{ maxWidth: '400px', width: '100%'}}
        />
        <h2 style={{ marginBottom: '1rem' }}>This Page is Under Developement</h2>
        <Button type="primary" danger onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </div>
    );
}

export default Contact