import './Searchbar.css';
import '../../root.css';
import iconArrow from '../../assets/images/icon-arrow.svg';
const Searchbar = (props) => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar"
        placeholder="Search for any IP address or domain"
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      />
      <div className="icon-container">
        <img src={iconArrow} alt="icon-arrow" />
      </div>
    </div>
  );
};

export default Searchbar;
