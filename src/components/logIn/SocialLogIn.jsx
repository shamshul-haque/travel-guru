import fb from "../../assets/icons/fb.png";
import google from "../../assets/icons/google.png";

const SocialLogIn = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1" />
        <span className="text-center">Or</span>
        <hr className="flex-1" />
      </div>
      <div className="max-w-xs mx-auto space-y-3">
        <button className="w-full border p-2 rounded-full font-semibold mx-auto flex items-center">
          <img src={fb} alt="facebook" className="w-5" />
          <span className="mx-auto">Continue with Facebook</span>
        </button>
        <button className="w-full border p-2 rounded-full font-semibold mx-auto flex items-center">
          <img src={google} alt="google" className="w-5" />
          <span className="mx-auto">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
