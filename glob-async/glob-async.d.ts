// Type definitions for glob
// Project: https://github.com/isaacs/glob-async
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "glob" {
    function glob(pattern: string, options_cb: any, cb: any): void;
    export = glob;
}
