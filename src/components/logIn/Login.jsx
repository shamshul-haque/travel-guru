import { Link } from "react-router-dom";
import SocialLogIn from "./socialLogIn";

const Login = () => {
  return (
    <div className="my-5 mx-5 md:mx-10 lg:mx-20">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <form className="mt-5 space-y-5">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="flex gap-1">
                <input type="checkbox" name="terms" required />
                <span className="text-sm">Remember Me</span>
              </p>
              <Link to="#" className="text-sm text-yellow-500 hover:underline">
                Forgot Password
              </Link>
            </div>
            <div className="form-control">
              <button className="bg-[#F9A51A] p-2 rounded font-semibold">
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>{`Don't Have Any Account?`}</span>{" "}
            <Link
              to="/register"
              className="text-yellow-500 hover:underline font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <SocialLogIn />
    </div>
  );
};

export default Login;
