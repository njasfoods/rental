import React from "react";

const Others = () => {
	return (
		<div>
			<h2>Other available cars</h2>
			<div>
				<span>Search</span>
				<input type="text" />
			</div>
            <div className="grid grid-cols-3 gap-8">
                <div>
                    <div>
                        <img alt="" src="/" />
                    </div>
                    <p>Name of Car</p>
                    <p>$8.00 <span>/ DAY</span></p>
                </div>

            </div>
		</div>
	);
};

export default Others;
