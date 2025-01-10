import React, { useState, useEffect } from 'react'
import waystones from '../data/defaults/waystones/items'
import WaystoneTile from './WaystoneTile'
import { WaystoneItem } from '../utils/types'
import useWaystoneStore from '../stores/waystoneStore'
// interface WaystoneContainerProps {
// 	currencies: WaystoneItem[]
// 	setCurrencies: React.Dispatch<React.SetStateAction<WaystoneItem[]>>
// }

const WaystoneContainer: React.FC = ({}) => {
	const { items, populateItems } = useWaystoneStore((state) => state)
	useEffect(() => {
		populateItems()
	}, [populateItems])
	return (
		<div className="flex flex-col w-[1000px] m-2 border-4 border-black">
			<div className="border-b-4 border-black text-center font-bold text-3xl pb-1">
				Waystones
			</div>
			<div className=" flex flex-wrap justify-start w-full">
				{Object.values(items).map((item) => (
					<WaystoneTile key={item.name} name={item.name} />
				))}
			</div>
		</div>
	)
}

export default WaystoneContainer
