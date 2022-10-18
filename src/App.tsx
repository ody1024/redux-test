import React, { useEffect } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import type { RootState } from './store';
import { joinAPI, logInAPI } from './action/user';
import { useAppDispatch, useAppSelector } from './hook/hooks';
import { logOut } from './slice/user';
import { addPostAPI, getPostAPI } from './action/post';
import { cleanPost } from './slice/post';

function App() {
  const me = useAppSelector((state) => state.user.me);
  const addPostDone = useAppSelector((state) => state.post.addPostDone);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!me) dispatch(cleanPost());
    if (me) dispatch(getPostAPI(me.id!));
  }, [dispatch, me, addPostDone]);

  useEffect(() => {
    if (!me) navigate('/login');
  }, [me, navigate]);

  if (me) {
    return (
      <div>
        <button onClick={() => dispatch(addPostAPI({ id: me.id!, content: 'first' }))}>글쓰기</button>
        <button onClick={() => dispatch(logOut())}>out</button>
      </div>
    );
  }

  return <div>APP</div>;
}

export default App;
