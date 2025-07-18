import React, { FC, useState, useEffect } from 'react';
import CalcInput from '../CalcInput/CalcInput';
import DeleteBtn from '../Buttons/DeleteBtn/DeleteBtn';
import CalcBtn from '../Buttons/CalcBtn/CalcBtn';
import CalcBtnOperation from '../Buttons/CalcBtnOperation/CalcBtnOperation';
import ResultBtn from '../Buttons/ResultBtn/ResultBtn';
import './calc.scss';

const Calc: FC = () => {
	const initialX: number = window.innerWidth / 2;
	const initialY: number = window.innerHeight / 2;

	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: initialX,
		y: initialY,
	});
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [offset, setOffset] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [firstNum, setFirstNum] = useState<string>('');
	const [operation, setOperation] = useState<string>('');
	const [secondNum, setSecondNum] = useState<string>('');
	const [input, setInput] = useState<string>('');

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
	};

	const handleMouseMove = (
		e: MouseEvent | React.MouseEvent<HTMLDivElement>
	): void => {
		if (isDragging) {
			setPosition({
				x: e.clientX - offset.x,
				y: e.clientY - offset.y,
			});
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleMouseUp);
		}
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging, offset]);

	const changeFirstNum = (num: string): void => {
		let newFirstNum: string = firstNum;
		if (num === '.' && newFirstNum.match(/\./) === null) {
			newFirstNum === '' ? (newFirstNum = '0.') : (newFirstNum += '.');
		}
		if (num !== '.' && newFirstNum.length < 9) {
			if (newFirstNum !== '0') {
				newFirstNum += num;
			} else {
				newFirstNum = num;
			}
		}
		setFirstNum(newFirstNum);
		setInput(newFirstNum);
	};

	const changeNum = (symbol: string, currentNum: string): void => {
		let newCurrentNum = currentNum;
		switch (symbol) {
			case '+/-':
				newCurrentNum = String(-newCurrentNum);
				break;
			case '%':
				newCurrentNum = String(Number(newCurrentNum) / 100);
				break;
			case '1/x':
				newCurrentNum = String(1 / Number(newCurrentNum));
				break;
			case 'x²':
				newCurrentNum = String(Number(newCurrentNum) ** 2);
				break;
			default:
				newCurrentNum = String(Math.sqrt(Number(newCurrentNum)));
				break;
		}
		currentNum === firstNum
			? setFirstNum(newCurrentNum)
			: setSecondNum(newCurrentNum);
		setInput(newCurrentNum);
	};

	const changeOperation = (symbol: string): void => {
		if (secondNum !== '') {
			changeResult();
		}
		setOperation(symbol);
		setInput(symbol);
	};

	const changeSecondNum = (num: string): void => {
		let newSecondNum: string = secondNum;
		if (num === '.' && newSecondNum.match(/\./i) === null) {
			newSecondNum === '' ? (newSecondNum = '0.') : (newSecondNum += '.');
		}
		if (num !== '.' && newSecondNum.length < 9) {
			if (newSecondNum !== '0') {
				newSecondNum += num;
			} else {
				newSecondNum = num;
			}
		}
		setSecondNum(newSecondNum);
		setInput(newSecondNum);
	};

	const changeResult = (): void => {
		let result: string;
		switch (operation) {
			case '÷':
				secondNum === '0'
					? (result = 'Error')
					: (result = String(Number(firstNum) / Number(secondNum)));
				break;
			case '×':
				result = String(Number(firstNum) * Number(secondNum));
				break;
			case '-':
				result = String(Number(firstNum) - Number(secondNum));
				break;
			default:
				result = String(Number(firstNum) + Number(secondNum));
				break;
		}
		result = result.slice(0, 9);
		setFirstNum(result);
		setOperation('');
		setSecondNum('');
		setInput(result);
	};

	const clearData = (): void => {
		setFirstNum('');
		setOperation('');
		setSecondNum('');
		setInput('');
	};

	return (
		<div className="calc" style={{ left: position.x, top: position.y }}>
			<div className="horizontal-line-container" onMouseDown={handleMouseDown} style={{cursor: isDragging ? "grabbing" : "grab"}}>
				<hr className="horizontal-line"></hr>
			</div>
			<div className="calc-container">
				<CalcInput value={input} />
				<DeleteBtn onClick={clearData}>AC</DeleteBtn>
			</div>
			<ul className="calc-btns-other-operation">
				{['+/-', '%', '1/x', 'x²', '√x'].map((e, i) => (
					<li
						className="calc-btns-other-operation-text"
						key={i}
						onClick={
							operation
								? () => changeNum(e, secondNum)
								: () => changeNum(e, firstNum)
						}
					>
						{e}
					</li>
				))}
			</ul>
			<div className="calc-btns">
				<ul className="calc-btns-num">
					{['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'].map(
						(e, i) => (
							<CalcBtn
								onClick={operation ? changeSecondNum : changeFirstNum}
								key={i}
							>
								{e}
							</CalcBtn>
						)
					)}
					<ResultBtn onClick={secondNum ? changeResult : null}>=</ResultBtn>
				</ul>
				<div className="calc-btns-operation">
					{['÷', '×', '-', '+'].map((e, i) => (
						<CalcBtnOperation onClick={changeOperation} key={i}>
							{e}
						</CalcBtnOperation>
					))}
				</div>
			</div>
		</div>
	);
};

export default Calc;
