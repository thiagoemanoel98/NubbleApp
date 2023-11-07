import {Post, usePaginatedList} from '@domain';

import {postService} from '../postService';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
