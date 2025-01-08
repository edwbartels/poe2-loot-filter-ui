import { CurrencyItem } from '../utils/types'
import { useState } from 'react'

interface CurrencyTileProps {
	item: CurrencyItem
	onToggle: () => void
}

const CurrencyTile: React.FC<CurrencyTileProps> = ({ item, onToggle }) => {
	// const [selected, setSelected] = useState<boolean>(false)
	return (
		<div
			className={`w-1/5 h-[72px] border-2 flex flex-col p-1 justify-center cursor-pointer hover:border-white ${
				item.selected
					? `opacity-100 border-gray-300 rounded p-1`
					: ` border-amber-500 opacity-40 hover:opacity-100`
			}`}
			onClick={onToggle}
		>
			{/* <div className="flex flex-col">
				<div> -icon placeholder- Leveling</div>
				<div> -icon placeholder- Endgame</div>
			</div> */}

			<div className="flex text-md font-bold h-12 justify-between px-2">
				<img className={`h-[80%]`} src={`images/currency/${item.image}`} />
				<div className="flex self-center text-right">{item.name}</div>
			</div>
		</div>
	)
}

export default CurrencyTile
