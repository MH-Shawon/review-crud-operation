import { useState } from "react";
import styles from "./SignIn.module.css"; // Import the CSS module
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    

    return (
        <div className={styles.bg}>
            <div className={styles.box}>
                <div className={styles.flipCardInner}>
                    <div className={styles.boxLogin}>
                        <ul>
                            <form className={styles.registration} action="" method="get">
                                <h1 className="mb-6 text-4xl font-black text-white">LOGIN</h1>
                                <div className="relative email-login">
                                    <input
                                        className={styles.inpt}
                                        type="email"
                                        name="email"
                                        id=""
                                        placeholder="Email "
                                        required
                                    />
                                    <i className="fa fa-envelope"></i>
                                    <FaEnvelope className="absolute top-[35px] text-white right-6" />
                                </div>

                                <div className="relative password-login">
                                    <input
                                        className={styles.inpt}
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password-login"
                                        placeholder="Password"
                                        required
                                    />
                                    <p className="absolute top-[35px] text-white right-6">
                                        {showPassword ? (
                                            <FaEyeSlash
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            />
                                        ) : (
                                            <FaEye
                                                className="text-[#00FFFF]"
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            />
                                        )}
                                    </p>
                                </div>

                                <div className={styles.forget}>
                                    <input type="checkbox" name="checkbox1" id="checkbox" />
                                    <label htmlFor="checkbox">Remember me</label>
                                    <a href="#">Forget Password?</a>
                                </div>
                                <button type="submit" className={styles.btn}>
                                    LOGIN
                                </button>
                            </form>
                            <div className={styles.registerLink}>
                                <p>
                                    Don't have an account? <Link to="/signUp">Sign Up</Link>
                                </p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
