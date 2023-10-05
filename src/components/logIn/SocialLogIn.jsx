import fb from "../../assets/icons/fb.png";
import google from "../../assets/icons/google.png";

const SocialLogIn = () => {
  return (
    <div className="my-5 space-y-3">
      <button className="border p-2 rounded-full font-semibold mx-auto flex items-center">
        <img src={fb} alt="facebook" className="w-5" />
        <span className="px-10">Continue with Facebook</span>
      </button>
      <button className="border p-2 rounded-full font-semibold mx-auto flex items-center">
        <img src={google} alt="google" className="w-5" />
        <span className="px-12">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogIn;
