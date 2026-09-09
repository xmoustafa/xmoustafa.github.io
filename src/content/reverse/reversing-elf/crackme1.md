---
title: "My First THM Reversing ELF Challenge: Crackme1"
description: "A beginner-friendly walkthrough of Crackme1—from identifying the ELF binary to capturing the flag."
topic: "Reversing ELF"
order: 1
draft: false
---

# My First THM Reversing ELF Challenge: Crackme1

Every reverse engineer remembers the first executable they pulled apart. Mine was **Crackme1** from TryHackMe's Reversing ELF room—a deliberately simple challenge that teaches the basic rhythm of binary analysis.

The objective was straightforward: inspect the Linux executable and recover its flag. The larger lesson was to begin with simple observations before reaching for a debugger or decompiler.

> **Lab safety:** Only analyze programs you own or have explicit permission to test. TryHackMe crackmes are intentionally provided for authorized practice.

## 1. Make the binary executable

After downloading the challenge files, I first tried to prepare `crackme1` for execution. Linux uses an execute permission bit, and the file did not have it enabled yet.

```bash
chmod +x crackme1
```

![Granting execute permission to crackme1](/assets/reverse/crackme1/01-chmod.png)

The command produced no output, which is normal. A successful `chmod` usually returns silently.

## 2. Identify the file

Before running a binary, it is good practice to ask the operating system what kind of file it is.

```bash
file crackme1
```

The result identified the target as:

```text
crackme1: ELF 64-bit LSB executable, x86-64, version 1 (SYSV),
dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2,
for GNU/Linux 2.6.32, BuildID[sha1]=672f525a7ad3c33f190c060c09b11e9ffd007f34,
not stripped
```

![The file command identifying crackme1 as a 64-bit ELF executable](/assets/reverse/crackme1/02-file.png)

That one line gives us several useful facts:

| Detail | Meaning |
| --- | --- |
| `ELF` | The standard executable format used on Linux systems |
| `64-bit LSB` | A 64-bit little-endian binary |
| `x86-64` | Compiled for a 64-bit Intel/AMD processor |
| `dynamically linked` | Uses shared libraries loaded at runtime |
| `not stripped` | Symbol information has not been removed, which can make later analysis easier |

## 3. Run Crackme1

For this introductory challenge, the simplest hypothesis was the right one. I ran the program directly:

```bash
./crackme1
```

The program immediately printed the flag:

```text
flag{not_that_kind_of_elf}
```

![Crackme1 printing the challenge flag](/assets/reverse/crackme1/03-run.png)

## Terminal sandbox simulation

The complete session can be replayed as a harmless terminal transcript:

```console
➜  Reversing ELF chmod +x crackme1
➜  Reversing ELF file crackme1
crackme1: ELF 64-bit LSB executable, x86-64, version 1 (SYSV),
dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, not stripped
➜  Reversing ELF ./crackme1
flag{not_that_kind_of_elf}
```

This is a simulation for learning: the block displays the same commands and output without executing anything in the reader's browser.

## What I learned

Crackme1 was intentionally easy, but it reinforced a useful workflow:

1. Check the file's permissions.
2. Identify its format and architecture.
3. Observe its behavior.
4. Escalate to tools such as `strings`, `readelf`, `objdump`, GDB, or a decompiler only when simple inspection stops answering the question.

The main takeaway is that good reverse engineering begins with restraint. The most sophisticated tool is not always the best first tool—and sometimes the challenge really does reveal itself when you run it.
