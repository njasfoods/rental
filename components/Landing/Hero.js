import { Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Fragment } from "react";
import { useState } from "react";
const Hero = () => {
	const [value, setValue] = useState([null, null]);

	return (
		<div className="h-screen w-full relative max-w-6xl mx-auto">
			<div className="absolute shadow top-10 left-5 p-10">
				<form>
					<h1 className="font-bold text-3xl mb-4">MAKE YOUR RIDE</h1>
					<p className="font-medium text-gray-500">Rent a car to move around</p>

					<div className="my-8 grid gap-y-3">
						<div className="grid gap-y-1">
							<label>WHERE YOU FROM</label>
							<input type="text" className="border rounded mt-2 py-1.5" />
						</div>
						<div className="grid gap-y-1">
							<label>WHERE YOU GO</label>
							<input type="text" className="border rounded mt-2 py-1.5" />
						</div>
						<div className="grid gap-y-1">
							<label>CHOOSE DATES</label>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateRangePicker
									calendars={1}
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(startProps, endProps) => (
										<Fragment>
											<TextField {...startProps} />
											<Box sx={{ mx: 2 }}> to </Box>
											<TextField {...endProps} />
										</Fragment>
									)}
								/>
							</LocalizationProvider>
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
