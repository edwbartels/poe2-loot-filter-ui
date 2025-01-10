import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PrecursorTabletItem } from '../utils/types'
import { Tier } from '../utils/types'
import precursorTablets from '../data/defaults/precursor-tablets/items'

interface PrecursorTabletStore {
	items: {
		[key: string]: PrecursorTabletItem
	}
	populateItems: () => void
	updateItem: (item: PrecursorTabletItem) => void
}

const usePrecursorTabletStore = create(
	devtools<PrecursorTabletStore>(
		(set, get) => ({
			items: {},
			populateItems: () => {
				precursorTablets.map((item) => {
					const name = item.name
					set((state) => ({
						items: {
							...state.items,
							[name]: item,
						},
					}))
				})
			},
			updateItem: (item) => {
				set((state) => ({
					items: {
						...state.items,
						[item.name]: item,
					},
				}))
			},
		}),
		{ name: 'PrecursorTablet' }
	)
)

export default usePrecursorTabletStore
