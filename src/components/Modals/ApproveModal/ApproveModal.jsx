import { useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Overlay from '../Overlay';
import ControlButtonsContainer from '../../ControlButtonsContainer';
import Button from '../../Button';
import Portal from '../../Portal';
import {
  ApproveModalWindow,
  SlyledCloseIconButton,
} from './ApproveModal.styled';

function ApproveModal({ title, onSuccess, onCancel }) {
  useEffect(() => {
    const closingByEsc = e => {
      if (e.code === 'Escape') onCancel();
    };

    window.addEventListener('keydown', closingByEsc);

    return () => {
      window.removeEventListener('keydown', onCancel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closingByClick = e => {
    if (e.currentTarget === e.target) onCancel();
  };

  return (
    <Portal id="root">
      <Overlay handleClose={closingByClick}>
        <ApproveModalWindow>
          <SlyledCloseIconButton onClick={onCancel}>
            <CloseIcon />
          </SlyledCloseIconButton>
          <div>{title}</div>
          <ControlButtonsContainer>
            <Button name="confirmation" handleAction={onSuccess}>
              Да
            </Button>
            <Button name="confirmation" handleAction={onCancel}>
              Нет
            </Button>
          </ControlButtonsContainer>
        </ApproveModalWindow>
      </Overlay>
    </Portal>
  );
}

ApproveModal.propTypes = {
  title: PropTypes.string,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ApproveModal;
