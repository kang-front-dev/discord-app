import React from 'react';


interface ChannelProps {
  id: number;
  avatar: string;
  name: string;
}

export default function Channel({ id, avatar, name }: ChannelProps) {
  return (
    <div
      className='channel'
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}
