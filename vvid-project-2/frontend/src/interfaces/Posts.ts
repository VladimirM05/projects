interface Author {
	img: string;
	name: string;
	surname: string;
	date?: string;
	readTime: string;
}

export interface Posts {
	img: string;
	category: string;
	title: string;
	descr: string;
	author?: Author[];
}
