import React from 'react';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
}

export default function PostCommentItem({postComment}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />

      <Box marginLeft="s12">
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  );
}
