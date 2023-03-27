import PropTypes from 'prop-types';
import '../ContactItem/ContactItem.css';

export const ContactItem = ({ id, name, number, deleteContact }) => (
  <li className="contact-item">
    <p>
      {name}: {number}
    </p>
    <button
      className="item-btn"
      type="button"
      onClick={() => deleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
