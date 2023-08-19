import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser } from './../../utils/selector';
import axios from 'axios';
import { baseUrl } from './../../utils/const';
import * as userActions from './../../features/user';
import EditNamesForm from './../../components/editNamesForm';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [displayEditForm, setDisplayEditForm] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    if (token) {
      axios
        .post(
          `${baseUrl}/profile`,
          {},
          { headers: { Authorization: `Bearer ${token}` } },
        )
        .then((res) => {
          console.log(res.data.body);
          dispatch(userActions.setUser({ user: res.data.body }));
        })
        .catch((err) => {
          console.log(err.message);
          navigate('/login');
        });
    }
  }, [token, navigate, dispatch]);

  const handleEdit = () => {
    setDisplayEditForm(true);
  };

  if (token) {
    return (
      <main className="main bg-dark profile">
        <div className="profile__header">
          <h1 className="profile__title">
            <p>Welcome back</p>
            {!displayEditForm && (
              <p>
                {user.firstName} {user.lastName}
              </p>
            )}
          </h1>
          {displayEditForm ? (
            <EditNamesForm displayForm={setDisplayEditForm} />
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account__content__wrapper">
            <h3 className="account__title">Argent Bank Checking (x8349)</h3>
            <p className="account__amount">$2,082.79</p>
            <p className="account__amount__description">Available Balance</p>
          </div>
          <div className="account__content__wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account__content__wrapper">
            <h3 className="account__title">Argent Bank Savings (x6712)</h3>
            <p className="account__amount">$10,928.42</p>
            <p className="account__amount__description">Available Balance</p>
          </div>
          <div className="account__content__wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account__content__wrapper">
            <h3 className="account__title">Argent Bank Credit Card (x8349)</h3>
            <p className="account__amount">$184.30</p>
            <p className="account__amount__description">Current Balance</p>
          </div>
          <div className="account__content__wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
};

export default UserProfile;
