import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './Component.css'

const StyledDialog = styled(Dialog)({
  '.MuiDialog-paper': {
    background: 'rgb(23, 26, 31)',
    color: '#fff',
    borderRadius: '16px',
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  '.MuiTypography-root': {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#fff',
  },
});

const StyledDialogContent = styled(DialogContent)({
  '.MuiTypography-root': {
    fontSize: '1rem',
    color: '#fff',
  },
});

const StyledDialogActions = styled(DialogActions)({
  '.MuiButton-root': {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(107, 112, 245)',
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: '4000px',
    padding: '10px 16px',
    margin: '24px 0px 0px',
    outline: '0px',
    border: '0px',
    fontSize: '1rem',
  },
});


interface QuickListPopupProps {
  open: boolean;
  onClose: () => void;
}

const QuickListPopup: React.FC<QuickListPopupProps> = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>
        <div className='flex space-x-[65%] ...'>
          <h1>Listing Confirmation
          </h1>
          <img className='cursor-pointer' onClick={onClose} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAm0lEQVR4nO2UQQ6DIBBFuURJvf9J6qYptZuy8DivIWWjEf2D2HThX5E4/z9gBp079XcCemAAvMHjgRdwU4oDX0UFksNTbdJDAVyAdzaMQGeovW4CVAi14QqEveFrEFqFF5oYZ2t50iwnabNzAdC1CveHXdFSQy3vxBzuyt9sEGUUqYVY5pwaCPC0NJHpEAQFcK/8XQ/Jq3pO/U4fS5Xnx68CVG0AAAAASUVORK5CYII="></img>
        </div>
      </StyledDialogTitle>
      <StyledDialogContent>
        <div className='flex gap-96'>
          <div className='flex flex-col '>
            <span className='p-3'>Tick</span>
            <span className='p-3 w-60 pt-4'>Available Balance</span>
            <span className='p-3 pt-4'>List Amount</span>
            <span className='p-3 pt-6'>Unit Price</span>
            <span className='p-3 pt-6'>Total Value</span>
            <span className='p-3 pt-6'>Service Fee</span>
            <span className='p-3 pt-6'>Receive <br /> <span className='text-sm text-gray-400'>1TON ≈ $2.26
            </span></span>
          </div>
          <div className='flex flex-col space-y-6 '>
            <Select labelId="label" id="select" value="20" className='text-white border-gray-500 border w-80 h-14 -ml-72'>
              <MenuItem value="10">nano</MenuItem>
              <MenuItem value="20">bold20</MenuItem>
              <MenuItem value="20">dedust.io</MenuItem>
              <MenuItem value="20">grem</MenuItem>
            </Select>
            <span className='-ml-10'>0 nano</span>
            <Select labelId="label" id="select" value="20" className='text-white border-gray-500 border  w-80 h-14 -ml-72'>
              <MenuItem value="10">nano</MenuItem>
              <MenuItem value="20">bold20</MenuItem>
              <MenuItem value="20">dedust.io</MenuItem>
              <MenuItem value="20">grem</MenuItem>
            </Select>
            <Select labelId="label" id="select" value="20" className='text-white border-gray-500 border  w-80 h-14 -ml-72'>
              <MenuItem value="10">nano</MenuItem>
              <MenuItem value="20">bold20</MenuItem>
              <MenuItem value="20">dedust.io</MenuItem>
              <MenuItem value="20">grem</MenuItem>
            </Select>
            <span className='-ml-10 pt-1'>- TON</span>
            <span className='-ml-10 pt-1'>- TON</span>
            <span className='-ml-10 pt-1'>- TON</span>
          </div>
        </div>
      </StyledDialogContent>
      <StyledDialogActions>
        <div className=" pb-4">
          <Button className='w-[44rem] items-center' onClick={onClose}>Connect wallet</Button>
        </div>

      </StyledDialogActions>
    </StyledDialog>
  );
};

export default QuickListPopup;