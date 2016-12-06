/// <reference types="minimist" />
import * as minimist from 'minimist';

declare function meow(options: string | string[] | meow.Options, minimistOptions?: minimist.Opts): meow.Result;
declare namespace meow {

	export interface Options {
		description?: string|boolean;
		help?: string|boolean;
		version?: string|boolean;
		pkg?: any;
		argv?: string[];
		inferType?: boolean;
	}

	export interface Result {
		input: string[];
		flags: {[name: string]: any};
		pkg: any;
		help: string;
		showHelp(code: number): void;
	}

}

export = meow;
