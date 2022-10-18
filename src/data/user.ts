export interface JoinData {
  name: string;
  email: string;
  password: string;
}

export interface LogInData {
  email: string;
  password: string;
}

export interface IData {
  id: number;
  name: string;
  email: string;
  password: string;
}

const data: IData[] = [];

export const join = (joinData: JoinData) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingData = data.filter((v) => v.email === joinData.email);
      if (existingData.length > 0) reject('이미 존재하는 이메일입니다.');
      else {
        const user = { ...joinData, id: data.length + 1 };
        data.push(user);
        console.log(data);
        resolve('success');
      }
    }, 700);
  });

export const logIn: (logInData: LogInData) => Promise<IData> = (logInData: LogInData) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = data.filter((v) => v.email === logInData.email && v.password === logInData.password);
      console.log(user);
      if (user.length === 0) reject('아이디 또는 비밀번호 오류');
      resolve(user[0]);
    }, 700);
  });

export default data;
