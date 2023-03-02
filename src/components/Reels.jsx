import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import Stories from "./Stories";
const Reels = () => {
	return (
		<main className="bg-white md:rounded-md py-2 shadow border border-gray-300 md:mt-4 mt-1">
			<section className="border-b border-gray-500">
				<article className="md:mx-10 mx-4 grid grid-cols-3 gap-x-8 ">
					<aside className="flex  cursor-pointer py-4 items-center justify-center gap-x-3  border-b-[3px] text-blue-500 border-blue-500">
						<IoBookSharp size={28} />
						<p className="font-semibold text-lg">Stories</p>
					</aside>
					<aside className="flex justify-center my-2 gap-x-3 items-center hover:bg-gray-100 rounded-md text-gray-500">
						<BsCollectionPlay size={28} />
						<p className="font-semibold text-lg">Reels</p>
					</aside>
					<aside className="flex justify-center my-2 gap-x-3 items-center text-gray-500 hover:bg-gray-100 rounded-md">
						<RiVideoAddFill size={28} />
						<p className="font-semibold text-lg">Rooms</p>
					</aside>
				</article>
			</section>
			<section className="mx-3 py-2 mt-2">
				<Stories />
			</section>
		</main>
	);
};

export default Reels;
