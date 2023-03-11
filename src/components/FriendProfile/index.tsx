import React from 'react';
import { IUser } from '../../mocks/users';
import { getRandomNum } from '../../utils/randomNum';
import FriendStatus from '../../UI/FriendStatus';
import { getActivity } from '../../utils/user-activity';

export default function FriendProfile({
  name,
  status,
  avatar,
  activity,
}: IUser) {
  const friendTag = getRandomNum(1, 9999);
  return (
    <div className="friend__profile_wrapper">
      <div className="friend__profile">
        <div
          className="friend__profile_avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        >
          <FriendStatus {...{ status }} />
        </div>
        <div className="friend__profile_card">

          <div className="friend__profile_name-block">
            <h2 className="friend__profile_name">
              {name}
              <span>#{friendTag}</span>
            </h2>
            <div className="friend__profile_status">{getActivity(activity)}</div>
          </div>

          <div className="friend__profile_member">
            <h3 className="friend__profile_member_title">
              discord member since
            </h3>
            <p className="friend__profile_member_descr">Dec 06, 2019</p>
          </div>

          <div className="friend__profile_notes">
            <h3 className="friend__profile_notes_title">
              note
            </h3>
            <textarea className="friend__profile_notes_input" placeholder='Click to add a note'>

            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
