import React, { useState, useEffect } from 'react'
import runes from '../data/defaults/runes/items'
import RuneTile from './RuneTile'
import { RuneItem } from '../utils/types'
import useRuneStore from '../stores/runeStore'
// interface RuneContainerProps {
// 	currencies: RuneItem[]
// 	setCurrencies: React.Dispatch<React.SetStateAction<RuneItem[]>>
// }

const RuneContainer: React.FC = ({}) => {
	const { items, populateItems } = useRuneStore((state) => state)
	useEffect(() => {
		populateItems()
	}, [populateItems])
	return (
		<div className="flex flex-col w-[1000px] m-2 border-4 border-black">
			<div className="border-b-4 border-black text-center font-bold text-3xl pb-1">
				Runes
			</div>
			<div className=" flex flex-wrap justify-start w-full">
				{Object.values(items).map((item) => (
					<RuneTile key={item.name} name={item.name} />
				))}
			</div>
		</div>
	)
}

export default RuneContainer
