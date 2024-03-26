const config = {
	locales: ["hi"],
	catalogs: [
		{
			path: "<rootDir>/src/locales/{locale}",
			include: ["src"]
		}
	]
};

export default config;
