import useEssenceStore from '../stores/essenceStore'
import { EssenceItem } from '../utils/types'

interface EssenceTileProps {
	name: string
}

const EssenceTile: React.FC<EssenceTileProps> = ({ name }) => {
	// const [selected, setSelected] = useState<boolean>(false)
	const item: EssenceItem = useEssenceStore((state) => state.items[name])
	const updateItem = useEssenceStore((state) => state.updateItem)
	const toggleSelected = () => {
		item.selected = !item.selected
		updateItem(item)
	}
	return !item ? (
		<div>Loading...</div>
	) : (
		<div
			className={`w-1/4 h-[72px] border-2 flex flex-col p-1 justify-center cursor-pointer hover:border-white ${
				item && item.selected
					? `opacity-100 border-gray-300 rounded`
					: ` border-amber-500 opacity-40 hover:opacity-100`
			}`}
			onClick={toggleSelected}
		>
			<div className="flex flex-col text-md font-bold h-12 items-center justify-between px-1">
				<img
					className="w-[30%] aspect-square "
					src={`images/essences/${item?.image}`}
				/>
				<div className="flex self-center text-right">{item.short}</div>
			</div>
		</div>
	)
}

export default EssenceTile
