import React from 'react';
import { joinAPI } from '../action/user';
import { useAppDispatch } from '../hook/hooks';

function SignUp() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(joinAPI({ name: 'test1', email: 'test1@test.com', password: '1234' }));
        }}
      >
        join1
      </button>
    </div>
  );
}

export default SignUp;
