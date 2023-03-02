import React from "react";
import { AiFillQuestionCircle, AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
const Register = ({ closeSignUp }) => {
	return (
		<main className="fixed inset-0 bg-[#f3f3f5] bg-opacity-10 backdrop-blur-[1px] z-10 flex justify-center items-center">
			<section className="bg-white w-[80%] md:w-[50%] lg:w-[30%] mx-auto border rounded-md  pb-3 pt-1 shadow-md">
				<article className="flex justify-between items-start border-b px-4 py-2">
					<aside className="">
						<h1 className="font-semibold">Sign Up</h1>
						<h6>Its quick and easy</h6>
					</aside>
					<AiOutlineClose className=" cursor-pointer" size={26} onClick={closeSignUp} />
				</article>
				<article className="px-4 py-2">
					<form className="flex flex-col gap-y-3">
						<aside className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-2">
							<input
								type="text"
								name=""
								id=""
								placeholder="first Name"
								className="bg-gray-50 py-2 rounded-md px-2 border border-gray-500"
							/>

							<input
								type="text"
								name=""
								id=""
								placeholder="Last Name"
								className="bg-gray-50 py-2 rounded-md px-2 border border-gray-500"
							/>
						</aside>
						<input
							type="text"
							name=""
							id=""
							placeholder="Mobile Number or Email"
							className="bg-gray-50 py-2 rounded-md px-2 border border-gray-500 w-full"
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="New Password"
							className="bg-gray-50 py-2 rounded-md px-2 border border-gray-500 w-full"
						/>
						<aside className="flex flex-col">
							<div className="flex items-center mb-1">
								<p>Birthday</p>

								<AiFillQuestionCircle />
							</div>
							<div className="grid grid-cols-3 gap-x-3">
								<div className="rounded-md border py-2 px-3 border-gray-500 flex justify-between items-center">
									<h6>Feb</h6>
									<BsChevronDown />
								</div>
								<div className="rounded-md border py-2 px-3 border-gray-500 flex justify-between items-center">
									<h6>27</h6>
									<BsChevronDown />
								</div>
								<div className="rounded-md border py-2 px-3 border-gray-500 flex justify-between items-center">
									<h6>2023</h6>
									<BsChevronDown />
								</div>
							</div>
						</aside>
						<aside className="flex flex-col">
							<div className="flex items-center mb-1">
								<p>Gender</p>

								<AiFillQuestionCircle />
							</div>
							<div className="grid grid-cols-3 gap-x-3">
								<div className="rounded-md border py-2 px-3 border-gray-500 flex justify-between items-center">
									<h6>Male</h6>
									<input type="radio" />
								</div>
								<div className="rounded-md border py-2 px-3 border-gray-500 flex justify-between items-center">
									<h6>Female</h6>

									<input type="radio" />
								</div>
								<div className="rounded-md border py-2 px-3 border-gray-500 flex justify-between items-center">
									<h6>Costum</h6>

									<input type="radio" />
								</div>
							</div>
						</aside>
						<aside className="px-4 py-2 text-gray-500">
							<h6 className="text-xs mb-2">
								People who use our service may have uploaded your contact information to Facebook. Learn more.
							</h6>
							<h6 className="text-xs">
								By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS
								Notifications from us and can opt out any time.
							</h6>
						</aside>
						<button className="rounded-lg w-3/4 md:w-1/2 mt-5 mx-auto text-white font-bold bg-green-800 py-2">
							Sign Up
						</button>
					</form>
				</article>
			</section>
		</main>
	);
};

export default Register;
