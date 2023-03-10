import React from 'react';
import { Status } from '../mocks/users';
import ModeNightIcon from '@mui/icons-material/ModeNight';
interface IFriendStatusProps {
  status: Status;
}

export default function FriendStatus({ status }: IFriendStatusProps) {
  return (
    <div className={`dm-friend_status-icon ${status}`}>
      <ModeNightIcon />
    </div>
  );
}
