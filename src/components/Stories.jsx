import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

export default function App() {
	return (
		<>
			<Swiper slidesPerView={4.8} spaceBetween={10} className="hidden lg:block">
				<SwiperSlide>
					<div className="w-full border rounded-md h-60">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
							alt="story"
							className="w-full h-[80%] rounded-t-md overflow-hidden"
						/>
						<div className=" -mt-4  rounded-full mx-auto flex items-center justify-center text-blue-500">
							<BsFillPlusCircleFill size={30} />
						</div>
						<h6 className="text-center capitalize text-xs mt-2 font-semibold">create story</h6>
					</div>
				</SwiperSlide>
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<SwiperSlide key={i}>
							<div className="w-full border rounded-md h-60 relative">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
									alt="story"
									className="w-full h-full rounded-md"
								/>
								<h6 className=" capitalize text-xs font-semibold absolute bottom-2 left-2 text-white">Sirish Chalise</h6>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3jRPeykVAlHRMo1AlcfOXmFryu0CtEYtzY6klngj&s"
									alt="proflie"
									className="w-8 h-8 rounded-full border-blue-500 border-4 absolute left-2 top-2"
								/>
							</div>
						</SwiperSlide>
					))}
			</Swiper>

			<Swiper slidesPerView={6.8} spaceBetween={10} className="hidden md:block lg:hidden">
				<SwiperSlide>
					<div className="w-full border rounded-md lg:h-60 md:h-40">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
							alt="story"
							className="w-full h-[80%] rounded-t-md overflow-hidden"
						/>
						<div className=" -mt-4  rounded-full mx-auto flex items-center justify-center text-blue-500">
							<BsFillPlusCircleFill size={30} />
						</div>
						<h6 className="text-center capitalize text-xs mt-2 font-semibold">create story</h6>
					</div>
				</SwiperSlide>
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<SwiperSlide key={i}>
							<div className="w-full border rounded-md lg:h-60 md:h-40 relative">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
									alt="story"
									className="w-full h-full rounded-md"
								/>
								<h6 className=" capitalize text-xs font-semibold absolute bottom-2 left-2 text-white">Sirish Chalise</h6>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3jRPeykVAlHRMo1AlcfOXmFryu0CtEYtzY6klngj&s"
									alt="proflie"
									className="w-8 h-8 rounded-full border-blue-500 border-4 absolute left-2 top-2"
								/>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
			<Swiper slidesPerView={3.8} spaceBetween={10} className="block md:hidden">
				<SwiperSlide>
					<div className="w-full rounded-md border lg:h-60 md:h-40 h-32 relative">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
							alt="story"
							className="w-full h-[70%] rounded-t-md overflow-hidden"
						/>
						<div className=" -mt-4  rounded-full mx-auto flex items-center justify-center text-blue-500">
							<BsFillPlusCircleFill size={30} />
						</div>
						<h6 className="text-center capitalize text-xs my-1 font-semibold">create story</h6>
					</div>
				</SwiperSlide>
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<SwiperSlide key={i}>
							<div className="w-full border rounded-md lg:h-60 md:h-40 h-32 relative">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
									alt="story"
									className="w-full h-full rounded-md"
								/>
								<h6 className=" capitalize text-xs font-semibold absolute bottom-2 left-2 text-white">Sirish Chalise</h6>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3jRPeykVAlHRMo1AlcfOXmFryu0CtEYtzY6klngj&s"
									alt="proflie"
									className="w-8 h-8 rounded-full border-blue-500 border-4 absolute left-2 top-2"
								/>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
}
