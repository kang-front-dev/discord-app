import React, { useState } from 'react';
import ContentContainer from '../../../UI/ContentContainer';

import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import SearchIcon from '@mui/icons-material/Search';

import { MySmallTooltip } from '../../../UI/MyTooltip';
import { useFriends } from '../../../hooks/useFriends';
import { users } from '../../../mocks/users';
import { getStatus } from '../../../utils/user-status';
import FriendStatus from '../../../UI/FriendStatus';

export default function MainNav() {
  const { handleFriends, currentPage } = useFriends();
  const [toggleValue, setToggleValue] = useState<string | null>('online');

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setToggleValue(newValue);
    }
  };
  return (
    <nav className="main__nav">
      <ContentContainer type="left">
        <input
          type="text"
          className="main__nav_input"
          placeholder="Find or Start a conversation"
        />
      </ContentContainer>
      {currentPage === 'friends' ? (
        <>
          <div className="main__nav_toggle-block">
            <>
              <h2 className="section__title">
                <GroupIcon style={{ fontSize: '20px' }} />
                Friends
              </h2>
            </>
            <ToggleButtonGroup
              value={toggleValue}
              onChange={handleToggle}
              exclusive
              className="main__nav_toggle-list"
            >
              {['online', 'all', 'pending', 'blocked'].map((value) => {
                return (
                  <ToggleButton
                    value={value}
                    key={value}
                    style={{
                      padding: '0',
                      border: 'none',
                      textTransform: 'none',
                      borderRadius: '5px',
                    }}
                    onClick={() => {
                      handleFriends({
                        currentPage: 'friends',
                        filterValue: value,
                      });
                    }}
                    className="main__nav_toggle"
                  >
                    <h3 className="main__nav_toggle-item">{value}</h3>
                  </ToggleButton>
                );
              })}
              <ToggleButton
                value="new"
                style={{
                  padding: '0',
                  border: 'none',
                  textTransform: 'none',
                  borderRadius: '5px',
                }}
                className="main__nav_toggle"
              >
                <h3 className="main__nav_toggle-item extra">Add Friend</h3>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="main__nav_btn-block">
            <MySmallTooltip title="New Group DM" placement="bottom">
              <IconButton className="main__nav_btn">
                <ChatBubbleIcon />
                <span>+</span>
              </IconButton>
            </MySmallTooltip>

            <span></span>
            <MySmallTooltip title="Inbox" placement="bottom">
              <IconButton>
                <InboxIcon />
              </IconButton>
            </MySmallTooltip>

            <MySmallTooltip title="Help" placement="bottom">
              <IconButton>
                <HelpIcon />
              </IconButton>
            </MySmallTooltip>
          </div>
        </>
      ) : null}
      {typeof currentPage === 'number' ? (
        <div className="main__nav_dm">
          <MySmallTooltip
            title={getStatus(users[currentPage].status)}
            placement="bottom"
          >
            <div className="main__nav_dm_friend_block">
              <AlternateEmailTwoToneIcon />
              <h3 className="main__nav_dm_friend_name">
                {users[currentPage].name}
              </h3>

              <div className="main__nav_dm_friend_status">
                <FriendStatus {...{ status: users[currentPage].status }} />
              </div>
            </div>
          </MySmallTooltip>
          <div className="main__nav_dm_friend_options">
            <MySmallTooltip title="Start Voice Call" placement="bottom">
              <PhoneIcon />
            </MySmallTooltip>
            <MySmallTooltip title="Start Video Call" placement="bottom">
              <VideocamIcon />
            </MySmallTooltip>
            <MySmallTooltip title="Pinned Messages" placement="bottom">
              <PushPinIcon />
            </MySmallTooltip>
            <MySmallTooltip title="Add Friends to DM" placement="bottom">
              <PersonAddAlt1Icon />
            </MySmallTooltip>
            <MySmallTooltip title="Hide User Profile" placement="bottom">
              <PersonOffIcon />
            </MySmallTooltip>
            <div className="main__nav_dm_friend_search_block">
              <input
                type="text"
                className="main__nav_dm_friend_search"
                placeholder="Search"
              />
              <SearchIcon />
            </div>
            <MySmallTooltip title="Inbox" placement="bottom">
                <InboxIcon />
            </MySmallTooltip>

            <MySmallTooltip title="Help" placement="bottom">
                <HelpIcon />
            </MySmallTooltip>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
