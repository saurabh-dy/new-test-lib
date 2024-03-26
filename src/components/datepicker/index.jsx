import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-white dark:bg-gray-300",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "opacity-30",
		input: "",
		inputIcon: "",
		selected: ""
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>p</span>,
		next: () => <span>n</span>
	},
	datepickerClassNames: "top-12",
	// defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	}
};
const DatePicker = () => {
	const [show, setShow] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const handleChange = (selectedDate) => {
		setSelectedDate(selectedDate);
		console.log(selectedDate);
	};
	const handleClose = (state) => {
		setShow(state);
	};
	return (
		<div>
			{" "}
			<Datepicker
				options={options}
				onChange={(e) =>
					console.log(
						"current date",
						`${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`
					)
				}
				show={show}
				setShow={handleClose}
			>
				<input
					type="text"
					className="bg-white"
					placeholder="Select Date"
					value={selectedDate}
					onFocus={() => setShow(true)}
					readOnly
					onChange={(e) => console.log("input field date", e)}
				/>
			</Datepicker>
			<input type="date" onChange={(e) => console.log(e.target.value)} />
		</div>
	);
};

export default DatePicker;
