import React from 'react';
import { IUser } from '../../mocks/users';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function DMChat({ id, name, status, avatar }: IUser) {
  return (
    <div className="dm-chat_wrapper">
      <div className="dm-chat">
        <div className="dm-chat_message">
          <div
            className="dm-chat_friend_avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <h2 className="dm-chat_friend_name">{name}</h2>
          <p className="dm-chat_friend_descr">
            This is the beginning of your direct message history with{' '}
            <span>@{name}</span>
          </p>
          <div className="dm-chat_friend_wampus">
            <img
              src="https://media.tenor.com/EU5PsyIFwRUAAAAi/wumpus-discord.gif"
              alt=""
            />
            <button className="dm-chat_friend_btn">Wave to {name}</button>
          </div>
        </div>
      </div>
      <div className="dm-chat_input_block">
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <input
          type="text"
          className="dm-chat_input"
          placeholder={`Message @${name}`}
        />
        <IconButton>
          <CardGiftcardIcon />
        </IconButton>
        <IconButton>
          <GifBoxIcon />
        </IconButton>
        <IconButton>
          <InsertDriveFileIcon />
        </IconButton>
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
      </div>
    </div>
  );
}
