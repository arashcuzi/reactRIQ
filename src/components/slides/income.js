import React, { Component } from 'react';

export default class Income extends Component {
	render() {
		const { handlers: { change, click }, state: { income }, classes, step } = this.props;
		console.log(income);

		return <div className={ `slide ${classes}` } key={ step } >
			<div className='slide-content'>
				<h1>Please enter your total income:</h1>
				<p>This tool will take into account inflation automatically.</p>
				<input
					type='text'
					name='income'
					onChange={ change }
					value={ isNaN(income) ? '' : income }
					placeholder='$ 55,000'
				/>
				<button onClick={ click }>Continue</button>
			</div>
		</div>
	}
};