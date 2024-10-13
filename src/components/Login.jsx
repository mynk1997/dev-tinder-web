import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <label className="form-control w-full max-w-xs my-4">
            <div className="label">
              <span className="label-text">Email Id</span>
              {/* <span className="label-text-alt">Top Right label</span> */}
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              {/* <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span> */}
            </div>
          </label>

          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Password</span>
              {/* <span className="label-text-alt">Top Right label</span> */}
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              {/* <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span> */}
            </div>
          </label>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
