// arquivo que so define interface

// Interface para uso interno desses dados
export interface MetaDataPage {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstpage: number;
  hasNextpage: boolean;
  hasPreviousPage: boolean;
}

export interface Page<Data> {
  meta: MetaDataPage;
  data: Data[];
}
