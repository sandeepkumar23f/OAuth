export default function Login() {
  return (
    <div className="h-screen bg-white flex items-center justify-center ">
      <div className="bg-white w-11/12 max-w-md sm:bg-green-200 sm:w-full p-6 rounded h-screen">
 <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /><br /><br /><br /><br />
        <h1 className="text-center text-3xl">Login to OAuth</h1>
        <form action="">
          {/* for email input */}
          <div >
            <label htmlFor="email" className="block mb-2 text-2xl">email</label>
            <input
            type="email"
            id="email"
            placeholder="enter email"
            className="text-black bg-white border to-black w-full h-10"
            />
          </div>
          <br />
          {/* for password input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-2xl">Password</label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              className="text-black bg-white border to-black w-full h-10"
            />
          </div>
          <br />
          <div className="flex items-center justify-center mt-4">
            <button className="w-64 py-2 rounded transition bg-green-600 h-10">
              Sign In
            </button>
            <br />
            <div className="flex items-center justify-center">
            <button className="flex items-center justify-center text-center cursor-pointer text-xl text-blue-800">Dont have an account? SignUp</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
