import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, Input, message, Radio, DatePicker } from 'antd';
import './FeedbackForm.css';
const key = 'updatable';
export default function ContactUs({
  citiesArray,
  Tguide_email = 'gtour180@gmail.com',
  Tguide_name = 'guide1',
  name,
}) {
  const [form] = Form.useForm();
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
          message.loading({ content: 'Loading...', key });
          setTimeout(() => {
            message.success({
              content: 'Message Sent Successfuly!',
              key,
              duration: 2,
            });
          }, 1000);
        },
        (error) => {
          message.loading({ content: 'Loading...', key });
          setTimeout(() => {
            message.error({
              content: 'Something went wrong, try again',
              key,
              duration: 2,
            });
          }, 1000);
        }
      );
    form.resetFields();
  }
  const handleSubmit = (values) => {
    sendEmail();
  };
  return (
    <div>
      <Form form={form} onFinish={handleSubmit} className="hiremeform ">
        <div className="hireMe-div">
          <div className="left-div-p">
            <h1 className="left-div-text">
              {' '}
              <img
                alt="left side background"
                className="left-div-img"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48bGluayB0eXBlPSJ0ZXh0L2NzcyIgcmVsPSJzdHlsZXNoZWV0IiBpZD0iZGFyay1tb2RlLWN1c3RvbS1saW5rIj48L2xpbms+PGxpbmsgdHlwZT0idGV4dC9jc3MiIHJlbD0ic3R5bGVzaGVldCIgaWQ9ImRhcmstbW9kZS1nZW5lcmFsLWxpbmsiPjwvbGluaz48c3R5bGUgbGFuZz0iZW4iIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlLWN1c3RvbS1zdHlsZSI+PC9zdHlsZT48c3R5bGUgbGFuZz0iZW4iIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlLW5hdGl2ZS1zdHlsZSI+PC9zdHlsZT48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im04Ljc1IDE3LjYxMnY0LjYzOGMwIC4zMjQuMjA4LjYxMS41MTYuNzEzLjA3Ny4wMjUuMTU2LjAzNy4yMzQuMDM3LjIzNCAwIC40Ni0uMTEuNjA0LS4zMDZsMi43MTMtMy42OTJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjMuNjg1LjEzOWMtLjIzLS4xNjMtLjUzMi0uMTg1LS43ODItLjA1NGwtMjIuNSAxMS43NWMtLjI2Ni4xMzktLjQyMy40MjMtLjQwMS43MjIuMDIzLjMuMjIyLjU1Ni41MDUuNjUzbDYuMjU1IDIuMTM4IDEzLjMyMS0xMS4zOS0xMC4zMDggMTIuNDE5IDEwLjQ4MyAzLjU4M2MuMDc4LjAyNi4xNi4wNC4yNDIuMDQuMTM2IDAgLjI3MS0uMDM3LjM5LS4xMDkuMTktLjExNi4zMTktLjMxMS4zNTItLjUzbDIuNzUtMTguNWMuMDQxLS4yOC0uMDc3LS41NTgtLjMwNy0uNzIyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              />{' '}
              <br />
              Email The tour guider <br />
              <span>'{name}'</span>
            </h1>
          </div>
          <div className="form-div">
            <div className="calendar-div">
              <div className="email-name-mess-c">
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
                  <Input
                    type="email"
                    name="user_email"
                    className="input_email"
                  />
                </Form.Item>
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
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Please input the date!',
                    },
                  ]}
                  label="Pick a date"
                >
                  <DatePicker
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
                <Form.Item name="City" label="City">
                  <div className="checkbox-headline">
                    <div className="checkbox-cont">
                      {citiesArray.map((item, index) => (
                        <Radio
                          name="city"
                          onChange={(v) => {
                            setSelecteditem(v.target.value);
                          }}
                          key={index}
                          value={item.name}
                          className="checkbox-single-value"
                        >
                          {item.name}
                        </Radio>
                      ))}
                    </div>
                  </div>
                </Form.Item>

                <div className="btn-submit-send">
                  <Form.Item>
                    <Button
                      className="send-btn"
                      type="primary"
                      htmlType="submit"
                    >
                      Send
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
