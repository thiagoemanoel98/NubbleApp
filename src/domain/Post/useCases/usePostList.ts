import {useEffect, useState} from 'react';

import {Post} from '@domain';

import {postService} from '../postService';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPage(prev => prev + 1);
      setPostList(prev => [...prev, ...list]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  function fetchNextPage() {
    // Resolve o problema dele ser chamado antes de
    // Carregar os itens da listagem
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    error,
    loading,
    fetchData,
    fetchNextPage,
    refetch: fetchData,
  };
}
