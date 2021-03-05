import './TourGuideModal.css';
import { Modal } from 'antd';

const TourGuideModal = ({ guide, visible, handleCancel }) => {
  return (
    <Modal
      className="tour-guider-modal"
      bodyStyle={{ padding: '0' }}
      width={470}
      visible={visible}
      onCancel={handleCancel}
      destroyOnClose={true}
      okText="Hire Me!"
    >
      <img alt={guide.name} src={guide.image} />
      <div className="tour-guider-modal-body">
        <h2>{guide.name}</h2>
        <p>{guide.desc}</p>
      </div>
    </Modal>
  );
};

export default TourGuideModal;
