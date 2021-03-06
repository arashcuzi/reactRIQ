import React from 'react';
import NumberFormat from 'react-number-format';

export default ({
	handlers: {
		change,
		click,
	},
	state: {
		income,
	},
	step,
}) => <div className='slide' key={ step } >
	<div className='slide-content'>
		<h1>Please enter your total income:</h1>
		<p>This tool will take into account inflation automatically.</p>
		<NumberFormat
			value={ income }
			thousandSeparator={ true }
			prefix={ '$ ' }
			onChange={ change }
		/>
		<button onClick={ click }>Continue</button>
	</div>
</div>;
