import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Reels from "../components/Reels";
import CreatePost from "../components/CreatePost";

import CreatePostModel from "../components/CreatePostModel";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";
import MessageList from "../components/MessageList";
import Notifications from "../components/Notifications";

const Home = () => {
	const [showCreateModel, setShowCreateModel] = useState(false);
	const [showNotification, setShowNotification] = useState(false);

	const handleShowModal = () => setShowCreateModel(true);
	const handleCloseModal = () => setShowCreateModel(false);

	const [showMessageList, setShowMessageList] = useState(false);
	const showMessage = () => setShowMessageList(!showMessageList);
	const closeMessage = () => setShowMessageList(false);
	const toggleNotification = () => setShowNotification(!showNotification);
	return (
		<>
			<Header showMessage={showMessage} toggleNotification={toggleNotification} />
			<main className="lg:mt-20 md:mx-5 md:mt-4">
				<section className="block lg:grid grid-cols-5 items-start ">
					<article className="grid-cols-1">
						<Sidebar />
					</article>
					<article className="lg:col-span-3">
						<main className="w-full lg:w-[70%] mx-auto">
							<Reels />
							<CreatePost handleShowModal={handleShowModal} />
							{showCreateModel && <CreatePostModel handleCloseModal={handleCloseModal} />}
							<Post />
							<Post />
						</main>
					</article>
					<article className="grid-cols-1">
						<RightSidebar />
						{showMessageList && <MessageList closeMessage={closeMessage} />}
						{showNotification && <Notifications />}
					</article>
				</section>
			</main>
		</>
	);
};

export default Home;
