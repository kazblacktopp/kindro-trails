import { useSelector } from 'react-redux';
import classes from './StateListPage.module.css';

export default function StatePage({ selectedCountry, onResult }) {
	const { trailLocations } = useSelector(state => state.trailData);

	const capitalisedCountry = capitalise(selectedCountry);

	const { state_container_outer, state_container_inner, state_btn } = classes;

	function loadStatesHandler(event) {
		event.preventDefault();

		onResult('trails', event.target.id);
	}

	function capitalise(string) {
		const stringArray = string.split('_');

		const capitalisedString = stringArray
			.map(stringEl => {
				return stringEl[0].toUpperCase() + stringEl.substring(1);
			})
			.join(' ');

		return capitalisedString;
	}

	function generateJSX() {
		const statesArray = [];

		for (const state in trailLocations[selectedCountry]) {
			const capitalisedState = capitalise(state);

			statesArray.push(
				<li key={`state_${statesArray.length + 1}`}>
					<button
						id={state}
						className={`btn btn_blue ${state_btn}`}
						onClick={loadStatesHandler}
					>
						{capitalisedState}
					</button>
				</li>,
			);
		}

		return statesArray;
	}

	const searchPageContent = generateJSX();

	return (
		<div className={state_container_outer}>
			<h1>{capitalisedCountry}</h1>
			<h2>Choose a state/region:</h2>
			<ul className={state_container_inner}>{searchPageContent}</ul>
		</div>
	);
}
