import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import styles from "./SignUp.module.css";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import SocialBtn from "../../../components/SocialBtn/SocialBtn";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setRegisterError] = useState(false);
  const { register, updateUser } = useContext(AuthContext);

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
      setRegisterError(
        " Password must be at least 6 characters, include one lowercase letter, one uppercase letter, and one special character."
      );
    } else {
      setRegisterError("");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    register(email, password).then((result) => {
      setRegisterError("");
      const loggedUser = result.user;
      console.log(loggedUser);
      return updateUser(name);
    });
  };

  return (
    <div className={styles.bg}>
      <div className={styles.box}>
        <div className={styles.flipCardInner}>
          <div className={styles.boxLogin}>
            <ul>
              <form onSubmit={handleSignIn} action="" method="get">
                <h1 className="mb-6 text-4xl font-black text-white">SIGN UP</h1>
                <div className={`relative ${styles.userSignup}`}>
                  <input
                    className={styles.inpt}
                    type="text"
                    name="name"
                    id="username"
                    placeholder="User Name"
                  />
                  <FaUser
                    className={`absolute top-[25px] text-white right-6`}
                  />
                </div>

                <div className={`relative ${styles.emailLogin}`}>
                  <input
                    className={styles.inpt}
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email "
                    required
                  />
                  <FaEnvelope
                    className={`absolute top-[25px] text-white right-6`}
                  />
                </div>

                <div className={`relative ${styles.passwordLogin}`}>
                  <input
                    className={styles.inpt}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password-login"
                    placeholder="Password"
                    required
                    onChange={handlePasswordChange}
                  />
                  <p className={`absolute top-[25px] text-white right-6`}>
                    {showPassword ? (
                      <FaEyeSlash
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    ) : (
                      <FaEye
                        className={`text-[#00FFFF]`}
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    )}
                  </p>
                </div>

                <button type="submit" className={styles.btn}>
                  SIGN UP
                </button>
                <p className="text-sm text-red-600">{error}</p>
              </form>
              <div className={styles.registerLink}>
                <p>
                  Don't have an account? <Link to="/signIn">Log In</Link>
                </p>
              </div>
              <div>
                <h4 className="text-center text-white">Or sign in with</h4>
                <span className="flex items-center justify-center">
                  <SocialBtn />
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
