import React, { useState, useRef } from 'react';
import { useAuth } from '../../Context/AuthContext.js';
import { Link, useHistory } from 'react-router-dom';

export default function SignUpPage() {
  const emailRef = useRef();
  const passRef = useRef();
  const passVerifRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passRef.current.value !== passVerifRef.current.value) {
      return setError('Password do mot match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      history.push('/user-profile');
    } catch {
      window.alert('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
      <h2> Sign up </h2>
      {error && <div>{error}</div>}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label> Email </label>
        <input type="email" ref={emailRef} required />
        <label> Password </label>
        <input name="pass" type="password" ref={passRef} />
        <label> Password Confirmation</label>
        <input name="passVerif" type="password" ref={passVerifRef} />
        <br />
        <button disabled={loading} type="submit">
          Sign up
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log in </Link>
      </div>
    </div>
  );
}
