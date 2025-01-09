import React, { useState, useEffect } from 'react'
import useCurrencyStore from '../stores/currencyStore'
// interface CurrencyContainerProps {
// 	currencies: CurrencyItem[]
// 	setCurrencies: React.Dispatch<React.SetStateAction<CurrencyItem[]>>
// }

const GemContainer: React.FC = ({}) => {
	// const { items, populateItems, populateTiers } = useCurrencyStore(
	// 	(state) => state
	// )
	// useEffect(() => {
	// 	populateItems()
	// 	populateTiers()
	// }, [populateItems, populateTiers])
	return (
		<div className="flex flex-col w-[1000px] m-2 border-4 border-black">
			<div className="border-b-4 border-black text-center font-bold text-3xl pb-1">
				Gems
			</div>
			<div className="flex w-full">
				<div className="flex w-[45%] h-[40px] border-r-2 border-black px-4 justify-center">
					<img src="/images/gems/uncut_skill_gem.png" />
					<div className="self-center font-bold">Uncut Skill Gems</div>
				</div>
				<div className="flex w-[45%] h-[40px] border-r-2 border-black px-4 justify-center">
					<img src="/images/gems/uncut_spirit_gem.png" />
					<div className="self-center font-bold">Uncut Spirit Gems</div>
				</div>
				<div className="flex w-[10%] h-[40px] border-r-2 border-black px-2 justify-around">
					<img
						className="h-3/5 self-center"
						src="/images/gems/uncut_support_gem.png"
					/>
					<div className="self-center font-bold text-sm">Support</div>
				</div>
			</div>
			{/* <div className=" flex flex-wrap justify-start w-full">
				{Object.values(items).map((item) => (
					<CurrencyTile key={item.name} name={item.name} />
				))}
			</div> */}
		</div>
	)
}

export default GemContainer
