import {MetaDataPage} from '@types';

import {MetaDataPageAPI} from './apiTypes';

/**
 * Recebe dados da API e adapta para uso interno da aplicação
 * @param meta
 */
function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstpage: meta.first_page,
    hasNextpage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
