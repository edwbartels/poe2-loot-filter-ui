import useRuneStore from '../stores/runeStore'
import { RuneItem } from '../utils/types'
import { useState } from 'react'

interface RuneTileProps {
	name: string
}

const RuneTile: React.FC<RuneTileProps> = ({ name }) => {
	// const [selected, setSelected] = useState<boolean>(false)
	const item: RuneItem = useRuneStore((state) => state.items[name])
	const updateItem = useRuneStore((state) => state.updateItem)
	const toggleSelected = () => {
		item.selected = !item.selected
		updateItem(item)
	}
	return !item ? (
		<div>Loading...</div>
	) : (
		<div
			className={`w-1/5 h-[72px] border-2 flex flex-col p-1 justify-center cursor-pointer hover:border-white ${
				item && item.selected
					? `opacity-100 border-gray-300 rounded p-1`
					: ` border-amber-500 opacity-40 hover:opacity-100`
			}`}
			onClick={toggleSelected}
		>
			<div className="flex text-md font-bold h-12 justify-around px-2">
				<img className={`h-[80%]`} src={`images/runes/${item?.image}`} />
				<div className="flex self-center text-right">{item.short}</div>
			</div>
		</div>
	)
}

export default RuneTile
