import {RootStackParamList} from './Routes';

// sobreescreve a tipagem do navigate

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
