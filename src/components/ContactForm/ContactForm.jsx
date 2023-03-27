import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { schema, contactNumberMask } from '../Validate';
import PropTypes from 'prop-types';
import '../ContactForm/ContactForm.css';

export const ContactForm = ({ onSubmit }) => {
  const formId = nanoid();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, action) => {
        onSubmit({ id: formId, ...values }, { action });
      }}
    >
      <Form className="form">
        <label>
          Name <br />
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />{' '}
          <br />
          <ErrorMessage name="name" component={'span'} />
        </label>
        <label>
          Number <br />
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be contain 7 digits"
            mask={contactNumberMask}
          />{' '}
          <br />
          <ErrorMessage name="number" component={'span'} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
