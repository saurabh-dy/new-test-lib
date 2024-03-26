import { useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages } from "./locales/hi";
import { Trans } from "@lingui/macro";
import { Button } from "testLib";

// import { App as Game } from "23-2-2024-reactjs-sandbox";
// import {} from "test-lib";

i18n.load({
	hi: messages
});

const currentLanguage = localStorage.getItem("lang") || "en";
i18n.activate(currentLanguage);

const DefaultI18n = ({ children }) => <span>{children}</span>;

import Marquee from "./components/marquee";
import Popup from "./components/animations/popup";
import IconSwitch from "./components/animations/iconSwitch";
import DatePicker from "./components/datepicker";

function App() {
	const [show, setShow] = useState(false);
	const name = "Saurabh";
	console.log("navigator.languages -> ", navigator.language);

	// return <Button label="Hello Wrold" />;
	return (
		<I18nProvider i18n={i18n} defaultComponent={DefaultI18n}>
			<div className="w-full h-screen flex justify-center items-center bg-teal-500/20">
				{/* <Marquee /> */}
				<button onClick={() => setShow(true)}>Popup</button>
				<Popup setShow={setShow} show={show} />
				{/* <IconSwitch /> */}
				<div
					onClick={() => {
						const currentLanguage = localStorage.getItem("lang");
						if (currentLanguage) {
							i18n.activate("en");
							localStorage.clear();
							window.location.reload();
						} else {
							localStorage.setItem("lang", "hi");
							window.location.reload();
						}
					}}
					className="bg-red-500/70 shadow-red-500/20 px-4 select-none uppercase text-white rounded-full py-3 cursor-pointer active:px-3 active:py-2 text-sm font-bold tracking-widest ml-4 shadow-lg hover:shadow-xl hover:shadow-red-500/20 duration-300 ease-in-out"
				>
					Change to Hindi
				</div>
				<Trans component={null}>Hello, my name is {name}</Trans>;
				<DatePicker />
				<div className="flex flex-col divide-y-2 divide-red-900">
					<div className="py-[10px]">a</div>
					<div className="py-[10px]">b</div>
					<div className="py-[10px]">c</div>
				</div>
			</div>
		</I18nProvider>
	);
}

export default App;
