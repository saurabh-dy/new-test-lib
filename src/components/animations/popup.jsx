import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ show, setShow }) => {
	return (
		<>
			<AnimatePresence>
				{show && (
					<motion.div
						onClick={() => setShow(false)}
						className="fixed gap-2 top-0 left-0 h-screen w-full  flex justify-center items-center"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.7 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.7 }}
							transition={{
								type: "tween",
								// type: "spring",
								// duration: 0.1,
								// stiffness: 50,
								// damping: 15,
								// velocity: 0.5,
								// restSpeed: 0.1
								duration: 0.2,
								ease: "easeInOut"
							}}
							className="w-[200px] h-[200px] bg-white shadow-xl rounded-md"
						></motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.7, y: "50px" }}
							animate={{ opacity: 1, scale: 1, y: "0px" }}
							exit={{ opacity: 0, scale: 0.7, y: "50px" }}
							transition={{
								type: "spring",
								stiffness: 70,
								damping: 15,
								velocity: 0.5,
								restSpeed: 0.1
							}}
							className="w-[200px] h-[200px] bg-white shadow-xl rounded-md"
						></motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Popup;
