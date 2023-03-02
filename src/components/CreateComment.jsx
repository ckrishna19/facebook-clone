import React from "react";

const CreateComment = () => {
	return (
		<main className="  ">
			<section className="">
				<article className="px-4 py-2 text-gray-700 border-b">
					{Array(1)
						.fill(0)
						.map((_, i) => (
							<aside className="flex items-start gap-x-2 my-2" key={i}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
									alt="profile"
									className="w-8 aspect-square rounded-full"
								/>
								<div className="bg-gray-100 w-max rounded-3xl py-1 px-3  text-gray-700">
									<h5 className="font-bold text-base">Durga Khanal</h5>
									<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.</h6>
								</div>
							</aside>
						))}
				</article>
				<article className="flex items-center px-4 gap-x-3 mt-2">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
						alt="profile"
						className="w-8 aspect-square rounded-full"
					/>
					<aside className="w-full bg-gray-100 rounded-full py-1">
						<input
							type="text"
							name=""
							id=""
							placeholder="Write a Comment"
							className="bg-transparent focus:outline-none px-5 w-full"
						/>
					</aside>
				</article>
			</section>
		</main>
	);
};

export default CreateComment;
//fixed  inset-0 bg-[#f3f3f5] bg-opacity-10 backdrop-blur-[1px] z-10 pb-2 h-screen lg:-top-[70px] overflow-y-scroll hide

/*

	<article className=" py-3 flex justify-between items-center px-3 border-b border-gray-300">
					<div className="" />
					<h3 className="font-semibold  text-lg ">Create comment on this</h3>
					<div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full" onClick={handleCloseComment}>
						<AiOutlineClose size={26} className="cursor-pointer" />
					</div>
				</article>
				<article>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
						alt="post-img"
						className="w-full aspect-video"
					/>
				</article>

*/
