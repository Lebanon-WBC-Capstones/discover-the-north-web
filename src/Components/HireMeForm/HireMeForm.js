import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, Input, Radio, Select, Calendar } from 'antd';
import './HireMeForm.css';

export default function ContactUs({
  citiesArray,
  Tguide_email = 'gtour180@gmail.com',
  Tguide_name = 'guide1',
}) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [chooseditem, setChooseditem] = useState('');
  const [selecteditem, setSelecteditem] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  function sendEmail() {
    emailjs
      .sendForm(
        'service_ptqxdat',
        'template_3x6q9lo',
        '.hiremeform',
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
    form.resetFields();
  }
  const plainOptions = ['Full day', '2 days', 'other'];
  const handleCheck = (value) => {
    setChooseditem(value.target.value);
  };

  const handleSubmit = (values) => {
    sendEmail();
    console.log('Success:', values);
  };

  return (
    <div>
      <Form form={form} onFinish={handleSubmit} className="hiremeform ">
        <div className="hireMe-div">
          <div className="calendar-div">
            <Form.Item
              className="site-config-provider-calendar-wrapper"
              rules={[
                {
                  required: true,
                  message: 'Please input the date!',
                },
              ]}
            >
              <Calendar
                fullscreen={false}
                onChange={(value) => {
                  setSelectedDate(
                    value._d.toString().split(' ').slice(0, 4).join(' ')
                  );
                }}
                name="date"
              />

              <Input
                type="hidden"
                name="date"
                className="date"
                value={selectedDate}
              />
            </Form.Item>
          </div>
          <div className="form-div">
            <Input type="hidden" name="Tguide_email" value={Tguide_email} />
            <Input type="hidden" name="Tguide_name" value={Tguide_name} />

            <Form.Item
              label="Full Name"
              name="user_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input type="text" name="user_name" className="input_name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="user_email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input type="email" name="user_email" className="input_email" />
            </Form.Item>

            <Form.Item label="City" name="city">
              <Select
                name="city"
                className="cities_select"
                onChange={(value) => {
                  setSelecteditem(value);
                }}
                required
              >
                {citiesArray.map((item, index) => (
                  <Option
                    className="cityOption"
                    key={index}
                    value={item.name}
                    name="city"
                  >
                    {item.name}
                  </Option>
                ))}
              </Select>
              <Input
                type="hidden"
                name="city"
                className="input_city"
                value={selecteditem}
              />
            </Form.Item>
            <Form.Item
              label="For how long"
              name="duration"
              rules={[
                {
                  required: true,
                  message: 'Please choose the duration!',
                },
              ]}
            >
              <Radio.Group onChange={handleCheck} value={chooseditem}>
                {plainOptions.map((opt) => (
                  <Radio value={opt}>{opt}</Radio>
                ))}
              </Radio.Group>
            </Form.Item>
            <Input type="hidden" name="duration" value={chooseditem} />
            <Form.Item
              label="Message"
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
          </div>
        </div>
        <div className="send-btn">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
