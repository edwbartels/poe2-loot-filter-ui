import { useEffect } from 'react'
import EssenceTile from './EssenceTile'
import useEssenceStore from '../stores/essenceStore'

const EssenceContainer: React.FC = ({}) => {
	const { items, populateItems } = useEssenceStore((state) => state)

	useEffect(() => {
		populateItems()
	}, [populateItems])
	return (
		<div className="flex flex-col w-[1000px] m-2 border-4 border-black">
			<div className="border-b-4 border-black text-center font-bold text-3xl pb-1">
				Essences
			</div>
			<div className="flex">
				<div className="flex flex-col w-1/2 border-r-2 border-black">
					<div className="font-bold text-xl text-center border-b-2 border-black">
						Normal
					</div>
					<div className="flex flex-wrap justify-start ">
						{Object.values(items).map(
							(item) =>
								item.name.startsWith('Essence') && (
									<EssenceTile key={item.name} name={item.name} />
								)
						)}
					</div>
				</div>
				<div className="flex flex-col w-1/2 border-l-2 border-black">
					<div className="font-bold text-xl text-center border-b-2 border-black">
						Greater
					</div>
					<div className="flex flex-wrap justify-start">
						{Object.values(items).map(
							(item) =>
								item.name.startsWith('Greater') && (
									<EssenceTile key={item.name} name={item.name} />
								)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EssenceContainer
