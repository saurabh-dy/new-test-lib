import { useState } from "react";
import Marquee from "react-fast-marquee";
const Marquee2 = () => {
	const [direction, setDirection] = useState(false);
	return (
		<div className="w-[200px] border-2 border-purple-400  ">
			<Marquee
				play
				pauseOnHover
				direction={direction ? "right" : "left"}
				speed={50}
				className="flex gap-6"
			>
				<div>Sachhidanand Vishwanath sads</div>
			</Marquee>
		</div>
	);
};

export default Marquee2;
