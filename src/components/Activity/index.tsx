import React from 'react';
import { users } from '../../mocks/users';
import FriendCard from '../FriendCard';



export default function Activity() {
  return (
    <div className="activity">
      <h3 className="activity__title">Active Now</h3>
      <div className="activity__list">
        {users
          .filter((user) => {
            if (Array.isArray(user.activity)) {
              return true;
            }
            return false;
          })
          .map((user) => {
            return (
              <div key={user.id} className="activity__card">
                <FriendCard {...user} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
