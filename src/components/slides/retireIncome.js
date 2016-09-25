import React, { Component } from 'react';
import { formatUSD } from '../../utils/utils';
import Slider from 'rc-slider';

export default class Retire extends Component {
	render() {
		const { handlers: { change, click }, state: { income, retireIncomePercent }, classes, step } = this.props;
		const monthly = formatUSD(parseFloat(income / 12 * retireIncomePercent / 100).toFixed(2));
		console.log(monthly, retireIncomePercent);

		return <div className={ `slide ${classes}` } key={ step } >
			<div className='slide-content'>
				<h1>How much of your current salary do you want to replace:</h1>
				<h3>
					<span className='fa fa-usd' style={ { position: 'relative', top: -4 } }></span>
					<span className='monthly'> { monthly } /</span>
					<span className='secondary'> Month</span>
				</h3>
				<p>This is your current income per month. Use it as a starting point for how much money you will need in retirement</p>
				<div className='slider-container'>
					<Slider
						defaultValue={ 1 }
						max={ 2 }
						step={ 0.01 }
						tipFormatter={ val => (val * 100).toFixed(0) + '%' }
						defaultValue={ isNaN(retireIncomePercent) ? '' : retireIncomePercent / 100 }
						onChange={ change }
					/>
				</div>
				<button onClick={ click }>Continue</button>
			</div>
		</div>
	}
};