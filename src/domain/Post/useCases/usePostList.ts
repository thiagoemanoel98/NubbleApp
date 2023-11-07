import {useEffect, useState} from 'react';

import {Post} from '@domain';

import {postService} from '../postService';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(1);

      if (meta.hasNextpage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
      setPostList(data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  async function fetchNextPage() {
    // Resolve o problema dele ser chamado antes de
    // Carregar os itens da listagem
    if (loading && !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);

      if (meta.hasNextpage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }

      setPostList(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    fetchNextPage,
    refresh: fetchInitialData,
  };
}
