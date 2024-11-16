
import './Display.css';

export default function Display({numValue}) {

	return(
		<>
			<input readOnly value={numValue}>
			</input>
		</>
	)

}