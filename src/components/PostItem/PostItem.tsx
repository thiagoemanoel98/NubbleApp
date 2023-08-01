import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostHeader/PostActions';
import {PostHeader} from './components/PostHeader/PostHeader';
import {PostImage} from './components/PostHeader/PostImage';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
