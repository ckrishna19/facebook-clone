import React from "react";
import { BsThreeDots, BsArrowsFullscreen, BsSearch } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
const MessageList = ({ closeMessage }) => {
	const truncate = (str, maxLenght) => {
		if (str.length > maxLenght) {
			return str.slice(0, maxLenght) + "...";
		}
		return str;
	};
	return (
		<>
			<main className="w-[23vw] bg-white rounded-md  z-50 h-[85vh] fixed right-2 -mt-8  shadow-md border px-3 hidden lg:block">
				<section className="py-2 relative h-full ">
					<header className="flex justify-between py-1">
						<h2>Chats</h2>
						<aside className="flex items-center gap-x-2 text-gray-500">
							<div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
								<BsThreeDots size={18} />
							</div>
							<div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
								<BsArrowsFullscreen />
							</div>
							<div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
								<RiVideoAddFill />
							</div>
							<div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
								<BiEdit />
							</div>
						</aside>
					</header>
					<article className="h-8 bg-gray-100 rounded-full border my-1">
						<aside className="flex items-center gap-x-2 px-2">
							<BsSearch />
							<input
								type="text"
								name=""
								id=""
								placeholder="Search Messenger"
								className="w-full py-1 bg-transparent pr-2"
							/>
						</aside>
					</article>
					<article className="flex gap-x-3 my-2">
						<button className="bg-gray-100 text-blue-500 py-1 px-3 rounded-full  font-semibold">Inbox</button>
						<button className="bg-gray-100 py-1 px-3 rounded-full  font-semibold">Communities</button>
					</article>
					<article className="overflow-y-scroll h-[70%] sidebar">
						{Array(15)
							.fill(0)
							.map((_, i) => (
								<article className="flex gap-x-3 my-4 text-gray-500" key={i}>
									<aside className="w-12 relative">
										<img
											src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
											alt="profile"
											className="w-full aspect-square rounded-full"
										/>
										<div className="w-4 aspect-square rounded-full border absolute right-0 bottom-0 bg-green-600" />
									</aside>
									<aside className="flex flex-col">
										<p>Bhagawan Malla</p>
										<h6>
											{truncate(
												`
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto fugit consectetur blanditiis,
									voluptatibus, doloribus iste aspernatur, placeat itaque iure aut aliquam ea laborum voluptatem enim saepe
									reiciendis quod quae expedita?`,
												40
											)}
											<span className="ml-1">1h</span>
										</h6>
									</aside>
								</article>
							))}
					</article>

					<footer className="absolute bottom-0 border-t py-2 w-full">
						<aside className="flex justify-center w-full">
							<button className="text-blue-500  font-bold text-sm">see All in messenger</button>
						</aside>
					</footer>
				</section>
			</main>
		</>
	);
};

export default MessageList;
