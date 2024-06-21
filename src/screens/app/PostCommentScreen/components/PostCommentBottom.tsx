import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export function PostCommentBottom({hasNextPage, fetchNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}
