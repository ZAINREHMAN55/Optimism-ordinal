import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { NumberInput } from '@mantine/core';

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
        <div className='flex'>
          <div>Tick</div>
          <div></div>
        </div>
        <p>This is the Quick List content.</p>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button onClick={onClose}>Close</Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default QuickListPopup;
