import {useEffect, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [list, setList] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setLoading(true);
      const {data, meta} = await getList(1);

      if (meta.hasNextpage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
      setList(data);
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
      const {data, meta} = await getList(page);

      if (meta.hasNextpage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }

      setList(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    error,
    loading,
    fetchNextPage,
    refresh: fetchInitialData,
  };
}
