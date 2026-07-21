import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Playlist Track 01",
		artist: "Prosox0x0",
		cover: "/assets/images/prosox-avatar.png",
		url: "assets/music/url/dazbee.mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "Playlist Track 02",
		artist: "Prosox0x0",
		cover: "/assets/images/prosox-avatar.png",
		url: "assets/music/url/hitori.mp3",
		duration: 240,
	},
	{
		id: 3,
		title: "Playlist Track 03",
		artist: "Prosox0x0",
		cover: "/assets/images/prosox-avatar.png",
		url: "assets/music/url/xryx.mp3",
		duration: 180,
	},
	{
		id: 4,
		title: "Playlist Track 04",
		artist: "Prosox0x0",
		cover: "/assets/images/prosox-avatar.png",
		url: "assets/music/url/cl.mp3",
		duration: 200,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API = "";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
