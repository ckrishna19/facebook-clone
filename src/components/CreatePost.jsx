import React from "react";
import { BsFillCameraVideoFill, BsEmojiLaughingFill, BsFileImage } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
const CreatePost = ({ handleShowModal }) => {
	return (
		<>
			<main className="bg-white rounded-md mt-3 shadow border border-gray-300 hidden lg:block">
				<section className="mx-4 my-3 border-b">
					<article onClick={handleShowModal} className="flex h-10 gap-x-2 mb-4">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
							alt="profile"
							className="h-full aspect-square rounded-full"
						/>
						<button className="flex-1 h-full bg-gray-100 text-gray-500 text-base text-left pl-3 rounded-full">
							What's on your mind, Sirish
						</button>
					</article>
				</section>
				<section className="mx-4 my-3 grid grid-cols-3 gap-x-5">
					<article className="flex justify-center items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-md py-2 grid-cols-1">
						<BsFillCameraVideoFill size={24} className="text-red-500" />
						<p className="font-semibold ">Live Video</p>
					</article>
					<article className="flex justify-center items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-md py-2 grid-cols-1">
						<IoMdPhotos size={24} className="text-green-500" />
						<p className="font-semibold ">Photo/Video</p>
					</article>
					<article className="flex justify-center items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-md py-2 grid-cols-1">
						<BsEmojiLaughingFill size={24} className="text-yellow-500" />
						<p className="font-semibold ">Feeling/Activity</p>
					</article>
				</section>
			</main>
			<main className="block lg:hidden mt-1 md:mt-3">
				<section role="button" onClick={handleShowModal} className="bg-white border rounded py-2 ">
					<article className="flex items-center gap-x-2 mx-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
							alt="profile"
							className="w-10 aspect-square rounded-full"
						/>
						<aside className="border border-gray-500 rounded-full w-full py-1 ">
							<p className="ml-6">What's on Your mind</p>
						</aside>
						<aside className="flex flex-col items-center">
							<BsFileImage size={24} />
							<h6>photos</h6>
						</aside>
					</article>
				</section>
			</main>
		</>
	);
};

export default CreatePost;
