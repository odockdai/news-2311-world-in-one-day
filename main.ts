// make.fun · news-image-20261123 — "Monday 23 November 2026: the world in one day"
//
// The entry image is entry.png, sitting beside this file. The program copies those exact bytes to
// <MAKEFUN_OUTPUT_DIR ?? /output>/entry.png, so both grader runs write an identical file.
//
// The poster is drawn by dev/make_frontpage.py (Pillow) and committed as entry.png; nothing is
// generated at run time, which keeps the run deterministic and offline.
//
// Locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const target = join(out, 'entry.png');

// Fail loudly instead of shipping a file the gate would reject: a whole PNG of at most 1 MiB.
const bytes = readFileSync(source);
if (bytes.length > 1024 * 1024) throw new Error(`entry.png is ${bytes.length} bytes, over 1 MiB`);
if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error('entry.png is not a PNG');

mkdirSync(out, { recursive: true });
copyFileSync(source, target);
if (statSync(target).size !== bytes.length) throw new Error('copy is incomplete');
