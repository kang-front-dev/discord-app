import React from 'react';

import { IServer } from '../../mocks/servers';

export default function ServerCard({ id, avatar, name }: IServer) {
  return (
    <div className="server__card" style={{ backgroundImage: `url(${avatar})` }}></div>
  );
}
