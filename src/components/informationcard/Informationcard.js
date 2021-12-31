import './Informationcard.css';

const Informationcard = (props) => {
  return (
    <div className="informationcard-container">
      <div className="information-content">
        <div className="information-content-header">
          <h5>IP ADDRESS</h5>
        </div>
        <div className="information-content-header">
          <h5>LOCATION</h5>
        </div>
        <div className="information-content-header">
          <h5>TIMEZONE</h5>
        </div>
        <div className="information-content-header">
          <h5>ISP</h5>
        </div>
        <div className="information-content-data">
          <h3>{props.ipaddress}</h3>
        </div>
        <div className="information-content-data">
          <h3>{props.location}</h3>
        </div>
        <div className="information-content-data">
          <h3>{props.timezone}</h3>
        </div>
        <div className="information-content-data">
          <h3>{props.isp}</h3>
        </div>
      </div>
    </div>
  );
};

export default Informationcard;
