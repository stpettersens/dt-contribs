// Type definitions for change-case
// Project: https://github.com/blakeembrey/change-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "change-case" {
	export function isUpperCase(string: string): boolean;	export function isLowerCase(string: string): boolean;	export function upperCase(string: any, locale?: string): string;	export function upperCaseFirst(string: string): string;	export function lowerCaseFirst(string: string): string;	export function lowerCase(string: any, locale?: string): string;	export function sentenceCase(string: string, locale?: string, repl?: string): string;	export function titleCase(string: string, locale?: string): string;	export function camelCase(string: string, locale?: string): string;	export function pascalCase(string: string, locale?: string): string;	export function snakeCase(string: string, locale?: string): string;	export function paramCase(string: string, locale?: string): string;	export function dotCase(string: string, locale?: string): string;	export function pathCase(string: string, locale?: string): string;	export function constantCase(string: string, locale?: string): string;	export function swapCase(string: string, locale?: string): string;	export function isUpper(string: string): boolean;
        export function isLower(string: string): boolean;
        export function upper(string: any, locale?: string): string;
        export function ucFirst(string: string): string;
	export function lcFirst(string: string): string;
        export function lower(string: any, locale?: string): string;
	export function sentence(string: string, locale?: string, repl?: string): string
        export function title(string: string, locale?: string): string;
        export function camel(string: string, locale?: string): string;
        export function pascal(string: string, locale?: string): string;
        export function snake(string: string, locale?: string): string;
       	export function param(string: string, locale?: string): string;
        export function dot(string: string, locale?: string): string;
	export function path(string: string, locale?: string): string;
        export function constant(string: string, locale?: string): string;
        export function swap(string: string, locale?: string): string;
}