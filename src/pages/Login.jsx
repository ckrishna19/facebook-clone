import React, { useState } from "react";
import Register from "./Register";

const Login = () => {
	const [signUp, setSignUp] = useState(false);
	const showSignUp = () => setSignUp(true);
	const closeSignUp = () => setSignUp(false);
	return (
		<>
			<main className="h-screen bg-gray-200 w-screen ">
				<section className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-center items-center h-screen lg:gap-x-10">
					<article className="ml-4 md:ml-0">
						<h1 className="text-blue-500 font-semibold text-[50px] md:text-[80px] mb-6 tracking-wider">Facebook</h1>
						<h2 className="font-semibold text-[20px] md:text-[35px] my-3">Connect with friends and the world </h2>
						<h2 className="font-semibold text-[20px] md:text-[35px] tracking-wide">around you on Facebook.</h2>
					</article>
					<article className="bg-white lg:w-[25vw] md:w-[70vw] w-[96vw] shadow-md rounded-md border px-4 py-5 relative">
						<aside className="flex flex-col gap-y-3 border-b pb-5">
							<input
								type="text"
								placeholder="Email or Phone Number"
								className="border py-3 px-2 rounded-lg border-gray-400"
							/>

							<input type="password" placeholder="password" className="border py-3 px-2 rounded-lg border-gray-400" />
							<button className="rounded-lg w-full text-white font-bold bg-blue-500 py-3">Log In</button>
							<button className="text-blue-500">Forget Password</button>
						</aside>
						<aside className="flex mb-3">
							<button
								className="rounded-lg w-3/4 md:w-1/2 mt-5 mx-auto text-white font-bold bg-green-600 py-3"
								onClick={showSignUp}
							>
								Create new accounnt
							</button>
						</aside>
						<p className=" absolute -bottom-8 left-7 text-sm md:text-base">
							<strong className="cursor-pointer">Create a page</strong> for a celebrity, brand or business.
						</p>
					</article>
				</section>
				{signUp && <Register closeSignUp={closeSignUp} />}
			</main>
		</>
	);
};

export default Login;
