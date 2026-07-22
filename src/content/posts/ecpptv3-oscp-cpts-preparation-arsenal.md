---
title: "eCPPTv3, OSCP & CPTS Preparation Arsenal"
published: 2026-07-22
description: "A structured lab roadmap for building the enumeration, exploitation, pivoting, privilege-escalation, Active Directory, and reporting skills tested across eCPPTv3, OSCP, and CPTS."
tags: [Penetration Testing, Labs, OSCP, CPTS, eCPPT]
category: Labs
author: Moustafa Mahmoud
draft: false
---

# eCPPTv3, OSCP & CPTS Preparation Arsenal

Preparing for a practical penetration-testing certification is not about collecting the largest possible list of vulnerable machines. It is about choosing labs deliberately, documenting a repeatable methodology, and recognizing the same attack pattern when the technology changes.

This field guide organizes practice targets around the core capabilities shared by **eCPPTv3**, **OSCP**, and **CPTS**. The underlying machine list was curated by **N1NJ10** and is available in the complete [Offsec Practice Labs repository](https://github.com/N1NJ10/Offsec-Practice-Labs).

> **LEGAL // LAB USE ONLY**  
> Practice only against systems you own or platforms that explicitly authorize testing. Never scan or attack an unknown public target.

## Mission Profile

| Track | Primary emphasis | Practice objective |
|---|---|---|
| **eCPPTv3** | Methodology, web testing, exploitation, pivoting, and reporting | Build a complete engagement workflow and explain the evidence clearly. |
| **OSCP** | Enumeration discipline, exploitation, privilege escalation, and Active Directory | Reach a working solution under time pressure without losing structure. |
| **CPTS** | Broad technical depth, modern infrastructure, pivoting, AD, and professional reporting | Understand why each technique works and connect findings across a network. |

## Mission Control

> **ARSENAL STATUS // READY**  
> **193** authorized training resources · **9** skill domains · **42** detailed tables · **0** shortened links

This page is designed as an operator's field index. Start with the domain that matches your weakest skill, record evidence for every target, and advance only when you can reproduce the result from a clean environment without a walkthrough.

### Coverage Map

| ID | Domain | Resources | Primary objective | Jump |
|---:|---|---:|---|---|
| **01** | Resource Development & Initial Access | **34** | Enumeration, footholds, and shell access | [Open domain](#01--resource-development--initial-access) |
| **02** | Web Application Penetration Testing | **44** | Manual validation and exploit chaining | [Open domain](#02--web-application-penetration-testing) |
| **03** | Network Security & Pivoting | **13** | Tunneling, routing, and lateral movement | [Open domain](#03--network-security--pivoting) |
| **04** | Exploit Development | **16** | Stack control and reliable exploit scripting | [Open domain](#04--exploit-development) |
| **05** | Post-Exploitation & Privilege Escalation | **21** | Linux and Windows privilege paths | [Open domain](#05--post-exploitation--privilege-escalation) |
| **06** | Active Directory & Red Teaming | **23** | Identity attack paths and domain operations | [Open domain](#06--active-directory--red-teaming) |
| **07** | Malware Analysis | **7** | Static, dynamic, and behavioral analysis | [Open domain](#07--malware-analysis) |
| **08** | Reverse Engineering | **10** | Assembly, decompilation, and debugging | [Open domain](#08--reverse-engineering) |
| **09** | Hard CTF Challenges | **25** | Full-chain problem solving under pressure | [Open domain](#09--hard-ctf--challenges) |

### Access & Difficulty Legend

| Signal | Meaning | Operator guidance |
|---|---|---|
| **Free** | No paid subscription listed | Confirm current platform terms before starting. |
| **Paid / VIP** | Subscription or course access may be required | Prioritize only if it fills a specific skills gap. |
| **Beg / Easy** | Guided fundamentals | Build clean notes and a repeatable checklist. |
| **Int / Medium** | Multi-step attack chain | Time-box hypotheses and document pivots. |
| **Hard / Insane** | Deep or intentionally deceptive path | Attempt only after reproducing the core workflow independently. |

> **START SIGNAL**  
> New to the roadmap? Begin with **01 Initial Access**, continue through **02 Web**, then alternate **05 Privilege Escalation** targets with full boot-to-root machines. Add **03 Pivoting** and **06 Active Directory** only after your enumeration notes are consistent.

## Full Arsenal // 193 Linked Resources

The directory below includes every machine, room, course, and resource from the upstream arsenal. Platform availability and pricing can change; verify the current terms before beginning a lab.

### 01 // Resource Development & Initial Access
*Focus: Enumeration, Brute-force, Shells, Old School Exploits.*

| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Kioptrix Level 1** | Beg | SMB, Apache, mod_ssl | Free | [Download](https://www.vulnhub.com/entry/kioptrix-level-1-1,22/) |
| **Kioptrix Level 1.1** | Beg | SQL Injection, RCE | Free | [Download](https://www.vulnhub.com/entry/kioptrix-level-11-2,23/) |
| **Kioptrix Level 1.2** | Beg | LotusCMS | Free | [Download](https://www.vulnhub.com/entry/kioptrix-level-12-3,24/) |
| **Kioptrix Level 1.3** | Beg | SQLi, Restricted Shell | Free | [Download](https://www.vulnhub.com/entry/kioptrix-level-13-4,25/) |
| **Kioptrix 2014** | Int | Web Exploits | Free | [Download](https://www.vulnhub.com/entry/kioptrix-2014-5,62/) |
| **Stapler 1** | Int | SMB Enum, Password Spraying | Free | [Download](https://www.vulnhub.com/entry/stapler-1,150/) |
| **SickOs 1.1** | Int | Squid Proxy, Shellshock | Free | [Download](https://www.vulnhub.com/entry/sickos-11,132/) |
| **SickOs 1.2** | Int | PUT Method, Cron Jobs | Free | [Download](https://www.vulnhub.com/entry/sickos-12,144/) |
| **Basic Pentesting 1** | Beg | Web to Root | Free | [Download](https://www.vulnhub.com/entry/basic-pentesting-1,216/) |
| **Tr0ll 1** | Int | FTP, Binary Analysis | Free | [Download](https://www.vulnhub.com/entry/tr0ll-1,100/) |
| **Tr0ll 2** | Hard | Deep Rabbit Holes | Free | [Download](https://www.vulnhub.com/entry/tr0ll-2,107/) |
| **LazySysAdmin 1** | Beg | Info Disclosure | Free | [Download](https://www.vulnhub.com/entry/lazysysadmin-1,205/) |
| **Bulldog 1** | Int | Django, Hidden Files | Free | [Download](https://www.vulnhub.com/entry/bulldog-1,211/) |
| **RickdiculouslyEasy 1** | Beg | Multiple Paths | Free | [Download](https://www.vulnhub.com/entry/rickdiculouslyeasy-1,207/) |
| **SkyTower 1** | Int | SSH Tunneling | Free | [Download](https://www.vulnhub.com/entry/skytower-1,96/) |
| **VulnOS 2** | Int | General Pentest | Free | [Download](https://www.vulnhub.com/entry/vulnos-2,147/) |
| **HackLAB: Vulnix** | Int | General Pentest | Free | [Download](https://www.vulnhub.com/entry/hacklab-vulnix,48/) |
| **pWnOS 2.0** | Int | Old School | Free | [Download](https://www.vulnhub.com/entry/pwnos-20-pre-release,34/) |
| **Prime 1** | Int | General Pentest | Free | [Download](https://www.vulnhub.com/entry/prime-1,358/) |
| **NullByte** | Int | General Pentest | Free | [Download](https://www.vulnhub.com/entry/nullbyte-1,126/) |

**TryHackMe Labs (Initial Access)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Nmap Live Host Discovery** | Network Scanning | Free | [THM Link](https://tryhackme.com/room/nmap) |
| **Hydra** | Brute-forcing | Free | [THM Link](https://tryhackme.com/room/hydra) |
| **Blue** | EternalBlue (MS17-010) | Free | [THM Link](https://tryhackme.com/room/blue) |
| **Vulnversity** | Upload Vulnerabilities | Free | [THM Link](https://tryhackme.com/room/vulnversity) |
| **Bounty Hacker** | FTP/SSH Attacks | Free | [THM Link](https://tryhackme.com/room/cowboyhacker) |

**HackMyVM Labs (Initial Access)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Gift** | Easy | Basic Enumeration | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Gift) |
| **Friendly** | Easy | FTP/SSH | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Friendly) |
| **EasyPeasy** | Easy | Web/Shells | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=EasyPeasy) |
| **Unbaked Pie** | Medium | Docker/Pivoting | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=UnbakedPie) |

**HackingHub Labs (Initial Access)**
| Mission Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Mission 1** | Easy | Basic Recon | Free | [Start Mission](https://hackinghub.io/missions) |
| **Mission 2** | Medium | Foothold | Free | [Start Mission](https://hackinghub.io/missions) |

**HackTheBox Labs (Initial Access)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Lame** | Easy | Enumeration/Samba | VIP | [HTB Link](https://app.hackthebox.com/machines/Lame) |
| **Beep** | Easy | Web/Asterisk | VIP | [HTB Link](https://app.hackthebox.com/machines/Beep) |
| **Cronos** | Medium | DNS/Web | VIP | [HTB Link](https://app.hackthebox.com/machines/Cronos) |

### 02 // Web Application Penetration Testing
*Focus: SQLi, XSS, LFI, RCE, Manual Exploitation.*

| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Mr-Robot 1** | Int | Wordpress, Keys, Decoding | Free | [Download](https://www.vulnhub.com/entry/mr-robot-1,151/) |
| **PwnLab: init** | Int | LFI, PHP Filters, Cmd Inj | Free | [Download](https://www.vulnhub.com/entry/pwnlab-init,158/) |
| **WebSploit2018** | Int | Vulnerable Apps Collection | Free | [Download](https://www.vulnhub.com/entry/websploit-2018,245/) |
| **Billu: b0x** | Int | SQLi, RCE, LFI | Free | [Download](https://www.vulnhub.com/entry/billu-b0x,188/) |
| **FristiLeaks 1.3** | Int | LFI to Shell, PrivEsc | Free | [Download](https://www.vulnhub.com/entry/fristileaks-13,133/) |
| **VulnCMS 1** | Beg | CMS Enumeration | Free | [Download](https://www.vulnhub.com/entry/vulncms-1,169/) |
| **Pinkys Palace v1** | Hard | SQLi, Dictionary Attacks | Free | [Download](https://www.vulnhub.com/entry/pinkys-palace-v1,225/) |
| **Pinkys Palace v2** | Hard | Proxy Tunneling, SQLi | Free | [Download](https://www.vulnhub.com/entry/pinkys-palace-v2,229/) |
| **Hacksudo: Thor** | Int | CGI-bin, Shellshock | Free | [Download](https://www.vulnhub.com/entry/hacksudo-thor,733/) |
| **Deathnote 1** | Int | LFI, RCE, Upload | Free | [Download](https://www.vulnhub.com/entry/deathnote-1,739/) |
| **Breach 1.0** | Int | Traffic Analysis, SSL | Free | [Download](https://www.vulnhub.com/entry/breach-1,152/) |
| **Breach 2.1** | Int | Traffic Analysis | Free | [Download](https://www.vulnhub.com/entry/breach-21,159/) |
| **Raven 1** | Int | Wordpress, PHPMailer | Free | [Download](https://www.vulnhub.com/entry/raven-1,256/) |
| **Raven 2** | Int | PHPMailer RCE | Free | [Download](https://www.vulnhub.com/entry/raven-2,269/) |
| **DC-9** | Int | SQLi Search, LFI | Free | [Download](https://www.vulnhub.com/entry/dc-9,412/) |
| **DevGuru 1** | Int | Web Focus | Free | [Download](https://www.vulnhub.com/entry/devguru-1,620/) |
| **Photographer 1** | Beg | Web/SMB | Free | [Download](https://www.vulnhub.com/entry/photographer-1,519/) |
| **W34kn3ss 1** | Int | Web/PrivEsc | Free | [Download](https://www.vulnhub.com/entry/w34kn3ss-1,270/) |
| **GoldenEye 1** | Hard | POP3, Compilation | Free | [Download](https://www.vulnhub.com/entry/goldeneye-1,240/) |
| **LemonSqueezy** | Int | Web | Free | [Download](https://www.vulnhub.com/entry/lemonsqueezy-1,473/) |

**TryHackMe Labs (Web App)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **OWASP Top 10** | Critical Web Vulns | Free | [THM Link](https://tryhackme.com/room/owasptop10) |
| **SQL Injection Lab** | Manual/Automated SQLi | Free | [THM Link](https://tryhackme.com/room/sqlilab) |
| **Burp Suite Basics** | Proxy Interception | Paid | [THM Link](https://tryhackme.com/room/burpsuitebasics) |
| **OWASP Juice Shop** | Modern Web Exploitation | Free | [THM Link](https://tryhackme.com/room/owaspjuiceshop) |
| **File Inclusion** | LFI/RFI/Path Traversal | Paid | [THM Link](https://tryhackme.com/room/fileinc) |

**HackMyVM Labs (Web App)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Registry** | Medium | Docker Registry/Web | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Registry) |
| **Base** | Easy | Basic Web | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Base) |
| **Site** | Medium | Web Exploitation | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Site) |
| **Panel** | Easy | Admin Panel Bypass | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Panel) |

**PortSwigger Academy Labs (Web App)**
| Topic | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **SQL Injection (All Labs)** | Manual SQLi Mastery | Free | [Start Lab](https://portswigger.net/web-security/sql-injection) |
| **Cross-Site Scripting (XSS)** | Reflected, Stored, DOM | Free | [Start Lab](https://portswigger.net/web-security/cross-site-scripting) |
| **Cross-Site Request Forgery** | CSRF Token Bypass | Free | [Start Lab](https://portswigger.net/web-security/csrf) |
| **XML External Entity (XXE)** | Injection & Retrieval | Free | [Start Lab](https://portswigger.net/web-security/xxe) |
| **Server-Side Request Forgery** | SSRF & Cloud Metadata | Free | [Start Lab](https://portswigger.net/web-security/ssrf) |
| **Command Injection** | OS Command Execution | Free | [Start Lab](https://portswigger.net/web-security/os-command-injection) |
| **Directory Traversal** | File Path Traversal | Free | [Start Lab](https://portswigger.net/web-security/file-path-traversal) |
| **Authentication & Logic** | Bypassing Controls | Free | [Start Lab](https://portswigger.net/web-security/authentication) |

**HackingHub Labs (Web App)**
| Mission Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Hands-On Web Exploitation Course** | Advanced | Various Web Vulns | Paid | [Course Link](https://hackinghub.io/courses) |
| **Nuclei Masterclass** | Advanced | Vulnerability Scanning | Paid | [Course Link](https://hackinghub.io/courses) |
| **Blind XSS Masterclass** | Advanced | XSS | Paid | [Course Link](https://hackinghub.io/courses) |
| **Web App Mission 1** | Easy | Common Web Vulns | Free | [Start Mission](https://hackinghub.io/missions) |
| **Web App Mission 2** | Medium | Advanced Web Vulns | Free | [Start Mission](https://hackinghub.io/missions) |

**HackTheBox Labs (Web App)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Horizontall** | Easy | Strapi CMS | VIP | [HTB Link](https://app.hackthebox.com/machines/Horizontall) |
| **Pressed** | Hard | WordPress/XML-RPC | VIP | [HTB Link](https://app.hackthebox.com/machines/Pressed) |

### 03 // Network Security & Pivoting
*Focus: Recon, Lateral Movement, Tunneling. (Requires Lab Setup)*

| Machine Name | Setup | Cost | Link |
| :--- | :--- | :--- | :--- |
| **WinterMute 1** | **Best for Pivoting.** Dual-VM lab. | Free | [Download](https://www.vulnhub.com/entry/wintermute-1,175/) |
| **myHouse7** | Docker/Subnet pivoting. | Free | [Download](https://www.vulnhub.com/entry/myhouse7,466/) |
| **Wpwn 1** | Dual NICs designed for pivoting. | Free | [Download](https://www.vulnhub.com/entry/wpwn-1,537/) |
| **Symfonos Series** | Good for internal service chains. | Free | [Download](https://www.vulnhub.com/?q=symfonos) |
| **Metasploitable 3** | Setup as dual-homed target. | Free | [GitHub](https://github.com/rapid7/metasploitable3) |

**TryHackMe Labs (Pivoting)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Wreath** | Full Pivoting Network (Must Do) | Free* | [THM Link](https://tryhackme.com/room/wreath) |
| **Pivoting** | Proxychains, sshuttle, Chisel | Paid | [THM Link](https://tryhackme.com/room/pivoting) |
| **Lateral Movement** | Moving through Windows | Paid | [THM Link](https://tryhackme.com/room/lateralmovement) |

**HackMyVM Labs (Pivoting)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **WinterMute** | Hard | (Clone of VulnHub Lab) | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=WinterMute) |
| **Unbaked Pie** | Medium | Docker Pivoting | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=UnbakedPie) |
| **Machine** | Hard | Internal Network | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Machine) |

**HackTheBox Labs (Pivoting)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Reddish** | Insane | Chisel/Socat Pivoting | VIP | [HTB Link](https://app.hackthebox.com/machines/Reddish) |
| **Vault** | Medium | SSH Tunneling | VIP | [HTB Link](https://app.hackthebox.com/machines/Vault) |

### 04 // Exploit Development
*Focus: Stack Buffer Overflow.*

| Machine Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Brainpan 1** | **The King of BoF.** Do this until you dream in hex. | Free | [Download](https://www.vulnhub.com/entry/brainpan-1,51/) |
| **Brainpan 2** | Advanced Binary Exploitation. | Free | [Download](https://www.vulnhub.com/entry/brainpan-2,56/) |
| **Stack Overflows for Beginners** | Linear progression BoF. | Free | [Download](https://www.vulnhub.com/entry/stack-overflows-for-beginners-101,659/) |
| **Smasher** | Web to Buffer Overflow. | Free | [Download](https://www.vulnhub.com/entry/smasher-1,398/) |
| **Buffer Overflow Prep** | Tib3rius Room (TryHackMe). | Free | [THM Link](https://tryhackme.com/room/bufferoverflowprep) |
| **Gatekeeper** | BoF Practice. | Free | [THM Link](https://tryhackme.com/room/gatekeeper) |
| **Intro To Pwntools** | Scripting Exploits. | Free | [THM Link](https://tryhackme.com/room/introtopwntools) |

**TryHackMe Labs (Exploit Dev)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Buffer Overflow Prep** | OSCP Style Stack Overflow | Free | [THM Link](https://tryhackme.com/room/bufferoverflowprep) |
| **Gatekeeper** | Binary Exploitation | Free | [THM Link](https://tryhackme.com/room/gatekeeper) |
| **Brainpan** | THM Port of VulnHub Machine | Free | [THM Link](https://tryhackme.com/room/brainpan) |
| **Sudo Buffer Overflow** | CVE-2019-18634 | Free | [THM Link](https://tryhackme.com/room/sudovulnsbof) |

**HackMyVM Labs (Exploit Dev)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Buffer** | Medium | Stack Overflow | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Buffer) |
| **Overflow** | Medium | Binary Exploitation | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Overflow) |
| **Brainpan** | Hard | (Clone/Similar) | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Brainpan) |

**HackTheBox Labs (Exploit Dev)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **October** | Medium | Buffer Overflow (ASLR/NX) | VIP | [HTB Link](https://app.hackthebox.com/machines/October) |
| **Overflow** | Hard | Buffer Overflow | VIP | [HTB Link](https://app.hackthebox.com/machines/Overflow) |

### 05 // Post-Exploitation & Privilege Escalation
*Focus: Linux PrivEsc, Cron jobs, SUID, Kernel exploits.*

| Machine Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Lin.Security** | Dedicated PrivEsc Practice. | Free | [Download](https://www.vulnhub.com/entry/linsecurity-1,244/) |
| **Escalate_Linux 1** | 12+ Methods of Escalation. | Free | [Download](https://www.vulnhub.com/entry/escalate_linux-1,323/) |
| **DC-1** | SUID Abuse. | Free | [Download](https://www.vulnhub.com/entry/dc-1,292/) |
| **DC-2** | Restricted Shell. | Free | [Download](https://www.vulnhub.com/entry/dc-2,311/) |
| **DC-3** | Kernel Exploit. | Free | [Download](https://www.vulnhub.com/entry/dc-3,312/) |
| **DC-4** | Sudo Abuse. | Free | [Download](https://www.vulnhub.com/entry/dc-4,313/) |
| **DC-5** | Screen Exploit. | Free | [Download](https://www.vulnhub.com/entry/dc-5,314/) |
| **DC-6** | Script Abuse. | Free | [Download](https://www.vulnhub.com/entry/dc-6,315/) |
| **Tommy Boy 1** | Sudo Abuse. | Free | [Download](https://www.vulnhub.com/entry/tommy-boy-1,157/) |
| **Temple of Doom** | Node.js / Serialization. | Free | [Download](https://www.vulnhub.com/entry/temple-of-doom-1,243/) |

**TryHackMe Labs (PrivEsc)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Linux PrivEsc** | Full Linux Escalation Course | Paid | [THM Link](https://tryhackme.com/room/linuxprivesc) |
| **Windows PrivEsc** | Full Windows Escalation Course | Paid | [THM Link](https://tryhackme.com/room/windows10privesc) |
| **PrivEsc Arena** | Multi-vector Practice | Paid | [THM Link](https://tryhackme.com/room/linuxprivescarena) |
| **Post-Exploitation Basics** | Mimikatz, Bloodhound, Powerview | Paid | [THM Link](https://tryhackme.com/room/postexploit) |

**HackMyVM Labs (PrivEsc)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **PrivEsc** | Medium | Multi-vector Escalation | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=PrivEsc) |
| **Escalate** | Medium | SUID/Sudo Abuse | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Escalate) |
| **Toxin** | Medium | Kernel Exploits | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Toxin) |

**HackingHub Labs (PrivEsc)**
| Mission Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Linux for Hackers Course** | Intermediate | Linux Skills | Paid | [Course Link](https://hackinghub.io/courses) |
| **PrivEsc Mission** | Medium | Linux PrivEsc | Free | [Start Mission](https://hackinghub.io/missions) |

**HackTheBox Labs (PrivEsc)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Jeeves** | Medium | Windows/RottenPotato | VIP | [HTB Link](https://app.hackthebox.com/machines/Jeeves) |
| **Return** | Easy | Windows/Server Operators | VIP | [HTB Link](https://app.hackthebox.com/machines/Return) |

### 06 // Active Directory & Red Teaming
*Focus: Kerberoasting, AS-REP, Domain Dominance.*

> **WARNING:** VulnHub is weak for AD. Use these resources instead.

| Resource Name | Type | Cost | Link |
| :--- | :--- | :--- | :--- |
| **[GOAD](https://github.com/Orange-Cyberdefense/GOAD)** | Full Lab | Free | [GitHub](https://github.com/Orange-Cyberdefense/GOAD) |
| **[VulnLab](https://vulnlab.com/)** | Cloud Lab | Paid | [Website](https://vulnlab.com/) |
| **Metasploitable 3** | Local Lab | Free | [GitHub](https://github.com/rapid7/metasploitable3) |
| **HTB ProLabs** | Cloud Lab | Paid | [Website](https://www.hackthebox.com/hacker/pro-labs) |
| **Dante** | Pro Lab | Paid | [HTB Link](https://app.hackthebox.com/prolabs/Dante) |
| **RastaLabs** | Pro Lab | Paid | [HTB Link](https://app.hackthebox.com/prolabs/RastaLabs) |
| **Offshore** | Pro Lab | Paid | [HTB Link](https://app.hackthebox.com/prolabs/Offshore) |
| **Zephyr** | Pro Lab | Paid | [HTB Link](https://app.hackthebox.com/prolabs/Zephyr) |

**TryHackMe Labs (Active Directory)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Active Directory Basics** | AD Fundamentals | Free | [THM Link](https://tryhackme.com/room/activedirectorybasics) |
| **Attacktive Directory** | Kerberos, Impacket, Domain Admin | Free | [THM Link](https://tryhackme.com/room/attacktivedirectory) |
| **Breaching Active Directory** | Initial Access in AD | Free | [THM Link](https://tryhackme.com/room/breachingad) |
| **Lateral Movement in AD** | Spreading through the Domain | Paid | [THM Link](https://tryhackme.com/room/lateralmovement) |
| **Post-Exploitation Basics** | Persistence & Looting | Paid | [THM Link](https://tryhackme.com/room/postexploit) |

**HackMyVM Labs (Active Directory)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **AD** | Hard | Basic AD Chain | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=AD) |
| **Domain** | Hard | Kerberos Attacks | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Domain) |
| **Controller** | Insane | Full Forest Compromise | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?vm=Controller) |

**HackingHub Labs (Active Directory)**
| Mission Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **AD Mission** | Hard | AD Exploitation | Free | [Start Mission](https://hackinghub.io/missions) |
| **AD Course** | Advanced | Full AD Compromise | Paid | [Course Link](https://hackinghub.io/courses) |

**HackTheBox Labs (Active Directory)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Active** | Easy | Kerberoasting/GPP | VIP | [HTB Link](https://app.hackthebox.com/machines/Active) |
| **Blackfield** | Hard | Forensics/AD | VIP | [HTB Link](https://app.hackthebox.com/machines/Blackfield) |
| **Sauna** | Easy | AD Enumeration | VIP | [HTB Link](https://app.hackthebox.com/machines/Sauna) |
| **Monteverde** | Medium | Azure AD Traits | VIP | [HTB Link](https://app.hackthebox.com/machines/Monteverde) |
| **Sizzle** | Hard | Deep AD | VIP | [HTB Link](https://app.hackthebox.com/machines/Sizzle) |

### 07 // Malware Analysis

**TryHackMe Labs (Malware Analysis)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **History of Malware** | Intro to Malware | Free | [THM Link](https://tryhackme.com/room/historyofmalware) |
| **MAL: Malware Introductory** | Basic Concepts | Free | [THM Link](https://tryhackme.com/room/malmalintroductory) |
| **Basic Malware RE** | Reversing Fundamentals | Free | [THM Link](https://tryhackme.com/room/basicmalwarere) |
| **MAL: Researching** | Analysis & Research | Free | [THM Link](https://tryhackme.com/room/malresearching) |
| **Mobile Malware Analysis** | Android/iOS Malware | Free | [THM Link](https://tryhackme.com/room/mma) |
| **Carnage** | C2 Simulation | Free | [THM Link](https://tryhackme.com/room/c2carnage) |
| **Dunkle Materie** | Packed Malware | Free | [THM Link](https://tryhackme.com/room/dunklematerieptxc9) |

### 08 // Reverse Engineering

**TryHackMe Labs (Reverse Engineering)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Intro to x86-64** | Assembly Basics | Free | [THM Link](https://tryhackme.com/room/introtox8664) |
| **Windows x64 Assembly** | Windows Assembly | Free | [THM Link](https://tryhackme.com/room/win64assembly) |
| **Reverse Engineering** | RE Fundamentals | Free | [THM Link](https://tryhackme.com/room/reverseengineering) |
| **Reversing ELF** | Linux ELF Binaries | Free | [THM Link](https://tryhackme.com/room/reverselfiles) |
| **JVM Reverse Engineering** | Java Bytecode | Free | [THM Link](https://tryhackme.com/room/jvmreverseengineering) |
| **CC: Radare2** | Radare2 Tool | Free | [THM Link](https://tryhackme.com/room/ccradare2) |
| **CC: Ghidra** | Ghidra Tool | Free | [THM Link](https://tryhackme.com/room/ccghidra) |
| **Aster** | Decompiling Python | Free | [THM Link](https://tryhackme.com/room/aster) |
| **Classic Passwd** | Binary Reversing | Free | [THM Link](https://tryhackme.com/room/classicpasswd) |
| **REloaded** | Various Challenges | Free | [THM Link](https://tryhackme.com/room/reloaded) |

### 09 // Hard CTF / Challenges

**VulnHub Labs (Hard CTF)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Empire: Breakout** | Hard | Adv. PrivEsc | Free | [Download](https://www.vulnhub.com/entry/empire-breakout,181/) |
| **doubletrouble: 1** | Hard | Misconfigs/PrivEsc | Free | [Download](https://www.vulnhub.com/entry/doubletrouble-1,162/) |
| **Vikings: 1** | Hard | Lateral Movement | Free | [Download](https://www.vulnhub.com/entry/vikings-1,208/) |
| **Hacksudo: FOG** | Hard | Web/Linux PrivEsc | Free | [Download](https://www.vulnhub.com/entry/hacksudo-fog,732/) |
| **Hacksudo: Thor** | Hard | Unique PrivEsc | Free | [Download](https://www.vulnhub.com/entry/hacksudo-thor,733/) |
| **Metasploitable 3** | Hard | Windows Exploit | Free | [GitHub](https://github.com/rapid7/metasploitable3) |
| **SickOS 1.2** | Hard | Masterful Exploitation | Free | [Download](https://www.vulnhub.com/entry/sickos-12,144/) |
| **Tr0ll 2** | Hard | Deep Exploitation | Free | [Download](https://www.vulnhub.com/entry/tr0ll-2,107/) |
| **Temple of Doom** | Hard | Obscure Puzzles | Free | [Download](https://www.vulnhub.com/entry/temple-of-doom-1,243/) |

**HackMyVM Labs (Hard CTF)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **Insane** | Insane | Complex Challenges | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?difficulty=insane) |
| **Hard** | Hard | Advanced Exploits | Free | [HMV Link](https://hackmyvm.eu/machines/machine.php?difficulty=hard) |

**TryHackMe Labs (Hard CTF)**
| Room Name | Focus | Cost | Link |
| :--- | :--- | :--- | :--- |
| **Motunui** | Boot2Root | Free | [THM Link](https://tryhackme.com/room/motunui) |
| **Spring** | Web App Hacking | Paid | [THM Link](https://tryhackme.com/room/spring) |
| **Brainpan 1** | Buffer Overflow | Paid | [THM Link](https://tryhackme.com/room/brainpan) |
| **Borderlands** | Boot2Root | Free | [THM Link](https://tryhackme.com/room/borderlands) |
| **Daily Bugle** | CMS Exploitation | Paid | [THM Link](https://tryhackme.com/room/dailybugle) |
| **Retro** | Boot2Root | Free | [THM Link](https://tryhackme.com/room/retro) |
| **Jeff** | Boot2Root | Paid | [THM Link](https://tryhackme.com/room/jeff) |
| **Iron Corp** | Web/Linux Exploit | Paid | [THM Link](https://tryhackme.com/room/ironcorp) |
| **Ra** | AD/Internal Network | Paid | [THM Link](https://tryhackme.com/room/ra) |
| **Internal** | Pivoting/AD | Paid | [THM Link](https://tryhackme.com/room/internal) |
| **Squid Game** | Malware/RE | Paid | [THM Link](https://tryhackme.com/room/squidgameroom) |
| **VulnNet: dotjar** | Java Deserialization | Paid | [THM Link](https://tryhackme.com/room/vulnnetdotjar) |

**HackTheBox Labs (Hard CTF)**
| Machine Name | Difficulty | Focus | Cost | Link |
| :--- | :--- | :--- | :--- | :--- |
| **All Hard Machines** | Hard | Various | VIP | [HTB Link](https://app.hackthebox.com/machines?difficulty=Hard) |
| **All Insane Machines** | Insane | Various | VIP | [HTB Link](https://app.hackthebox.com/machines?difficulty=Insane) |

---

## Recommended Progression

```text
Phase 1  Enumeration fundamentals        10-15 machines
Phase 2  Web exploitation                PortSwigger + 10 machines
Phase 3  Linux/Windows privilege paths   10-15 machines
Phase 4  Pivoting and internal networks  3-5 multi-host labs
Phase 5  Active Directory                1 full lab + guided paths
Phase 6  Mock engagements                Timed, no walkthroughs
Phase 7  Reporting                       Rebuild evidence and remediation
```

For each phase, use three passes:

1. **Learn:** references are allowed; understand every step.
2. **Reproduce:** repeat from a clean snapshot using only your notes.
3. **Validate:** solve a comparable target without a walkthrough.

## Lab Tracking Template

```markdown
# Target Name

## Scope
- Platform:
- Target address:
- Authorization/lab rules:

## Enumeration
- Exposed services:
- Web technologies:
- High-value observations:

## Hypotheses
1. Observation -> possible weakness -> validation step
2. Observation -> possible weakness -> validation step

## Foothold
- Entry point:
- Evidence:
- Security context:

## Privilege Escalation
- Misconfiguration or vulnerability:
- Validation:
- Result:

## Lessons & Remediation
- What I missed:
- What I would automate:
- How a defender should fix or detect this path:
```

## Operational Rules

- Time-box rabbit holes and return to enumeration.
- Keep commands beside their outputs and timestamps.
- Separate facts, hypotheses, and confirmed findings.
- Revert vulnerable machines after every exercise.
- Do not publish platform flags, credentials, or prohibited exam material.
- Write remediation while the technical evidence is still fresh.

## Complete Arsenal & Attribution

This article is a study-oriented map derived from the curated machine and resource collection maintained by **N1NJ10**. Availability, pricing, and platform access can change, so consult the upstream repository for the complete list and current links:

**[Open N1NJ10/Offsec-Practice-Labs on GitHub](https://github.com/N1NJ10/Offsec-Practice-Labs)**

> A certificate is the checkpoint. The real objective is a methodology you can reproduce, defend, and explain.
