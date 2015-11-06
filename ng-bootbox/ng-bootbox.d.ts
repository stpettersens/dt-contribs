// Type definitions for ng-bootbox
// Project: https://github.com/eriktufvesson/ngBootbox
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="typings/es6-promise.d.ts" />
/// <reference path="typings/bootbox.d.ts" />

interface IBootboxDialog {
	title?: string;
	message?: string;
	templateUrl?: string;
	locale?: string;
	callback?: () => any;
	onEscape?: () => any | boolean;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
	size?: string;
	buttons?: BootboxButtonMap;
}

interface IBootboxService {
	alert(msg: string): Promise<any>;
	confirm(msg: string): Promise<any>;
	prompt(msg: string): Promise<any>;
	customDialog(options: IBootboxDialog): void;
	setDefaults(options: BootboxDefaultOptions): void;
	hideAll(): void;

	addLocale(name: string, values: BootboxLocaleValues): void;
	removeLocale(name: string): void;
	setLocale(name: string): void;
}

declare var $ngBootbox: IBootboxService;
