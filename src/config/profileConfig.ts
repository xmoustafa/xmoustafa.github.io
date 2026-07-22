import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/prosox-avatar.webp", // Relative to /public because the path begins with '/'.
	name: "Prosox0x0",
	bio: "Penetration Tester · Security Researcher",
	typewriter: {
		enable: false, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "X",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/Prosox0x0",
		},
		{
			name: "LinkedIn",
			icon: "fa7-brands:linkedin-in",
			url: "https://linkedin.com/in/moustafa-abdelnabbi",
		},
		{
			name: "My Blog",
			icon: "fa7-solid:globe",
			url: "https://xmoustafa.github.io/",
		},
		{
			name: "Facebook",
			icon: "fa7-brands:facebook-f",
			url: "https://facebook.com/Moustafa.0x1337",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:moustafa.abdelnaby@outlook.com",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.com/users/1p_rootx",
		},
	],
};
