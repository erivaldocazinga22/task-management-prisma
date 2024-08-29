import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import eslintParserTypeScript from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: eslintParserTypeScript,
			ecmaVersion: 2020,
			sourceType: "module",
		},
		plugins: {
			"@typescript-eslint": eslintPluginTypeScript,
		},
		rules: {
			semi: ["error", "always"],
			quotes: ["error", "double"],
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-empty-function": "off",
		},
	},
];
