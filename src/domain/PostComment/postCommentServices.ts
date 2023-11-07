import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageApi = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageApi.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageApi.meta),
  };
}

export const postService = {
  getList,
};
