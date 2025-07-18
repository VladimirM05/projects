import React, { FC } from 'react';
import './delete-btn.scss';

interface IDeleteBtn {
	children: string;
	onClick: () => void;
}

const DeleteBtn: FC<IDeleteBtn> = ({ children, onClick }) => {
	return (
		<div className="calc-btn calc-btn-del" onClick={onClick}>
			<span className="calc-btn-del-text">{children}</span>
		</div>
	);
};

export default DeleteBtn;
