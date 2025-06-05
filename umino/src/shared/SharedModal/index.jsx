import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const sizes = {
  xs: 400,
  sm: 500,
  lg: 600,
  xl: 800,
  xxl: 1000,
  full: '100%',
};

export const SharedModal = ({ children, open, onClose, size = 'sm' }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sizes[size] || sizes.sm,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 12,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
