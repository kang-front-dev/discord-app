import React, { useState } from 'react';
import Channel from '../Channel';

import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {MyTooltip} from '../../UI/MyTooltip'

import { channels } from '../../mocks/channels';


export default function SideBar() {
  const [toggleValue, setToggleValue] = useState<string | null>('home');

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setToggleValue(newValue);
    }
  };

  return (
    <div className="sidebar">
      <ToggleButtonGroup
        exclusive
        value={toggleValue}
        className="channel__list"
        onChange={handleToggle}
      >
        <ToggleButton
          value={-1}
          style={{ padding: '0', border: 'none', borderRadius: '50%' }}
          className="sidebar__toggle"
        >
          <MyTooltip title="Direct Messages" placement="right">
            <div className="channel home">
              <img
                className="discord-icon white"
                src={require('../../assets/img/logo-white.png')}
                alt=""
              />
              <img
                className="discord-icon black active"
                src={require('../../assets/img/logo-black.png')}
                alt=""
              />
            </div>
          </MyTooltip>
        </ToggleButton>

        <ToggleButton
          value=""
          disabled
          style={{ backgroundColor: 'none', padding: '0', border: 'none' }}
          className="sidebar__toggle"
        >
          <hr className="home__underline" />
        </ToggleButton>

        {channels.map((channel) => {
          console.log(channel.name);

          return (
            <ToggleButton
              key={channel.id}
              value={channel.id}
              style={{ padding: '0', border: 'none', borderRadius: '50%' }}
              className="sidebar__toggle"
            >
              <MyTooltip title={channel.name} placement="right">
                <div>
                  <Channel {...channel} />
                </div>
              </MyTooltip>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
}
