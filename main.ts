// make.fun · news-image-20261123
// "Monday 23 November 2026: the world in one day"
//
// The deliverable is entry.png, committed beside this file. The program only copies those exact bytes to
// <MAKEFUN_OUTPUT_DIR ?? /output>/entry.png, so the grader's two runs write identical files and the run
// needs no network, no clock and no randomness.
//
// The front page itself is drawn offline by dev/make_frontpage6.py (Pillow) and committed as entry.png.
//
// Locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, openSync, readSync, closeSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(ROOT, 'entry.png');
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TARGET = join(OUT_DIR, 'entry.png');

const PNG_MAGIC = '89504e470d0a1a0a';
const MAX_BYTES = 1024 * 1024;

// Read the first eight bytes without slurping the whole file: the gate tells a PNG from a JPEG there.
function firstBytes(path: string, count: number): string {
  const fd = openSync(path, 'r');
  try {
    const buf = Buffer.alloc(count);
    const read = readSync(fd, buf, 0, count, 0);
    return buf.subarray(0, read).toString('hex');
  } finally {
    closeSync(fd);
  }
}

const size = statSync(SOURCE).size;
if (size === 0) throw new Error('entry.png is empty');
if (size > MAX_BYTES) throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate`);
if (firstBytes(SOURCE, 8) !== PNG_MAGIC) throw new Error('entry.png does not start with the PNG signature');

// The gate also caps the picture at 1024 by 1024: read the IHDR width and height from bytes 16-23.
const ihdr = firstBytes(SOURCE, 24);
const width = parseInt(ihdr.slice(32, 40), 16);
const height = parseInt(ihdr.slice(40, 48), 16);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);

const copied = statSync(TARGET).size;
if (copied !== size) throw new Error(`copied ${copied} bytes, expected ${size}`);
