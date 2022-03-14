import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const settings = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const warning = text => {
  toast.error(text, settings);
};

const success = text => {
  toast.success(text, settings);
};

const notification = {
  warning,
  success,
};

export default notification;
