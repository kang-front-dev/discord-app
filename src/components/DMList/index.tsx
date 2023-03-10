import React from 'react';
import { users } from '../../mocks/users';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import WhatshotIcon from '@mui/icons-material/Whatshot';


import FriendCard from '../FriendCard/index';
import { MySmallTooltip } from '../../UI/MyTooltip';

interface IDMListProps {
  toggleValue: string | null;
  handleToggle: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => void;
}

export default function DMList({ toggleValue, handleToggle }: IDMListProps) {
  return (
    <ToggleButtonGroup
      value={toggleValue}
      onChange={handleToggle}
      exclusive
      className="main__content_toggle-block"
    >
      <ToggleButton
        value="friends"
        style={{
          border: 'none',
          textTransform: 'none',
          borderRadius: '5px',
        }}
        className="main__content_left_toggle"
      >
        <GroupIcon />
        <span className="main__content_left_toggle_text">Friends</span>
      </ToggleButton>
      <ToggleButton
        value="nitro"
        style={{
          border: 'none',
          textTransform: 'none',
          borderRadius: '5px',
        }}
        className="main__content_left_toggle"
      >
        <WhatshotIcon />
        <span className="main__content_left_toggle_text">Nitro</span>
      </ToggleButton>
      <ToggleButton
        value={'title'}
        style={{
          padding: '0',
          border: 'none',
          textTransform: 'none',
          borderRadius: '5px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
        className="main__content_left_new_toggle"
      >
        <h3 className="main__content_left_new">
          Direct Messages
          <MySmallTooltip title="Create DM" placement="top">
            <span>+</span>
          </MySmallTooltip>
        </h3>
      </ToggleButton>
      {users.map((user) => {
        return (
          <ToggleButton
            key={user.id}
            value={user.id}
            style={{
              border: 'none',
              textTransform: 'none',
              borderRadius: '5px',
            }}
            className="dm-friend_parent"
          >
            <FriendCard {...user} />
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
