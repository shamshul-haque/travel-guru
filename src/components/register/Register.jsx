import { Link } from "react-router-dom";
import SocialLogIn from "../logIn/socialLogIn";

const Register = () => {
  return (
    <div className="mt-5">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm border rounded p-5">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <form className="mt-5 space-y-5">
            <div className="form-control">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
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
            <div className="form-control">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="outline-0 border-b py-2 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <button className="bg-[#F9A51A] p-2 rounded font-semibold">
                Create an account
              </button>
            </div>
          </form>
          <p className="text-sm text-center pt-5">
            <span>Already Have An Account?</span>{" "}
            <Link
              to="/login"
              className="text-yellow-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <SocialLogIn />
    </div>
  );
};

export default Register;
