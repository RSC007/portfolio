import { toast } from "react-toastify";

export const useMessages = () => {
  const onSuccessMessage = (message = "") =>
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  const onErroMessage = (message = "") =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

  return {
    onErroMessage,
    onSuccessMessage,
  };
};
