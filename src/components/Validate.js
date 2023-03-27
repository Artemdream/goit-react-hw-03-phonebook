import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required(''),
  number: Yup.string().required(''),
});

const contactNumberMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export { schema, contactNumberMask };
