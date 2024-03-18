import { Formik } from 'formik';
import { ButtonUpdate, Formstyled, Input } from './ModalForm.styled';

export const ModalForm = ({ onSubmit, closeModal }) => {
  const handleSubmit = values => {
    onSubmit(values);
    closeModal();
  };
  return (
    <Formik
      initialValues={{
        universityName: '',
        shortName: '',
        sitelink: '',
        programsList: '',
        garant: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Formstyled>
          <label htmlFor="universityName">
            Назва Університету <br />
            <Input
              id="universityName"
              name="universityName"
              type="text"
              autoComplete="off"
              required
            />
          </label>
          <br />
          <label htmlFor="shortName">
            Скорочена Назва <br />
            <Input
              id="shortName"
              name="shortName"
              type="text"
              autoComplete="off"
              required
            />
          </label>
          <br />
          <label htmlFor="sitelink">
            Сайт <br />
            <Input
              id="sitelink"
              name="sitelink"
              type="text"
              autoComplete="off"
              required
            />
          </label>
          <br />
          <label htmlFor="programsList">
            Перелік Програм <br />
            <Input
              id="programsList"
              name="programsList"
              type="tel"
              autoComplete="off"
              required
            />
          </label>
          <br />
          <label htmlFor="garant">
            Викладач <br />
            <Input
              id="garant"
              name="garant"
              type="text"
              autoComplete="off"
              required
            />
          </label>
          <ButtonUpdate type="submit" disabled={isSubmitting}>
            Додати
          </ButtonUpdate>
        </Formstyled>
      )}
    </Formik>
  );
};
