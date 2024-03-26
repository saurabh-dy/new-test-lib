import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { lingui } from "@lingui/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			plugins: [["@lingui/swc-plugin", {}]]
		}),
		svgr(),
		lingui()
	]
});
