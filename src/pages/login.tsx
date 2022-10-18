import React from 'react';
import { joinAPI, logInAPI } from '../action/user';
import { useNavigate, redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hook/hooks';
function Login() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logInAPI({ email: 'test@test.com', password: '1234' }));
        }}
      >
        in1
      </button>
    </div>
  );
}

export default Login;
