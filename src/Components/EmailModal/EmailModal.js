import React from 'react';
import emailjs from 'emailjs-com';
import { Modal, Form, Input } from 'antd';
import './EmailModal.css';
import { useTranslation } from 'react-i18next/';

export default function ContactUs({
  DTN_email = 'gtour180@gmail.com',
  isModalVisible,
  setIsModalVisible,
}) {
  const [form] = Form.useForm();
  function sendEmail() {
    emailjs
      .sendForm(
        'service_ptqxdat',
        'template_a2x0vvq',
        '.contact-form',
        'user_TjOtCbLf6rKNt6BePm7vw'
      )
      .then(
        (result) => {
          window.alert('Your message has been sent!');
        },
        (error) => {
          window.alert('Something went wrong. Try again!');
        }
      );
  }

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
    form.resetFields();
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        sendEmail();
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const { t } = useTranslation();
  return (
    <div>
      <Modal
        title={[
          <div className="title_modal">{t('tourGuidePage.modal.welcome')}</div>,
        ]}
        visible={isModalVisible}
        onOk={handleOk}
        okText={t('tourGuidePage.modal.send')}
        onCancel={handleCancel}
        cancelText={t('tourGuidePage.modal.cancel')}
      >
        <Form form={form} {...layout} className="contact-form">
          <Input type="hidden" name="page_email" value={DTN_email} />
          <Form.Item
            label={t('tourGuidePage.modal.name')}
            name="newGuide_name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input type="text" name="newGuide_name" className="input_name" />
          </Form.Item>
          <Form.Item
            label={t('tourGuidePage.modal.email')}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input type="email" name="email" className="input_email" />
          </Form.Item>
          <Form.Item
            label={t('tourGuidePage.modal.specialization')}
            name="specialization"
            rules={[
              {
                required: true,
                message: 'Please input the specialization!',
              },
            ]}
          >
            <Input type="text" name="specialization" className="input_spec" />
          </Form.Item>
          <Form.Item
            label={t('tourGuidePage.modal.city')}
            name="city"
            rules={[
              {
                required: true,
                message: 'Please input the city!',
              },
            ]}
          >
            <Input type="text" name="city" className="input_city" />
          </Form.Item>
          <Form.Item
            label={t('tourGuidePage.modal.message')}
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <Input.TextArea name="message" className="input_message" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
