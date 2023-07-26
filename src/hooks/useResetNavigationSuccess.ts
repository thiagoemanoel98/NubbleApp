import {useNavigation} from '@react-navigation/native';

import {AuthStackParamList} from '@routes';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  // objeto é o estado, login é o index 0
  // Vai parar na tela n 1
  function reset(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }
  return {reset};
}
