import ButtonNum from "../ButtonNum/ButtonNum";

import './ButtonField.css';

const buttons = ['', 'C', 'Del', '/', 
									'7', '8', '9', '*',
									'4', '5', '6', '-', 
									'1', '2', '3', '+', 
									'', '0', '.', '='];

export default function ButtonField({numClick, dotClick, operationClick, equalClick, clearClick, deleteClick}) {

	return (
		<div className="container">

			{buttons.map((value, index) => {
				if (parseInt(value) || value === '0'){return <ButtonNum key={index} value={value} onClick={() => numClick(value)} />} 
				else if (value === '.') {return <ButtonNum key={index} value={value} onClick={dotClick} />}
				else if (value === 'C'){return <ButtonNum key={index} value={value} onClick={clearClick} />}
				else if (value === 'Del'){return <ButtonNum key={index} value={value} onClick={deleteClick} />}
				else if (value === '='){return <ButtonNum key={index} value={value} onClick={equalClick} />}
				else if (value === '') {return <ButtonNum key={index} value={value} disabled={true} />}
				else {return <ButtonNum key={index} value={value} onClick={() => operationClick(value)} />}
			})}

		</div>
	)

}