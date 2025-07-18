import React, { FC } from 'react';
import './result-btn.scss';

interface IResultBtn {
	children: string;
	onClick: () => void;
}

const ResultBtn: FC<IResultBtn> = ({ children, onClick }) => {
	return (
		<div className="calc-btn calc-btn-result" onClick={onClick}>
			<span className="calc-btn-result-text">{children}</span>
		</div>
	);
};

export default ResultBtn;
