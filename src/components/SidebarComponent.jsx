import React from "react";

const SidebarComponent = ({ src, alt, title }) => {
	return (
		<aside className="flex items-center gap-x-2 hover:bg-gray-300 py-2 pl-2 rounded-md cursor-pointer">
			<img src={src} alt={alt} className="w-8 aspect-square rounded-full" />
			<p className="font-semibold">{title} </p>
		</aside>
	);
};

export default SidebarComponent;
