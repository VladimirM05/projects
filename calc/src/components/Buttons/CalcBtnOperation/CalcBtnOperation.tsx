import React, { FC } from 'react';
import './calc-btn-operation.scss';

interface ICalcBtnOperation {
	onClick: (children: string) => void;
	children: string;
}

const CalcBtnOperation: FC<ICalcBtnOperation> = ({ onClick, children }) => {
	return (
		<div
			className="calc-btn calc-btn-operation"
			onClick={() => onClick(children)}
		>
			<span className="calc-btn-symbol">{children}</span>
		</div>
	);
};

export default CalcBtnOperation;
