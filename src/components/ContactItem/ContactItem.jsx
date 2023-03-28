import PropTypes from 'prop-types';
import '../ContactItem/ContactItem.css';

export const ContactItem = ({ name, number, deleteContact }) => (
  <li className="contact-item">
    <p>
      {name}: {number}
    </p>
    <button className="item-btn" type="button" onClick={deleteContact}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
