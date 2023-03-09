import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';

export const MyTooltip = styled(
  ({ title, children, placement }: TooltipProps) => (
    <Tooltip
      title={title}
      arrow
      enterDelay={0}
      placement={placement}
      className="sidebar__tooltip"
      disableInteractive={true}
      children={children}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'common.white',
            '& .MuiTooltip-arrow': {
              color: 'common.white',
            },
            color: '#313338',
            fontSize: '14px',
            padding: '8px 12px',
            boxShadow: '0px 7px 7px 7px rgba(0,0,0,0.03)',
            borderRadius: '5px',
          },
        },
      }}
    />
  )
)(`
    color: lightblue;
    background-color: green;
    font-size: 1.5em;
`);

export const MySmallTooltip = styled(
  ({ title, children, placement }: TooltipProps) => (
    <Tooltip
      title={title}
      arrow
      enterDelay={0}
      placement={placement}
      className="sidebar__tooltip"
      disableInteractive={true}
      children={children}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'common.white',
            '& .MuiTooltip-arrow': {
              color: 'common.white',
            },
            color: '#313338',
            fontSize: '14px',
            fontWeight: '400',
            padding: '8px 12px',
            boxShadow: '0px 7px 7px 7px rgba(0,0,0,0.03)',
            borderRadius: '5px',
          },
        },
      }}
    />
  )
)(`
    color: lightblue;
    background-color: green;
    font-size: 1.5em;
`);