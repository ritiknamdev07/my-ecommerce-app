import { useState, useEffect } from "react";
import style from "./login.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isUserRegister, setIsUSerRegister] = useState(true)

  const userEmailRef = useRef({})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

 const handleChange = () => {
    console.log(userEmailRef.current.email.value)
 }

 const setRef= (name) => (element) => {
  userEmailRef.current[name] = element;
 }
  

  return (
    <>
      <div className={style.container}>
        <div className={style.leftDiv} >
        <div className={style.infoContainer} >
          <h2>{isUserRegister?"Login":"Looks like you're new here!"}</h2>
          <p>{isUserRegister?"Get access to your Orders, Wishlist and Recommendations":"Sign up with your mobile number to get started"}</p>
          </div>
          <div className={style.imgDiv}>
            <img src="../loginImg/login_img_c4a81e.png" alt="img" />
          </div>
        </div>
        <div className={style.rightDiv}>
          <div className={style.formDiv}>
            <form onSubmit={handleSubmit} >
              <div className={style.inputDiv}>
                <input placeholder="Enter Email" ref={setRef("email")} onChange={handleChange} type="text" />
                <input placeholder="Enter Password" type="text" />
                {!isUserRegister&&<input placeholder="Conform Password" />}
                
              </div>

              <div className={style.buttonDiv}>
              <Link to={"/"}>
                <button type="submit" >{isUserRegister?"Login":"Sign up "}</button>
                </Link>
              </div>

              <div className={style.createAccountDiv} onClick={()=>setIsUSerRegister(!isUserRegister)} >
               {isUserRegister?<a>New to Flipkart? Create an account</a>: <a>Existing User? Log in</a>} 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
