import news1 from '@/assets/images/news-1.jpg';
import news2 from '@/assets/images/news-2.jpg';
import news3 from '@/assets/images/news-3.jpg';
import authorIcon from '@/assets/images/author-icon.jpg';
import authorIcon2 from '@/assets/images/author-icon-2.jpg';

interface NewsPost {
	image: string;
	alt: string;
	category: string;
	title: string;
	text: string;
	authorIcon: string;
	authorName: string;
	date: string;
	readTime: string;
}

const newsPosts: NewsPost[] = [
	{
		image: news1,
		alt: 'Пост 1',
		category: 'Новости',
		title: 'Регистрация открыта!',
		text: 'Обеспечьте себе место на конференции этого года уже сегодня.',
		authorIcon: authorIcon,
		authorName: 'Иванов В.',
		date: '11 Jan 2023',
		readTime: '5 min read',
	},
	{
		image: news2,
		alt: 'Пост 2',
		category: 'Обновление',
		title: 'Объявлен основной докладчик',
		text: 'Присоединяйтесь к нам, чтобы получить информацию от лидеров отрасли на конференции.',
		authorIcon: authorIcon,
		authorName: 'Иванов В.',
		date: '12 Jan 2023',
		readTime: '4 min read',
	},
	{
		image: news3,
		alt: 'Пост 3',
		category: 'Анонс',
		title: 'Семинары будут доступны в ближайшее время',
		text: 'Посетите практические занятия, чтобы повысить свою квалификацию на конференции.',
		authorIcon: authorIcon2,
		authorName: 'Пачули С.',
		date: '13 Jan 2023',
		readTime: '6 min read',
	},
	{
		image: news1,
		alt: 'Пост 4',
		category: 'Новости',
		title: 'Регистрация открыта!',
		text: 'Обеспечьте себе место на конференции этого года уже сегодня.',
		authorIcon: authorIcon,
		authorName: 'Иванов В.',
		date: '11 Jan 2023',
		readTime: '5 min read',
	},
	{
		image: news1,
		alt: 'Пост 5',
		category: 'Новости',
		title: 'Регистрация открыта!',
		text: 'Обеспечьте себе место на конференции этого года уже сегодня.',
		authorIcon: authorIcon,
		authorName: 'Иванов В.',
		date: '11 Jan 2023',
		readTime: '5 min read',
	},
	{
		image: news2,
		alt: 'Пост 6',
		category: 'Обновление',
		title: 'Объявлен основной докладчик',
		text: 'Присоединяйтесь к нам, чтобы получить информацию от лидеров отрасли на конференции.',
		authorIcon: authorIcon,
		authorName: 'Иванов В.',
		date: '12 Jan 2023',
		readTime: '4 min read',
	},
	{
		image: news3,
		alt: 'Пост 7',
		category: 'Анонс',
		title: 'Семинары будут доступны в ближайшее время',
		text: 'Посетите практические занятия, чтобы повысить свою квалификацию на конференции.',
		authorIcon: authorIcon2,
		authorName: 'Пачули С.',
		date: '13 Jan 2023',
		readTime: '6 min read',
	},
];

export { newsPosts };
