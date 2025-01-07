import { CurrencyItem } from '../utils/types'

interface CurrencyTileProps {
	item: CurrencyItem
}

const CurrencyTile: React.FC<CurrencyTileProps> = ({ item }) => {
	return (
		<div className="w-1/5 border-2 border-amber-500 flex flex-col p-1 justify-between cursor-pointer hover:border-gray-300">
			{/* <div className="flex flex-col">
				<div> -icon placeholder- Leveling</div>
				<div> -icon placeholder- Endgame</div>
			</div> */}

			<div className="flex text-md font-bold h-12 justify-between px-2">
				<img className="h-[80%]" src={`images/currency/${item.image}`} />
				<div className="flex self-center text-right">{item.name}</div>
			</div>
		</div>
	)
}

export default CurrencyTile
