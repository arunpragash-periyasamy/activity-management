import { Bounce, toast, ToastPosition } from "react-toastify";

export const notify = (message: string, type: string, autoClose:number = 5000) => {
  const options = {
    position: "top-right" as ToastPosition,
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Bounce,
  };
  switch (type) {
    case WARN:
      toast.warn(message, options);
      break;
    case ERROR:
      toast.error(message, options);
      break;
    case INFO:
      toast.info(message, options);
      break;
    case SUCCESS:
      toast.success(message, options);
      break;
    default:
      toast(message, options);
  }
};
export const SUCCESS = "success";
export const ERROR = "error";
export const INFO = "info";
export const WARN = "warn";
