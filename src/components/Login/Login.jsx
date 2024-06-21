import style from "./login.module.css";

const Login = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.leftDiv} >
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <div className={style.imgDiv}>
            <img src="../loginImg/login_img_c4a81e.png" alt="img" />
          </div>
        </div>
        <div className={style.rightDiv}>
          <div className={style.formDiv}>
            <form >
              <div className={style.inputDiv}>
                <input placeholder="Enter Email" type="text" />
                <input placeholder="Enter Password" type="text" />
                
              </div>

              <div className={style.buttonDiv}>
                <button>Login</button>
              </div>

              <div className={style.createAccountDiv} >
                <a>New to Flipkart? Create an account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
