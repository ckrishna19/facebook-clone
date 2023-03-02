import React from "react";
import { BsThreeDots, BsFillGiftFill, BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { RiVideoAddFill } from "react-icons/ri";

const RightSidebar = () => {
	return (
		<main className="h-[90vh] overflow-y-scroll sidebar w-[20vw] fixed hidden lg:block pb-6">
			<section className="border-b border-gray-300">
				<h2>Sponsered</h2>
				<article className="grid grid-cols-2 py-4 px-3 gap-x-3 rounded-md hover:bg-gray-200 place-items-center">
					<img
						src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
						alt="sponsered"
						className="rounded-md h-36"
					/>
					<aside className="grid-cols-1">
						<h4>Think IELTS, Think IDP</h4>
						<h5>ielts.com</h5>
					</aside>
				</article>
				<article className="grid grid-cols-2 py-4 px-3 gap-x-3 rounded-md hover:bg-gray-200 place-items-center">
					<img
						src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
						alt="sponsered"
						className="rounded-md h-36"
					/>
					<aside className="grid-cols-1">
						<h4>Think IELTS, Think IDP</h4>
						<h5>ielts.com</h5>
					</aside>
				</article>
			</section>
			<section className="my-2  text-gray-500">
				<article className="flex items-center justify-between mx-4">
					<h4>Your pages and profile</h4>
					<BsThreeDots size={20} />
				</article>
				<article className="pl-2 border-b border-gray-400 mb-2">
					<aside className="flex rounded-md hover:bg-gray-300 items-center py-1 gap-x-4">
						<img
							src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
							alt="profile"
							className="w-10 rounded-full aspect-square"
						/>
						<h6 className="font-semibold">Sirish Chalise</h6>
					</aside>
					<aside className="flex rounded-md hover:bg-gray-300 items-center py-1 gap-x-4">
						<img
							src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
							alt="profile"
							className="w-10 rounded-full aspect-square"
						/>
						<h6 className="font-semibold">Durga Khanal</h6>
					</aside>
					<aside className="flex rounded-md hover:bg-gray-300 items-center py-1 gap-x-4">
						<FiRefreshCw size={24} />
						<h6 className="ml-3">Switch into page</h6>
					</aside>
					<aside className="flex rounded-md hover:bg-gray-300 items-center py-1 gap-x-4">
						<BiMicrophone size={24} />
						<h6 className="ml-3">Create Promotion</h6>
					</aside>
				</article>
			</section>
			<section className="border-b py-2 border-gray-500 ">
				<h4 className="my-1">Birthdays</h4>
				<article className="flex gap-x-3">
					<BsFillGiftFill size={36} className="text-red-400" />
					<p>
						<strong>Durga Khanal</strong> and <strong>2</strong> others have birthday today.
					</p>
				</article>
			</section>

			<section>
				<article className="flex items-center justify-between text-gray-500 my-2">
					<h4>Contacts</h4>
					<aside className="flex gap-x-1 ">
						<div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 rounded-full">
							<RiVideoAddFill />
						</div>
						<div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 rounded-full">
							<BsSearch />
						</div>
						<div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 rounded-full">
							<BsThreeDots />
						</div>
					</aside>
				</article>
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<article className="flex items-center gap-x-3 hover:bg-gray-300 pl-2 rounded-md cursor-pointer py-1" key={i}>
							<aside className="w-10 relative">
								<img
									src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
									alt="profile"
									className="w-full aspect-square rounded-full"
								/>
								<div className="w-3 aspect-square rounded-full bg-green-500 absolute right-0 bottom-0 border" />
							</aside>
							<h6 className="font-semibold">Bhagawan Malla</h6>
						</article>
					))}
			</section>
		</main>
	);
};

export default RightSidebar;
