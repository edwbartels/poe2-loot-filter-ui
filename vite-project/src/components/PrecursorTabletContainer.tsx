import React, { useState, useEffect } from 'react'
import precursorTablets from '../data/defaults/precursor-tablets/items'
import PrecursorTabletTile from './PrecursotTabletTile'
import { PrecursorTabletItem } from '../utils/types'
import usePrecursorTabletStore from '../stores/precursorTabletStore'
// interface PrecursorTabletContainerProps {
// 	currencies: PrecursorTabletItem[]
// 	setCurrencies: React.Dispatch<React.SetStateAction<PrecursorTabletItem[]>>
// }

const PrecursorTabletContainer: React.FC = ({}) => {
	const { items, populateItems } = usePrecursorTabletStore((state) => state)
	useEffect(() => {
		populateItems()
	}, [populateItems])
	return (
		<div className="flex flex-col w-[1000px] m-2 border-4 border-black">
			<div className="border-b-4 border-black text-center font-bold text-3xl pb-1">
				Precursor Tablets
			</div>
			<div className=" flex flex-wrap justify-start w-full">
				{Object.values(items).map((item) => (
					<PrecursorTabletTile key={item.name} name={item.name} />
				))}
			</div>
		</div>
	)
}

export default PrecursorTabletContainer
