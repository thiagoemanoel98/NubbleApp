import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'favoriteCount' | 'commentCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    // toDo
  }

  function navigateToComments() {
    // toDo
  }

  function favoritePost() {
    // toDo
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={true}
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likePost}
        count={reactionCount}
      />
      <Item
        marked={false}
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigateToComments}
        count={commentCount}
      />
      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={favoritePost}
        count={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  count: number;
}

function Item({icon, onPress, count, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      mr="s24">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {count > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {count}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
