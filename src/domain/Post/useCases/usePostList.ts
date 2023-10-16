import {useEffect, useState} from 'react';

import {Post} from '@domain';

import {postService} from '../postService';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    fetchData,
    refetch: fetchData,
  };
}
