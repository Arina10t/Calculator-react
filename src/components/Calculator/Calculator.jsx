import { useState } from 'react';

import Display from '../Display/Display';
import ButtonField from '../ButtonField/ButtonField';
import './Calculator.css';

export default function Calculator() {

	const [storedNum, setStoredNum] = useState('');
	const [operationState, setOperationState] = useState({operation: '', waitingNum: true});
	const [display, setDisplay] = useState('0');

	const mathOper = () => {
		let res = 0;
		switch (operationState.operation){
			case '+':
				res = parseFloat(storedNum) + parseFloat(display);
				break;
			case '-':
				res = parseFloat(storedNum) - parseFloat(display);
				break;
			case '*':
				res = parseFloat(storedNum) * parseFloat(display);
				break;
			case '/':
				res = parseFloat(storedNum) / parseFloat(display);
				break;
				default:
					break;
		}

		if (res !== Infinity && isNaN(res) === false)
			return res;

		else return 'Error'
	}


	const numClick = (value) => {
		if (display === '0'){
			setDisplay(value);		
		} 
		if (operationState.waitingNum) {
			setDisplay(value);
			setOperationState(prev => ({...prev, waitingNum: false})); 
		} 
		else if (display.length < 8){
			setDisplay(display + value);
		}

	
	}

	const dotClick = () => {
		if(display.toString().indexOf('.') === -1){
			setDisplay(display + '.');
		}
	}

	const operationClick = (value) => {
		if(operationState.operation === '' ){
			setStoredNum(display);
		} else if (operationState.waitingNum === false) {
			const res = mathOper();
			setDisplay(res);
			// setOperationState({operation: 'value', waitingNum: true});
			setStoredNum(res);
		}

		setOperationState({operation: value, waitingNum: true});
	}

	const equalClick = () => {
		if(storedNum && display && operationState.operation){
			const res = mathOper();
			setDisplay(res);
			setStoredNum('');
			setOperationState({operation: '', waitingNum: true});
		}
	}
	
	const clearClick = () => {
		setStoredNum('');
		setOperationState({operation: '', waitingNum: true});
		setDisplay('0');
	}

	const deleteClick = () => {
		if (display !== '' && operationState.waitingNum === false) {
      setDisplay(display.toString().slice(0, display.length - 1));
    } else clearClick();
	}

	const props = { 
		numClick, 
		dotClick, 
		operationClick, 
		equalClick, 
		clearClick,
		deleteClick
	}

	return(
		<div className='containerCalculator'>
			<Display numValue={display}/>
			<ButtonField {...props}/>
		</div>	
	)
}