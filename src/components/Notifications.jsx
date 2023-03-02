import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Notifications = () => {
	return (
		<main className="w-[23vw] bg-white rounded-md  z-50 h-[85vh] fixed right-2 -mt-8  shadow-md border px-3 py-3 overflow-y-scroll sidebar">
			<section className="">
				<article className="flex justify-between items-center my-1">
					<h4>Notification</h4>
					<BsThreeDots size={24} className="cursor-pointer" />
				</article>
				<article className="flex items-center gap-x-3">
					<button className="px-3 py-1 bg-blue-100 rounded-full text-blue-500 font-semibold ">All</button>
					<button className="px-3 py-1 hover:bg-gray-100 rounded-full font-semibold  text-gray-700">Unread</button>
				</article>
				<article className="flex items-center justify-between my-1">
					<p>New</p>
					<button>See all</button>
				</article>
				<section className=" ">
					{Array(10)
						.fill(0)
						.map((_, i) => (
							<article className="grid grid-cols-5 gap-x-3 my-4 text-gray-500 place-items-start border-b pb-1" key={i}>
								<aside className="grid-cols-1 relative">
									<img
										src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
										alt="profile"
										className="w-full aspect-square rounded-full"
									/>
									<div className="w-4 aspect-square rounded-full border absolute right-0 bottom-0 bg-green-600" />
								</aside>
								<aside className="flex flex-col col-span-4">
									<p>
										<strong>Bhagawan Malla</strong> <strong>Sirish Chalise</strong> <strong>Durga Khanal</strong> and 7
										others recently commented on your post
									</p>
									<h6>18 hours ago</h6>
								</aside>
							</article>
						))}
				</section>
			</section>
		</main>
	);
};

export default Notifications;
