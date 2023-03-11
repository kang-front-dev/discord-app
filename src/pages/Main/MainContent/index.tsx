import React, { useState } from 'react';
import ContentContainer from '../../../UI/ContentContainer';

import { useFriends } from '../../../hooks/useFriends';
import FriendsList from '../../../components/FriendsList';

import DMList from '../../../components/DMList';
import Activity from '../../../components/Activity/index';
import DMChat from '../../../components/DMChat/index';
import { users } from '../../../mocks/users';
import FriendProfile from '../../../components/FriendProfile/index'

export default function MainContent() {
  const { currentPage, handleFriends } = useFriends();

  const [toggleValue, setToggleValue] = useState<string | null>('friends');

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null && newValue !== 'title') {
      handleFriends({ currentPage: newValue, filterValue: 'online' });
      setToggleValue(newValue);
    }
  };
  return (
    <div className="main__content">
      <ContentContainer type="left">
        <div className="main__content_left">
          <DMList
            {...{ toggleValue: toggleValue, handleToggle: handleToggle }}
          />
        </div>
      </ContentContainer>
      <ContentContainer type="center">
        <>
          {currentPage === 'friends' ? <FriendsList /> : <></>}
          {typeof currentPage === 'number' ? (
            <DMChat {...users[currentPage]} />
          ) : null}
        </>
      </ContentContainer>
      <ContentContainer type="right">
        <>
        {currentPage === 'friends' ? <Activity /> : <></>}
        {typeof currentPage === 'number' ? (
            <FriendProfile {...users[currentPage]} />
          ) : null}
        </>
      </ContentContainer>
    </div>
  );
}
