import React, { useState } from 'react'
import currency from '../data/currency'
import CurrencyTile from './CurrencyTile'
import { CurrencyItem } from '../utils/types'
interface CurrencyContainerProps {
	currencies: CurrencyItem[]
	setCurrencies: React.Dispatch<React.SetStateAction<CurrencyItem[]>>
}

const CurrencyContainer: React.FC<CurrencyContainerProps> = ({
	currencies,
	setCurrencies,
}) => {
	const toggleCurrency = (name: string) => {
		setCurrencies((prev) =>
			prev.map((currency) =>
				currency.name === name
					? { ...currency, selected: !currency.selected }
					: currency
			)
		)
	}
	return (
		<div className=" flex flex-wrap justify-start m-2 w-[1000px]">
			{currencies.map((item) => (
				<CurrencyTile
					key={item.name}
					item={item}
					onToggle={() => toggleCurrency(item.name)}
				/>
			))}
		</div>
	)
}

export default CurrencyContainer
