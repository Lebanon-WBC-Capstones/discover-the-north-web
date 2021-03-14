import React from 'react';
import './FeedbackForm.css';
import emailjs from 'emailjs-com';
import { UserOutlined } from '@ant-design/icons';
import { Typography, Input, Button, Form } from 'antd';
import { useTranslation } from 'react-i18next/';

const { Title } = Typography;

function FeedbackFormComponent({ DTN_email = 'gtour180@gmail.com' }) {
  const [form] = Form.useForm();

  function sendEmail(e) {
    console.log('hi');

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
  const { t } = useTranslation();
  return (
    <div className="feedback-cp-s">
      <Form form={form} onFinish={handleSubmit} className="feedbackForm">
        <div className="feedback-cp-form-ct">
          <div className="feedback-form-col-1">
            <Title level={2}>
              <span className="color">{t('aboutUsPage.footerTitle')}</span>
            </Title>
            <Title level={5}>
              <span className="color">{t('aboutUsPage.footerDesc')}</span>
            </Title>
          </div>

          <hr className="hr-vertical" />

          <div className="feedback-form-col-2">
            <Input type="hidden" name="user_name" value="name" />
            <Input type="hidden" name="DTN_email" value={DTN_email} />
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
                placeholder={t('aboutUsPage.footerEmail')}
                prefix={<UserOutlined className="userIcon" />}
              />
            </Form.Item>

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
                placeholder={t('aboutUsPage.footerExpress')}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="feedback-send-btn"
              >
                {t('aboutUsPage.footerButton')}
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default FeedbackFormComponent;
