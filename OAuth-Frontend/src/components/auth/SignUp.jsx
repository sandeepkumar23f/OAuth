export default function SignUp() {
  return (
    <>
      <div className="h-screen bg-white flex  justify-center ">
        <div className="w-11/12 max-w-md rounded h-screen p-6 sm:bg-green-200 sm:w-full">
          {" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-4xl font-bold text-center ">
            SignUp to OAuth
          </h1>{" "}
          <br />
          {/* for name field */}
          <div>
            <label htmlFor="name" className="block text-2xl cursor-pointer">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="w-full h-10 bg-white text-black border to-black"
            />
          </div>
          {/* for email field */}
          <div>
            <label htmlFor="email" className="block text-2xl cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full h-10 bg-white text-black border to-black"
            />
          </div>
          {/* for password field  */}
          <div>
            <label htmlFor="password" className="block text-2xl cursor-pointer">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full h-10 bg-white text-black border to-black"
            />
          </div>
         
          
          {/* button  */} <br />
          <div className="flex items-center justify-center ">
            <button className="w-64 rounded transition bg-orange-400 h-10 py-2 cursor-pointer">SignUp</button>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center text-center cursor-pointer text-xl text-blue-800">Have an account Login?</button>
          </div>
        </div>
      </div>
    </>
  );
}
