import React, { FC } from 'react';
import './calc-btn.scss';

interface ICalcBtn {
	onClick?: (children: string) => void;
	children: string;
}

const CalcBtn: FC<ICalcBtn> = ({ onClick, children }) => {
	return (
		<div className="calc-btn" onClick={() => onClick(children)}>
			<span className="calc-btn-num">{children}</span>
		</div>
	);
};

export default CalcBtn;
