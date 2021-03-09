import { Card } from 'antd';
import './JoinOurTeam.css';
import { Link } from 'react-router-dom';
import ButtonComponont from '../../Button/Button';
import EmailModal from '../../EmailModal/EmailModal';
import { useState } from 'react';

const JoinOurTeam = ({ guide }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <Card className="cards" bodyStyle={{ padding: '0' }}>
      <div className="cardbody">
        <img alt={guide.name} src={guide.image} />
        <div className="info">
          <h1 className="title">
            {guide.name} our {guide.speciality_tags[0]}
          </h1>
          <p className="description">{guide.summary}</p>
          <ButtonComponont
            type="primary"
            text="Join Our Team"
            onClick={handleClick}
          />
          <EmailModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <p className="cardfooter">
            Check the rest of the team <Link to="/tour-guide">Go Here</Link>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default JoinOurTeam;
