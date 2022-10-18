import { IPost } from '../slice/post';

const post: IPost[] = [];

export const addPost = (postData: IPost) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postData.id === null) reject('로그인이 필요합니다.');
      post.push(postData);
      console.log(post);
      resolve('success');
    }, 300);
  });

export const getPost: (id: number) => Promise<IPost[]> = (id: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) reject('로그인이 필요합니다.');
      resolve(post.filter((v) => v.id === id));
    }, 300);
  });
export default post;
