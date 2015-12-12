// Type definitions for ua-parser-js
// Project: https://github.com/faisalman/ua-parser-js
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface StandardValues {
	name: string;
	version: number;
}

interface DeviceValues {
	model: string;
	type: string;
	vendor: string;
}

interface CPUValue {
	architecture: string;
}

interface ResultValues {
	ua: string;
	browser: StandardValues;
	cpu: CPUValue;
	device: DeviceValues;
	engine: StandardValues;
	os: StandardValues;
}

interface UAParser {
	new(): UAParser;
	getBrowser(): StandardValues;
	getDevice(): DeviceValues;
	getEngine(): StandardValues;
	getOS(): StandardValues;
	getCPU(): CPUValue;
	getResult(): ResultValues;
	getUA(): string;
	setUA(uastring: string): UAParser;
}

declare module "ua-parser-js" {
	var uaParser: UAParser;
	export = uaParser;
}