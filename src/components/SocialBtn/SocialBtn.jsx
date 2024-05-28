import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialBtn = () => {
  const { googleLogin } = useAuth();
  const handleGoogleSignUp = () => {
    googleLogin()
    .then((res) => {
    //   const userInfo = {
    //     email: res?.user?.email,
    //     name: res?.user?.displayName,
    //   };
    });
  };
  return (
    <div className="flex gap-8 mt-5">
      <button
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  "
        type="button"
      >
        <span className="flex items-center justify-center text-xl">
          <i className="text-center text-white">
            <FaFacebookF />
          </i>
        </span>
      </button>
      <button
        onClick={handleGoogleSignUp}
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2   text-xl  flex items-center justify-center"
        type="button"
      >
              <FaGoogle className="text-white" />
      </button>
      <button
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  "
        type="button"
      >
        <span className="flex items-center justify-center text-xl">
                  <i className="text-center text-white">
            <FaGithub />
          </i>
        </span>
      </button>
    </div>
  );
};
export default SocialBtn;
