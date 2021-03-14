import './TourGuideModal.css';
import { Modal } from 'antd';

const imgStyle = {
  height: '500px',
  width: '400px',
  objectFit: 'cover',
};
const overrideStyle = {
  display: 'flex',
};
const TourGuideModal = ({ guide, visible, handleCancel }) => {
  const handleOk = () => {
    window.location.href = `/hire-me/${guide.name}`;
  };
  return (
    <Modal
      className="tour-guider-modal"
      width={800}
      visible={visible}
      onCancel={handleCancel}
      destroyOnClose={true}
      onOk={handleOk}
      okText="Hire Me!"
      bodyStyle={overrideStyle}
    >
      <img alt={guide.name} src={guide.image} style={imgStyle} />
      <div className="tour-guider-modal-body">
        <h2>{guide.name}</h2>
        <p>{guide.summary}</p>
      </div>
    </Modal>
  );
};

export default TourGuideModal;
