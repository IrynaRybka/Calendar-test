import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h2 className="text-center font-bold p-2">Sign in to your account</h2>
        <p>Already have an account?
        <Link to="/" className="underline">
          Login
        </Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
