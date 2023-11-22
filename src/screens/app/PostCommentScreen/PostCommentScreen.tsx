import React from 'react';

import {usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list} = usePostCommentList(postId);
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text preset="headingLarge">Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
