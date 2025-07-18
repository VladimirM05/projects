import { FC, useState, useContext, ChangeEvent } from 'react';

import { PostsContext } from '@/App';

import { Posts } from '@/interfaces/Posts';

import download from '@/assets/images/download.svg';

import './post.pcss';

interface Categories {
	text: string;
}

export const Post: FC = () => {
	const context = useContext(PostsContext);
	if (!context) {
		throw new Error('usePosts must be used within a PostsProvider');
	}
	const [postData, setPostData] = useState<Posts>({
		img: '',
		category: '',
		title: '',
		descr: '',
	});
	const [imgData, setImgData] = useState<string>('');

	const categories: Categories[] = [
		{
			text: 'Выбрать категорию',
		},
		{
			text: 'Новости',
		},
		{
			text: 'Обновление',
		},
		{
			text: 'Анонс',
		},
	];

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event);
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64 = reader.result as string;
				setImgData(base64);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setPostData(prevPostData => ({
			...prevPostData,
			category: event.target.value,
		}));
	};

	const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const textAreaTitle = document.querySelector(
			'.post-title'
		) as HTMLTextAreaElement;

		textAreaTitle.style.height = 'auto';
		textAreaTitle.style.height = textAreaTitle.scrollHeight + 'px';

		setPostData(prevPostData => ({
			...prevPostData,
			title: event.target.value,
		}));
	};

	const handleDescrChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setPostData(prevPostData => ({
			...prevPostData,
			descr: event.target.value,
		}));
	};

	const sendDataPost = () => {
		const newPost: Posts = {
			...postData,
			img: imgData,
		};


	};

	return (
		<div className={'post'}>
			<div className={'post-img-wrapper'}>
				{imgData?.trim() !== '' && (
					<img className="post-preview-img" src={imgData} alt={'Фото поста'} />
				)}
				<label className={'custom-file-upload'}>
					<input
						type="file"
						className="post-preview-input"
						accept="image/*"
						onChange={handleImageChange}
					/>
					<img className="post-preview-input-img" src={download} alt="" />
				</label>
			</div>
			<select className={'post-category'} onChange={handleCategoryChange}>
				{categories.map(option => (
					<option className={'post-category-option'} key={option.text}>
						{option.text}
					</option>
				))}
			</select>
			<textarea
				className={'post-title'}
				placeholder="Заголовок"
				rows={1}
				onChange={handleTitleChange}
				value={postData.title}
			></textarea>
			<textarea
				className={'post-descr'}
				placeholder="Описание"
				rows={1}
				onChange={handleDescrChange}
				value={postData.descr}
			></textarea>
			<div className="post-btn-container">
				<button
					className="post-btn-add"
					onClick={sendDataPost}
					disabled={!imgData}
				>
					Выложить
				</button>
			</div>
		</div>
	);
};
