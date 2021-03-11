import React from 'react';
import './Footer.css';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Footer } = Layout;
const { Title, Text } = Typography;

export default function FooterComponent() {
  return (
    <div>
      <Layout>
        <Footer className="background">
          <Title level={3}>
            <Link to="/about-us">
              <Text className="textColor">About Us</Text>
            </Link>
          </Title>
          <Title level={5}>
            <Link to="/privacy_policy">
              <Text className="textColor">Privacy Policy</Text>
            </Link>
          </Title>
          <Text className="textColor">
            COPYRIGHT © DISCOVER THE NORTH ALL RIGHTS RESERVED
          </Text>
        </Footer>
      </Layout>
    </div>
  );
}
