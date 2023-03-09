import React, { useState } from 'react';
import MainNav from './MainNav/MainNav';

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

export default function Main() {
  const [toggleValue, setToggleValue] = useState<string | null>('home');

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      console.log(newValue);

      setToggleValue(newValue);
    }
  };

  return (
    <div className="main">
      <MainNav handler={handleToggle} toggleValue={toggleValue} />
    </div>
  );
}
