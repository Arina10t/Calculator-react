import './ButtonNum.css';

export default function ButtonNum({value, onClick, ...props}) {

	return (
		<button onClick={onClick} disabled={props.disabled}>
			{value}
		</button>
	)

}