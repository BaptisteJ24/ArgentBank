import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as userActions from './../../features/user';
import { baseUrl } from './../../utils/const';
import { selectUser, selectToken } from './../../utils/selector';
import PropTypes from 'prop-types';

const EditNameForm = ({ displayForm }) => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector(selectUser);
  const token = useSelector(selectToken);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isValid) {
      axios
        .put(
          `${baseUrl}/profile`,
          {
            firstName: newFirstName,
            lastName: newLastName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          dispatch(userActions.updateUserSuccess({ user: res.data.body }));
          displayForm(false);
        })
        .catch((err) => {
          dispatch(userActions.updateUserFailure({ error: err.message }));
        });
    }
  }, [isValid, newFirstName, newLastName, dispatch, displayForm, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (
      newFirstName.length < 2 ||
      newFirstName.length > 20 ||
      newLastName.length < 2 ||
      newLastName.length > 30
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    displayForm(false);
  };

  return (
    <form className="editNamesForm" onSubmit={handleSubmit}>
      <div className="editNamesForm__inputs">
        <div className="input__wrapper">
          <label>
            <span className="sr-only">Firstname</span>
            <input
              type="text"
              id="firstname"
              placeholder={firstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
          </label>
        </div>
        <div className="input__wrapper">
          <label>
            <span className="sr-only">Lastname</span>
            <input
              type="text"
              id="password"
              placeholder={lastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="editNamesForm__buttons">
        <button className="login__button" type="reset" onClick={handleCancel}>
          Cancel
        </button>
        <button className="login__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

EditNameForm.propTypes = {
  displayForm: PropTypes.func.isRequired,
};

export default EditNameForm;
