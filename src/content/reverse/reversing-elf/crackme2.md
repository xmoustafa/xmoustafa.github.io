---
title: "THM Reversing ELF Challenge: Crackme2"
description: "Recovering Crackme2's hard-coded password with strings and using it to reveal the flag."
topic: "Reversing ELF"
order: 2
draft: false
---

# THM Reversing ELF Challenge: Crackme2

After completing Crackme1, I moved on to **Crackme2** in TryHackMe's Reversing ELF room. This binary added one small obstacle: it expected a password as a command-line argument and rejected incorrect input.

The challenge introduced an important first-pass technique in reverse engineering—checking the printable strings embedded in a binary before opening a debugger or decompiler.

> **Lab safety:** This analysis was performed in an authorized TryHackMe lab. Only inspect binaries you own or have explicit permission to test.

## 1. Identify the binary

I began with the `file` command to learn what kind of executable I was dealing with:

```bash
file crackme2
```

```text
crackme2: ELF 32-bit LSB executable, Intel i386, version 1 (SYSV),
dynamically linked, interpreter /lib/ld-linux.so.2, for GNU/Linux 2.6.32,
BuildID[sha1]=b799eb348f3df15f6b08b3c37f8feb269a60aba7, not stripped
```

![The file command identifies crackme2 as a 32-bit Intel i386 ELF executable](/assets/reverse/crackme2/01-file.png)

The result shows that Crackme2 is a **32-bit**, dynamically linked ELF for the Intel i386 architecture. It is also **not stripped**, meaning useful symbols may still be available if deeper analysis becomes necessary.

## 2. Discover the expected input

Running the executable without any arguments displayed its usage message:

```bash
./crackme2
```

```text
Usage: ./crackme2 password
```

![Crackme2 displays a usage message asking for a password argument](/assets/reverse/crackme2/02-usage.png)

Unlike an interactive password prompt, the program expects the password directly after the executable name.

## 3. Test an incorrect password

I supplied a random value to confirm the program's behavior:

```bash
./crackme2 testtttt
```

```text
Access denied.
```

![Crackme2 rejects the test password with Access denied](/assets/reverse/crackme2/03-access-denied.png)

This confirmed that the binary compares the supplied argument against an expected value.

## 4. Choose the simplest inspection method

I considered loading the program into GDB:

```bash
gdb crackme2
```

![Preparing to inspect crackme2 with GDB](/assets/reverse/crackme2/04-gdb.png)

A debugger would work, but it was not yet necessary. Hard-coded messages and passwords often remain visible as printable text inside a beginner crackme, so I tried `strings` first.

## 5. Recover the password with strings

The `strings` utility extracts sequences of printable characters from binary data:

```bash
strings crackme2
```

Near the end of the output, several program messages appeared together:

```text
Usage: %s password
super_secret_password
Access denied.
Access granted.
```

![Strings output reveals the embedded super_secret_password value](/assets/reverse/crackme2/05-strings.png)

The value between the usage text and the access messages was the likely password:

```text
super_secret_password
```

This works because the program stores the comparison value as a plain printable string in the executable. `strings` does not understand program logic; it simply exposed the text that the program uses.

## 6. Submit the recovered password

I passed the recovered value as the required argument:

```bash
./crackme2 super_secret_password
```

The program accepted it and printed the flag:

```text
Access granted.
flag{if_i_submit_this_flag_then_i_will_get_points}
```

![Crackme2 accepts the recovered password and prints the challenge flag](/assets/reverse/crackme2/06-success.png)

## Terminal sandbox simulation

The complete solve can be replayed as a safe, display-only terminal transcript:

```console
➜  Reversing ELF file crackme2
crackme2: ELF 32-bit LSB executable, Intel i386, dynamically linked, not stripped

➜  Reversing ELF ./crackme2
Usage: ./crackme2 password

➜  Reversing ELF ./crackme2 testtttt
Access denied.

➜  Reversing ELF strings crackme2
Usage: %s password
super_secret_password
Access denied.
Access granted.

➜  Reversing ELF ./crackme2 super_secret_password
Access granted.
flag{if_i_submit_this_flag_then_i_will_get_points}
```

## What I learned

Crackme2 demonstrates why static triage should come before more expensive analysis:

1. `file` establishes the executable format and architecture.
2. Running the binary reveals how it expects input.
3. A deliberately incorrect value confirms the success/failure behavior.
4. `strings` can expose hard-coded values and messages without executing or disassembling the program.
5. GDB remains available when printable strings are not enough.

The main lesson is not that `strings` solves every binary. It is that reverse engineering works best when each tool answers a specific question—and the lightest tool that answers that question is often the right place to start.
