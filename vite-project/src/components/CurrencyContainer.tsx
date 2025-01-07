import currency from '../data/currency'
import CurrencyTile from './CurrencyTile'
// import { CurrencyItem } from '../utils/types'

const CurrencyContainer: React.FC = () => {
	return (
		<div className=" flex flex-wrap justify-start m-2 w-[1000px]">
			{Object.values(currency).map((item) => (
				<CurrencyTile key={item.name} item={item} />
			))}
		</div>
	)
}

export default CurrencyContainer
