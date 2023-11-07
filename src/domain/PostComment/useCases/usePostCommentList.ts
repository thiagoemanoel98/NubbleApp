import {usePaginatedList} from 'src/domain/hooks/usePaginatedList';

import {postCommentService} from '../postCommentServices';

export function usePostCommentList(postId: number) {
  // para adaptar o getList ao hook
  // mascarar o parametro extra Postid
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList(getList);
}
