import React, { useState, useEffect } from 'react'
import currency from '../data/currency'
import CurrencyTile from './CurrencyTile'
import { CurrencyItem } from '../utils/types'
import useCurrencyStore from '../stores/currencyStore'
// interface CurrencyContainerProps {
// 	currencies: CurrencyItem[]
// 	setCurrencies: React.Dispatch<React.SetStateAction<CurrencyItem[]>>
// }

const CurrencyContainer: React.FC = ({}) => {
	const { items, populateItems, populateTiers } = useCurrencyStore(
		(state) => state
	)
	useEffect(() => {
		populateItems()
		populateTiers()
	}, [populateItems, populateTiers])
	return (
		<div className="flex flex-col w-[1000px] m-2 border-4 border-black">
			<div className="border-b-4 border-black text-center font-bold text-3xl pb-1">
				Currency
			</div>
			<div className=" flex flex-wrap justify-start w-full">
				{Object.values(items).map((item) => (
					<CurrencyTile key={item.name} name={item.name} />
				))}
			</div>
		</div>
	)
}

export default CurrencyContainer
