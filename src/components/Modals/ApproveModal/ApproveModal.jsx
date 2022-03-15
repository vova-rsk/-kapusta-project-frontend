import { useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Overlay from '../Overlay';
import ControlButtonsContainer from '../../ControlButtonsContainer';
import Button from '../../Button';
import {
  ApproveModalWindow,
  SlyledCloseIconButton,
} from './ApproveModal.styled';

function ApproveModal({ onSuccess, onCancel, children }) {
  useEffect(() => {
    const closingByEsc = e => {
      if (e.code === 'Escape') onCancel();
    };

    window.addEventListener('keydown', closingByEsc);

    return () => {
      window.removeEventListener('keydown', onCancel);
    };
  }, []);

  const closingByClick = e => {
    if (e.currentTarget === e.target) onCancel();
  };

  return (
    <Overlay handleClose={closingByClick}>
      <ApproveModalWindow>
        <SlyledCloseIconButton onClick={onCancel}>
          <CloseIcon />
        </SlyledCloseIconButton>
        <div>{children}</div>
        <ControlButtonsContainer>
          <Button name="confirmation" handleAction={onSuccess}>
            Да
          </Button>
          <Button name="confirmation" handleAction={onCancel}>
            Нет
          </Button>
        </ControlButtonsContainer>
        <Button name="balance">Да</Button>
      </ApproveModalWindow>
    </Overlay>
  );
}

ApproveModal.propTypes = {
  children: PropTypes.node,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ApproveModal;
