import Link from "next/link";
import React from "react";

const links = [
	{
		name: "car listing",
		link: "/listing",
	},
	{
		name: "contact us",
		link: "/contact",
	},
];

const Navbar = () => {
	return (
		<div className="w-full py-4 flex justify-between max-w-6xl mx-auto items-center bg-white">
			<h1>Logo</h1>
			<div>
				<ul className="flex space-x-4 uppercase text-sm">
					{links.map((link, i) => (
						<li key={i}>
							<Link href={link.link}> {link.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="flex space-x-4">
				<Link
					href="/user/signup"
					className="px-3 py-1.5 bg-red-500 rounded-lg text-white"
				>
					sign up
				</Link>
				<Link
					href="/user/login"
					className="px-3 py-1.5 border rounded-lg border-red-500 text-red-500"
				>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
