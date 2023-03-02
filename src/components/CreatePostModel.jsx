import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import {
	BsFillCaretDownFill,
	BsCardImage,
	BsEmojiSmile,
	BsFillPersonFill,
	BsFlagFill,
	BsThreeDots,
	BsFillPersonPlusFill,
} from "react-icons/bs";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiPhotograph } from "react-icons/hi";
import { IoMdPeople } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { MdEmojiEmotions } from "react-icons/md";
const CreatePostModel = ({ handleCloseModal }) => {
	const arr = [
		"#FF6633",
		"#FFB399",
		"#FF33FF",
		"#FFFF99",
		"#00B3E6",
		"#E6B333",
		"#3366E6",
		"#999966",
		"#99FF99",
		"#B34D4D",
		"#80B300",
		"#809900",
		"#E6B3B3",
		"#6680B3",
		"#66991A",
	];

	return (
		<>
			<main className="fixed inset-0 bg-[#f3f3f5] bg-opacity-10 backdrop-blur-[1px] z-10 hidden lg:block">
				<section className="w-[35%] mx-auto rounded-md mt-[20vh] bg-white shadow-md  border border-gray-300 pb-4">
					<article className=" py-3 flex justify-between items-center px-3 border-b border-gray-300">
						<div className="" />
						<h3 className="font-semibold  text-lg ">Create post</h3>
						<div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full" onClick={handleCloseModal}>
							<AiOutlineClose size={26} className="cursor-pointer" />
						</div>
					</article>
					<article className="py-2 mx-2 ">
						<aside className="flex gap-x-3 items-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
								alt="profile"
								className="w-10 aspect-square rounded-full"
							/>
							<div className="flex flex-col">
								<p className="font-semibold ">Sirish Chalise</p>
								<div className="flex text-gray-500 bg-gray-200 justify-center gap-x-1 py-1 rounded">
									<FaUserFriends />
									<h5>Friends</h5>
									<BsFillCaretDownFill />
								</div>
							</div>
						</aside>
					</article>
					<article className="mx-2">
						<textarea
							id="message"
							rows="4"
							placeholder="What's on your mind Sirish ?"
							className="w-full focus:outline-none text-lg resize-none hide"
						/>
					</article>
					<article className="mx-4 text-gray-500 flex justify-between items-center py-2 my-2">
						<BsCardImage size={24} className="cursor-pointer" />
						<BsEmojiSmile size={24} className="cursor-pointer" />
					</article>
					<article className="border border-gray-300 rounded-md px-2 py-3 mx-2 flex justify-between items-center">
						<p>Add your post</p>
						<aside className="flex items-center gap-x-1">
							<IoMdPhotos size={24} className="text-green-500" />
							<BsFillPersonFill size={24} className="text-blue-500" />
							<BsEmojiSmile size={24} className="text-orange-500" />
							<IoLocationSharp size={24} className="text-rose-500" />
							<BsFlagFill size={24} className="text-cyan-500" />
							<BsThreeDots size={24} className="text-gray-500" />
						</aside>
					</article>
					<article className="mt-3 mx-2">
						<button className="py-1 text-center text-white bg-blue-500 rounded-md w-full">Post</button>
					</article>
				</section>
			</main>
			<main className="block lg:hidden">
				<section className="fixed left-0 top-0 bottom-0 right-0 bg-white z-10">
					<article className="flex justify-between items-center py-2 px-3 border-t border-b text-gray-600">
						<aside className="flex items-center gap-x-3 ">
							<HiOutlineArrowNarrowLeft size={24} />
							<h4>Create Post</h4>
						</aside>
						<h4 className="text-blue-500">Post</h4>
					</article>
					<article className="border-b py-2 px-2">
						<aside className="flex gap-x-3">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
								alt="profile"
								className="w-12 aspect-square rounded-full"
							/>
							<div className="flex flex-col text-gray-600">
								<p className="font-semibold ">Sirish Chalise</p>
								<div className="flex items-center text-gray-400">
									<IoMdPeople />
									<h6>Share with:</h6>
									<h6>your friends</h6>
									<BsFillCaretDownFill />
								</div>
							</div>
						</aside>
					</article>
					<article className="w-full border">
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							className="w-full resize-none focus:outline-none px-2  my-1"
							placeholder="What's on your mind"
						/>

						<aside className="flex gap-x-2 py-1 px-2">
							{arr.map((item, i) => (
								<div className="w-10 aspect-square rounded-md mb-2" style={{ backgroundColor: `${item}` }} key={i} />
							))}
						</aside>
					</article>
					<article className="mt-2 last:mx-2">
						<aside className=" ml-6">
							<div className="flex items-center gap-x-2 py-2 ">
								<HiPhotograph size={24} className="text-pink-500" />
								<p>Photos</p>
							</div>
							<div className="flex items-center gap-x-2 py-2 border-t">
								<BsFillPersonPlusFill size={24} className="text-blue-500" />
								<p>Tag Friends</p>
							</div>
							<div className="flex items-center gap-x-2 py-2 border-t">
								<GoLocation size={24} className="text-rose-500" />
								<p>Location</p>
							</div>
							<div className="flex items-center gap-x-2 py-2 border-y">
								<MdEmojiEmotions size={24} className="text-yellow-500" />
								<p>Feeling/activity</p>
							</div>
						</aside>
						<button className="w-full bg-blue-500 text-white capitalize font-bold py-2 mt-2 rounded">Post</button>
					</article>
				</section>
			</main>
		</>
	);
};

export default CreatePostModel;
