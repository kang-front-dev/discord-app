import React, { useState } from 'react';
import Server from '../ServerCard/index';

import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MyTooltip } from '../../UI/MyTooltip';

import { servers } from '../../mocks/servers';

import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
  const [toggleValue, setToggleValue] = useState<string | null>('');
  const navigate = useNavigate()

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null && newValue !== '') {
      navigate(`/server/${newValue}`)
      setToggleValue(newValue);
    }else if(newValue === ''){
      navigate(`/${newValue}`)
      setToggleValue(newValue);
    }
  };

  return (
    <div className="sidebar">
      <ToggleButtonGroup
        exclusive
        value={toggleValue}
        className="sidebar__list"
        onChange={handleToggle}
      >
        <ToggleButton
          value=''
          style={{ padding: '0', border: 'none', borderRadius: '50%' }}
          className="sidebar__toggle"
        >
          <MyTooltip title="Direct Messages" placement="right">
            <div className="server__card home">
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

        {servers.map((server) => {
          return (
            <ToggleButton
              key={server.id}
              value={server.id}
              style={{ padding: '0', border: 'none', borderRadius: '50%' }}
              className="sidebar__toggle"
            >
              <MyTooltip title={server.name} placement="right">
                <div>
                  <Server {...server} />
                </div>
              </MyTooltip>
            </ToggleButton>
          );
        })}
        <ToggleButton
          value="add"
          style={{ backgroundColor: 'none', padding: '0', border: 'none' }}
          className="sidebar__toggle options"
        >
          <MyTooltip title="Add a Server" placement="right">
            <AddIcon className="server__card" />
          </MyTooltip>
        </ToggleButton>
        <ToggleButton
          value="find"
          style={{ backgroundColor: 'none', padding: '0', border: 'none' }}
          className="sidebar__toggle options"
        >
          <MyTooltip title='Explore Public Servers' placement='right'>
            <ExploreIcon className="server__card" />
          </MyTooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
