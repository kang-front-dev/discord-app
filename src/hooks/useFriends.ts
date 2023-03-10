import { useDispatch, useSelector } from 'react-redux';
interface IUseFriends {
  currentPage: string;
  filterValue: string;

  handleFriends: (options: IFriends) => void;
}

interface IFriends {
  currentPage: string;
  filterValue: string;
}
interface IReducerFriends {
  friendsReducer: {
    page: string;
    filter: string;
  };
}

export const useFriends = (): IUseFriends => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: IReducerFriends) => state.friendsReducer.page
  );
  const filterValue = useSelector(
    (state: IReducerFriends) => state.friendsReducer.filter
  );

  const handleFriends = (options: IFriends) => {
    dispatch({ type: 'SET_PAGE', payload: options.currentPage });
    dispatch({ type: 'SET_FILTER', payload: options.filterValue });
  };
  return { currentPage, filterValue, handleFriends };
};
