import { Notify } from "notiflix/build/notiflix-notify-aio";

const showError = (text: string) => Notify.failure(text);

const showSuccess = (text: string) => Notify.success(text);

const showWarning = (text: string) => Notify.warning(text);

const notices = {
  showError,
  showSuccess,
  showWarning,
};
export default notices;
