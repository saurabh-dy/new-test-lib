import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icon1 from "../../assets/analytics.svg";
import icon2 from "../../assets/circle-half-stroke-solid.svg";

const IconSwitch = () => {
	const [change, setChange] = useState(false);
	return (
		<div className="flex items-center gap-5">
			<button onClick={() => setChange((prev) => !prev)}>Click</button>
			<div className=" relative z-50 w-[20px] h-[20px]">
				<AnimatePresence>
					{change && (
						<motion.img
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							key={1}
							src={icon1}
							className="w-[20px] absolute top-0 z-40"
						/>
					)}
					{!change && (
						<motion.img
							key={2}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							src={icon2}
							className="w-[20px] absolute top-0 z-40"
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default IconSwitch;
