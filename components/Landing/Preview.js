import React from "react";

const Preview = () => {
	return (
		<div className="grid grid-cols-2 py-16 gap-32">
			<div className="bg-red-50 mx-auto rounded-full flex justify-center h-96 w-96 relative">
				<img
					src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
					className="object-contain w-64"
				/>
			</div>
			<div>
				<h6>RECENT CARS</h6>
				<div className="flex space-x-8">
					<img
						src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
						className="w-36 object-contain"
					/>
					<div className="grid gap-y-4 mt-8">
						<h6 className="font-semibold tracking-wide text-xl">
							BMW M6 Cran Coupe
						</h6>
						<p>Five Seater car</p>
						<p className="text-xl">
							$10.00<span className="text-base">/Day</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
