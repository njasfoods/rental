import Link from "next/link";
import React from "react";

const Others = () => {
	return (
		<div className="text-center text-gray-800 uppercase max-w-6xl mx-auto">
			<h2 className="text-3xl font-bold">Other available cars</h2>
			<div className="py-8 flex justify-between">
				<div className="flex items-center space-x-4">
					<span className=""> Search</span>
					<input className="p-2 border rounded" type="text" />
				</div>
				<div className="flex items-center space-x-4">
					<span className=""> Car model</span>
					<select className="p-2 w-48 px-4 border rounded" type="text">
						<option></option>
					</select>
				</div>
				<div className="flex items-center space-x-4">
					<span className=""> rating</span>
					<select className="p-2 w-48 px-4 border rounded" type="text">
						<option></option>
					</select>
				</div>
			</div>
			<div className="mt-4 grid grid-cols-3 gap-8 justify-items-center">
				<div>
					<div className="border">
						<img
							alt=""
							src="https://preview.redq.io/turbo-wp/wp-content/uploads/2017/03/xv20i-656x320-1-800x546-1-1-358x274.png"
						/>
					</div>
					<div className="text-start px-6 py-4 grid gap-y-2">
						<p className="text-xl">Name of Car</p>
						<p>6 Seater</p>
						<p className="text-2xl">
							$8.00 <span>/ DAY</span>
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<Link href="/listing" className="py-3 px-9 rounded bg-red-400 inline-flex justify-center items-center text-base font-medium text-center text-white">
					SEE ALL{" "}
					<svg
						class="ml-2 -mr-1 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default Others;
