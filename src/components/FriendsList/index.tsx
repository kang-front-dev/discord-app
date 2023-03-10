import React, { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import { MyTooltip } from '../../UI/MyTooltip';
import { useFriends } from '../../hooks/useFriends';
import { IUser } from '../../mocks/users';
import { users } from '../../mocks/users';
import FriendCard from '../FriendCard';

export default function FriendsList() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [usersList, setUsersList] = useState<Array<IUser>>([
    {
      id: 0,
      status: 'afk',
      avatar: '',
      name: '',
      activity: '',
    },
  ]);
  const [backupArr, setBackupArr] = useState<Array<IUser>>([]);

  const { filterValue } = useFriends();

  const handleSearch = (string: string) => {
    setSearchValue(string);
    const temp = backupArr.filter((user) => {
      if (user.name.toLowerCase().includes(string)) {
        return true;
      }
      return false;
    });
    setUsersList(temp);
  };

  useEffect(() => {
    if (filterValue === 'online') {
      const temp = users.filter((item) => {
        if (item.status === filterValue) {
          return true;
        }
        return false;
      });
      setBackupArr(temp);
      setUsersList(temp);
    } else if (filterValue === 'all') {
      setUsersList(users);
      setBackupArr(users);
    } else {
      setUsersList([]);
    }
  }, [filterValue]);

  return (
    <div className="friends__list_wrapper">
      <div className="friends__list_search_block">
        <input
          type="text"
          className="friends__list_search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <SearchIcon />
      </div>
      <h3 className="friends__list_title">{filterValue} - {usersList.length}</h3>
      <div className="friends__list">
        {usersList.map((user) => {
          return (
            <div key={user.id} className="friends__list_card_wrapper">
              <FriendCard {...user} />
              <MyTooltip title="Message" placement="top">
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </MyTooltip>
              <MyTooltip title="More" placement="top">
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </MyTooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
