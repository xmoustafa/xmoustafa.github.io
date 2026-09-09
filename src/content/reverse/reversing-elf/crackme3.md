---
title: "THM Reversing ELF Challenge: Crackme3"
description: "Finding a Base64-encoded password in Crackme3 and decoding it to pass the challenge."
topic: "Reversing ELF"
order: 3
draft: false
---

# THM Reversing ELF Challenge: Crackme3

Crackme3 continues the TryHackMe Reversing ELF series with a small but important twist. The password is still embedded in the binary, but this time it is not stored as readable plaintext. Instead, the program contains a **Base64-encoded** value that must be decoded before it can be used.

This challenge builds naturally on the workflow from Crackme2: identify the file, observe how it behaves, inspect its printable strings, and investigate anything that looks unusual.

> **Lab safety:** This analysis was performed in an authorized TryHackMe lab. Only inspect binaries you own or have explicit permission to test.

## 1. Identify the binary

I started with the usual file inspection:

```bash
file crackme3
```

```text
crackme3: ELF 32-bit LSB executable, Intel i386, version 1 (SYSV),
dynamically linked, interpreter /lib/ld-linux.so.2, for GNU/Linux 2.6.24,
BuildID[sha1]=4cf7250afb50109f0f1a01cc543fbf5ba6204a73, stripped
```

![The file command identifies crackme3 as a stripped 32-bit Intel i386 ELF executable](/assets/reverse/crackme3/01-file.png)

Like Crackme2, this is a **32-bit Intel i386 ELF**. The important difference is the final word: **stripped**. Symbol information has been removed, so function names would be less helpful if I later opened the program in a debugger or disassembler.

## 2. Confirm the password check

After the usual setup, I tested the executable with an obviously incorrect password:

```bash
./crackme3 hhhhhhhhhhhhhhhhhhh
```

```text
Come on, even my aunt Mildred got this one!
```

![Crackme3 rejects an incorrect password with a hinting message](/assets/reverse/crackme3/02-wrong-password.png)

The response confirmed that the program compares the command-line argument against an expected password.

## 3. Inspect printable strings

I then searched the binary for printable character sequences:

```bash
strings crackme3
```

The output included the program's usage text, success message, failure message, and one long string that stood out:

```text
ZjByX3kwdXJfNWVjMG5kX2xlNTVvbl91bmJhc2U2NF80bGxfN2gzXzdoMW5nNQ==
```

![Strings output highlights a Base64-encoded value embedded in crackme3](/assets/reverse/crackme3/03-strings.png)

The value looked like Base64 because it used the expected alphabet and ended with `==` padding. That is a useful clue, but not proof by itself—decoding it is the next test.

## 4. Decode the Base64 value

I opened [CyberChef](https://cyberchef.org/) and used the **From Base64** operation. The encoded value decoded to:

```text
f0r_y0ur_5ec0nd_le55on_unbase64_4ll_7h3_7h1ng5
```

This was the password expected by the program.

Base64 is **encoding, not encryption**. It changes binary data into a text-safe representation, but it provides no secrecy because anyone can reverse it without a key. The challenge uses it as a light layer of obfuscation.

The same decoding could also be performed locally:

```bash
echo 'ZjByX3kwdXJfNWVjMG5kX2xlNTVvbl91bmJhc2U2NF80bGxfN2gzXzdoMW5nNQ==' | base64 -d
```

## 5. Submit the decoded password

Finally, I passed the decoded text as the command-line argument:

```bash
./crackme3 f0r_y0ur_5ec0nd_le55on_unbase64_4ll_7h3_7h1ng5
```

```text
Correct password!
```

![Crackme3 accepts the decoded password and prints Correct password](/assets/reverse/crackme3/04-correct-password.png)

Unlike the earlier challenges, the observed output here is the success message itself; no separate flag was shown in the supplied terminal capture.

## Terminal sandbox simulation

The complete solve can be replayed as a safe, display-only transcript:

```console
➜  Reversing ELF file crackme3
crackme3: ELF 32-bit LSB executable, Intel i386, dynamically linked, stripped

➜  Reversing ELF ./crackme3 hhhhhhhhhhhhhhhhhhh
Come on, even my aunt Mildred got this one!

➜  Reversing ELF strings crackme3
ZjByX3kwdXJfNWVjMG5kX2xlNTVvbl91bmJhc2U2NF80bGxfN2gzXzdoMW5nNQ==
Correct password!

➜  Reversing ELF echo 'ZjByX3kwdXJfNWVjMG5kX2xlNTVvbl91bmJhc2U2NF80bGxfN2gzXzdoMW5nNQ==' | base64 -d
f0r_y0ur_5ec0nd_le55on_unbase64_4ll_7h3_7h1ng5

➜  Reversing ELF ./crackme3 f0r_y0ur_5ec0nd_le55on_unbase64_4ll_7h3_7h1ng5
Correct password!
```

## What I learned

Crackme3 adds one more step to the basic static-analysis workflow:

1. Use `file` to identify the executable and notice whether it is stripped.
2. Run the program with test input to understand its interface and failure behavior.
3. Use `strings` to find embedded messages and suspicious data.
4. Recognize common encodings such as Base64 and verify them by decoding.
5. Test the decoded result against the program.

The key lesson is to treat unusual strings as evidence. A value that looks meaningless at first may simply be encoded—and recognizing the pattern can avoid unnecessary debugger work.
