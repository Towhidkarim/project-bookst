import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants';
import GetUserDataAction from '../actions/GetUserDataAction';

export const useUserInfo = () =>
  useQuery({
    queryFn: async () => GetUserDataAction(),
    queryKey: [queryKeys.userInfo],
    staleTime: 1000 * 60 * 5,
  });
