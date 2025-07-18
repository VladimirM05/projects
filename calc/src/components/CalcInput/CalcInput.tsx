import React, { FC } from 'react';
import './calc-input.scss';

interface ICalcInput {
	value: string;
}

const CalcInput: FC<ICalcInput> = ({ value }) => {
	return <input className="calc-input" value={value || '0'} readOnly />;
};

export default CalcInput;
