// Type definitions for title-case
// Project: https://github.com/blakeembrey/title-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "title-case" {
	function titleCase(string: string, locale?: string): string;
	export = titleCase;
}
