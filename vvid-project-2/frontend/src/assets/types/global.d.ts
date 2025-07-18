declare module '*.module.pcss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.webp' {
	const src: string;
	export default src;
}

declare module '*.mp3' {
	const src: string;
	export default src;
}

declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __ENV__: 'production' | 'development';
