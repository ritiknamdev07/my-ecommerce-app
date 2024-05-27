
import style from "./loadingSpinner.module.css"

const LoadingSpinner = () => (
  <div className={style.loadingSpinner}>
    <div className={style.spinner}></div>
  </div>
);

export default LoadingSpinner;
