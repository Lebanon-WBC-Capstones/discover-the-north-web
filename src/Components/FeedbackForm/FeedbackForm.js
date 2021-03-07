import React from 'react';
import './FeedbackForm.css';
import emailjs from 'emailjs-com';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Typography, Input, Button, Form } from 'antd';

const { Title } = Typography;

function FeedbackFormComponent({
  user_name,
  DTN_email = 'gtour180@gmail.com',
}) {
  const [form] = Form.useForm();

  function sendEmail(e) {
    emailjs
      .sendForm(
        'service_qmp8xcc',
        'template_8ojjr8x',
        '.feedbackForm',
        'user_iKQsvNK9d1jdceleL9Lht'
      )
      .then(
        (result) => {
          window.alert('Your message has been sent! Thanks for your time.');
        },
        (error) => {
          window.alert('Something went wrong. Try again!');
        }
      );
    form.resetFields();
  }

  const handleSubmit = () => {
    sendEmail();
  };

  return (
    <div className="feedback-cp-s">
      <div className="feedback-cp-form-ct">
        <Form form={form} onFinish={handleSubmit}>
          <Layout className="layoutHeight">
            <Row className="firstRowMargin">
              <Col span={8} offset={3}>
                <Title level={2}>Your Opinion Always Matters</Title>
                <Title level={5}>
                  After visiting our site, you may have some advises. We would
                  like to hear them from you.
                </Title>
              </Col>
              <hr className="hr-vertical" />
              <Input type="hidden" name="user_name" value={user_name} />
              <Input type="hidden" name="DTN_email" value={DTN_email} />
              <Col span={8} offset={-2} className="colMarginTop">
                <Form.Item
                  name="user_email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input
                    type="email"
                    name="user_email"
                    className="input_email"
                    placeholder="  Your Email..."
                    prefix={<UserOutlined className="userIcon" />}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="end">
              <Col span={8} className="colMargin2">
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your message!',
                    },
                  ]}
                >
                  <Input
                    name="message"
                    className="input_message"
                    placeholder="Express yourself"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={6} offset={17}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="sendButton"
                  >
                    Send
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Layout>
        </Form>
      </div>
    </div>
  );
}

export default FeedbackFormComponent;
