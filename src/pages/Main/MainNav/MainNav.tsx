import React from 'react';
import ContentContainer from '../../../UI/ContentContainer';

import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';

import { MySmallTooltip } from '../../../UI/MyTooltip';

interface IMainNav {
  handler: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => void;
  toggleValue: string | null;
}

export default function MainNav({ handler, toggleValue }: IMainNav) {
  return (
    <nav className="main__nav">
      <ContentContainer type="left">
        <input
          type="text"
          className="main__nav_input"
          placeholder="Find or Start a conversation"
        />
      </ContentContainer>
      <div className="main__nav_toggle-block">
        <>
          <h2 className="section__title">
            <GroupIcon style={{ fontSize: '20px' }} />
            Friends
          </h2>
        </>
        <ToggleButtonGroup
          value={toggleValue}
          onChange={handler}
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
    </nav>
  );
}
