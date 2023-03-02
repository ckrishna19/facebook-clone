import React from "react";
import { BsCamera, BsPeople, BsSearch } from "react-icons/bs";
import { AiFillHome, AiOutlineGift, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { IoApps } from "react-icons/io5";
import { BsMessenger } from "react-icons/bs";
import { IoIosNotificationsOutline, IoIosPeople, IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountPinCircleLine, RiMessengerLine } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

const Header = ({ showMessage, toggleNotification }) => {
	return (
		<>
			<main className="bg-white  fixed left-0 top-0 w-full shadow-md z-50 hidden lg:block">
				<section className="grid grid-cols-3 mx-3">
					<article className="flex gap-x-2 my-2">
						<img
							src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
							alt="fb-logo"
							className="w-10 aspect-square rounded-full"
						/>
						<aside className="w-[60%] flex items-center bg-gray-100 rounded-full pl-2">
							<BsSearch size={18} />
							<input
								type="text"
								name=""
								id=""
								placeholder="Search Facebook"
								className="mx-2 flex-1 h-full bg-transparent pr-2"
							/>
						</aside>
					</article>
					<article className="grid grid-cols-4 gap-x-4">
						<aside className="grid-cols-1 border-b-4 border-blue-600 flex justify-center items-center text-blue-600 cursor-pointer">
							<AiFillHome size={30} />
						</aside>
						<aside className="grid-cols-1  flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md text-gray-500 my-1">
							<MdOutlineOndemandVideo size={30} />
						</aside>{" "}
						<aside className="grid-cols-1  flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md text-gray-500  my-1">
							<AiOutlineGift size={30} />
						</aside>{" "}
						<aside className="grid-cols-1  flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md text-gray-500  my-1">
							<CgGames size={30} />
						</aside>
					</article>
					<article className="flex items-center justify-end gap-x-2">
						<aside className="bg-gray-200 w-10 aspect-square rounded-full flex items-center justify-center cursor-pointer">
							<IoApps size={20} />
						</aside>
						<aside
							className="bg-gray-200 w-10 aspect-square rounded-full flex items-center justify-center cursor-pointer"
							onClick={showMessage}
						>
							<BsMessenger size={20} />
						</aside>
						<aside
							className="bg-gray-200 w-10 aspect-square rounded-full flex items-center justify-center cursor-pointer"
							onClick={toggleNotification}
						>
							<IoMdNotifications size={20} />
						</aside>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
							alt="profile-pic"
							className="w-10 aspect-square rounded-full cursor-pointer"
						/>
					</article>
				</section>
			</main>

			<main className="hidden md:block lg:hidden">
				<section className="bg-[#3B5999] py-1">
					<article className="px-4 py-1 flex justify-between text-gray-300">
						<RiAccountPinCircleLine size={30} />
						<aside className="border-b w-full justify-center flex items-center gap-x-2 pb-1 mx-5">
							<BsSearch size={24} />
							<h6 className="text-base capitalize">search</h6>
						</aside>
						<BsCamera size={24} />
					</article>
				</section>
				<section className="bg-white">
					<article className="grid grid-cols-6 text-gray-500">
						<aside className="grid-cols-1 flex justify-center border-b-4 text-blue-500 border-blue-500 py-2">
							<FaRegFileImage size={24} />
						</aside>
						<aside className="grid-cols-1 flex justify-center py-2">
							<BsPeople size={24} />
						</aside>
						<aside className="grid-cols-1 flex justify-center py-2">
							<RiMessengerLine size={24} />
						</aside>
						<aside className="grid-cols-1 flex justify-center py-2">
							<MdOutlineOndemandVideo size={24} />
						</aside>
						<aside className="grid-cols-1 flex justify-center py-2">
							<IoIosNotificationsOutline size={24} />
						</aside>
						<aside className="grid-cols-1 flex justify-center py-2">
							<AiOutlineMenu size={24} />
						</aside>
					</article>
				</section>
			</main>

			<main className="block md:hidden bg-white px-2">
				<section className="flex justify-between">
					<img
						src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg"
						alt="fb-logo"
						className="w-32"
					/>
					<article className="flex items-center gap-x-2 text-black">
						<aside className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
							<BsSearch size={20} />
						</aside>
						<aside className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
							<AiOutlineMenu size={20} />
						</aside>
					</article>
				</section>
				<section className="grid grid-cols-6 text-gray-500 place-items-center pb-1 my-2">
					<aside className="flex justify-center  w-full">
						<HiHome size={28} className="text-blue-500" />
					</aside>
					<aside className="flex justify-center w-full">
						<BsPeople size={28} />
					</aside>
					<aside className="flex justify-center w-full">
						<RiMessengerLine size={28} />
					</aside>
					<aside className="flex justify-center w-full">
						<MdOutlineOndemandVideo size={28} />
					</aside>
					<aside className="flex justify-center w-full">
						<IoMdNotificationsOutline size={28} />
					</aside>
					<aside className="flex justify-center items-center w-7 h-7 rounded-full border ">
						<IoIosPeople size={28} />
					</aside>
				</section>
			</main>
		</>
	);
};

export default Header;
