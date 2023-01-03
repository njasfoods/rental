import React from "react";

const Hero = () => {
	return (
		<div className="h-screen w-full relative">
			<div className="absolute shadow top-20 left-10 p-4">
				<form>
					<h1 className="font-bold text-3xl mb-4">MAKE YOUR RIDE</h1>
					<p className="font-medium text-gray-500">Rent a car to move around</p>

					<div className="my-8">
						<div>
							<label>WHERE YOU FROM</label>
							<input type="text" className="" />
						</div>
					</div>
					<button className="w-full px-8 py-4 bg-red-500 rounded-lg text-white font-medium">
						SEARCH
					</button>
				</form>
			</div>
		</div>
	);
};

export default Hero;
