---
title: "Bug Bounty Notes: Testing Business Logic Beyond the Scanner"
published: 2026-07-18
description: "A methodology for finding business-logic vulnerabilities by understanding workflows, trust boundaries, and state changes."
tags: [Bug Bounty, Web Exploitation]
category: Bug Bounty
author: Moustafa Mahmoud
draft: false
---

# Testing Business Logic

Automated scanners are useful for coverage, but they rarely understand why an application exists. Business-logic vulnerabilities live in that gap between technically valid requests and unintended outcomes.

## Model the Workflow

Choose one feature—registration, checkout, password recovery, invitations, or account upgrades—and write down its expected states. Identify who can perform each action, what data the server should trust, and which steps must happen in order.

Then test the assumptions:

- Can a step be skipped or repeated?
- Can one user reference another user's object?
- Does changing quantity, price, role, or status affect server-side decisions?
- Can an expired or already-used action be replayed?
- Do the web interface and API enforce the same rules?

## Prove Impact Carefully

A good proof of concept uses the minimum action necessary, stays within program rules, and clearly separates observation from impact. Capture requests, responses, account roles, and the exact state transition that should not have been possible.

The most valuable report explains the broken assumption and recommends where validation belongs on the server.

**Tools find patterns. Understanding the product finds broken trust.**
