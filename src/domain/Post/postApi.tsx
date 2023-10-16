import {postListMock} from './postListMock';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  let headerList = {
    Authorization:
      'Bearer MQ.02MN_jo4_ZN57n6FcScHve5a5cy6m2v7DgboEIxdqEWUQgwsdWcVYskytoR9',
  };

  const response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headerList,
  });

  let data = await response.json();
  console.log('Pego: ', data);

  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
