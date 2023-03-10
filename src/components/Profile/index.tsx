import React from 'react';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { MySmallTooltip } from '../../UI/MyTooltip';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__avatar"></div>
        <div className="profile__text">
          <h3 className="profile__name">kang</h3>
          <p className="profile__tag">#4310</p>
        </div>
      </div>
      <div className="profile__btns">
        <MySmallTooltip title="Mute" placement="top">
          <IconButton>
            <MicIcon />
          </IconButton>
        </MySmallTooltip>
        <MySmallTooltip title="Deafen" placement="top">
          <IconButton>
            <HeadphonesIcon />
          </IconButton>
        </MySmallTooltip>
        <MySmallTooltip title="User Settings" placement="top">
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </MySmallTooltip>
      </div>
    </div>
  );
}
