import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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
        <h1>Listing Confirmation
        </h1>
      </StyledDialogTitle>
      <StyledDialogContent>
        <div className='flex gap-96'>
          <div className='flex flex-col space-y-0.5'>
            <span className='p-2'>Tick</span>
            <span className='p-2'>Tick</span>
            <span className='p-2'>Tick</span>
          </div>
          <div className='flex flex-col space-y-6'>
            <Select labelId="label" id="select" value="20" className='text-white'>
              <MenuItem value="10">nano</MenuItem>
              <MenuItem value="20">bold20</MenuItem>
              <MenuItem value="20">dedust.io</MenuItem>
              <MenuItem value="20">grem</MenuItem>
            </Select>
            <p>0 nano</p>
            </div>
        </div>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button onClick={onClose}>Close</Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default QuickListPopup;