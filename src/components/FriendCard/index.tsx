import React from 'react';

import { IUser } from '../../mocks/users';

import { getActivity } from '../../utils/user-activity';
import FriendStatus from '../../UI/FriendStatus';
import { MySmallTooltip } from '../../UI/MyTooltip';
import { getStatus } from '../../utils/user-status';

export default function FriendCard({
  id,
  avatar,
  name,
  status,
  activity,
}: IUser) {
  return (
    <div className="dm-friend_card">
      <MySmallTooltip title={getStatus(status)} placement="top">
        <div
          className={`dm-friend_card_avatar ${status}`}
          style={{ backgroundImage: `url(${avatar})` }}
        >
          <FriendStatus {...{ status: status }} />
        </div>
      </MySmallTooltip>
      <div className="dm-friend_card_text">
        <h3 className="dm-friend_card_name">{name}</h3>
        <div className="dm-friend_card_activity">{getActivity(activity)}</div>
      </div>
    </div>
  );
}
