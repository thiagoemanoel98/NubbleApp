import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let headerList = {
    Authorization:
      'Bearer MQ.02MN_jo4_ZN57n6FcScHve5a5cy6m2v7DgboEIxdqEWUQgwsdWcVYskytoR9',
  };

  const response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headerList,
  });

  let data: PageAPI<PostAPI> = await response.json();
  console.log('Pego: ', data);

  return data;
}

export const postApi = {
  getList,
};
