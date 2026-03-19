#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to first configuration file')
  .argument('<filepath2>', 'path to second configuration file')
  .action((filepath1, filepath2) => {
    try {
      const diff = genDiff(filepath1, filepath2);
      console.log(diff);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse();