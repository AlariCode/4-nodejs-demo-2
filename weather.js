#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
	const args = getArgs(process.argv)
	console.log(args);
	if (args.h) {
		// Вывод help
	}
	if (args.s) {
		// Сохранить город
	}
	if (args.t) {
		// Сохранить токен
	}
	// Вывести погоду
};

initCLI();