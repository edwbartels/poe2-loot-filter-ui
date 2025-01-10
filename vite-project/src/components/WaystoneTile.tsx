import useWaystoneStore from '../stores/waystoneStore'
import { WaystoneItem } from '../utils/types'
import { useState } from 'react'

interface WaystoneTileProps {
	name: string
}

const WaystoneTile: React.FC<WaystoneTileProps> = ({ name }) => {
	// const [selected, setSelected] = useState<boolean>(false)
	const item: WaystoneItem = useWaystoneStore((state) => state.items[name])
	const updateItem = useWaystoneStore((state) => state.updateItem)
	const toggleSelected = () => {
		item.selected = !item.selected
		updateItem(item)
	}
	return !item ? (
		<div>Loading...</div>
	) : (
		<div
			className={`w-[12.5%] h-[72px] border-2 flex flex-col p-1 justify-center cursor-pointer hover:border-white ${
				item && item.selected
					? `opacity-100 border-gray-300 rounded p-1`
					: ` border-amber-500 opacity-40 hover:opacity-100`
			}`}
			onClick={toggleSelected}
		>
			<div className="flex text-md font-bold h-12 justify-around px-2">
				<img className={`h-[80%]`} src={`images/waystones/${item?.image}`} />
				<div className="flex self-center text-right text-2xl">{item.name}</div>
			</div>
		</div>
	)
}

export default WaystoneTile
