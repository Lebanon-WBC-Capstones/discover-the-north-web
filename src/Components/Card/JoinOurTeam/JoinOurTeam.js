import { Card, Button } from 'antd';
import './JoinOurTeam.css';
import { Link } from 'react-router-dom';
import EmailModal from '../../EmailModal/EmailModal';
import { useState } from 'react';

const JoinOurTeam = ({ guide }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };
  const imgstyle = {
    objectFit: 'cover',
  };
  return (
    <Card className="join-team-cards" bodyStyle={{ padding: '0' }}>
      <div className="cardbody">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img
            alt={guide.name}
            src={guide.image}
            style={imgstyle}
            className="home-guider-card"
          />
        </div>

        <div
          data-aos="fade-left"
          className="info"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div className="info">
            <h1 className=" home-header-size title">
              {guide.name} our {guide.speciality_tags[0]}
            </h1>
            <p className="description">
              Our team consist of experienced tour guides, if you want to join
              them don't hesitate!
            </p>

            <Button
              type="primary"
              className="join-us-btn"
              onClick={handleClick}
            >
              Join Our Team
            </Button>
            <EmailModal
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
            <p className="cardfooter">
              Check the rest of the team <Link to="/tour-guide">Go Here</Link>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JoinOurTeam;
