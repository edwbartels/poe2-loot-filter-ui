import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { WaystoneItem } from '../utils/types'
import { Tier } from '../utils/types'
import waystones from '../data/defaults/waystones/items'

interface WaystoneStore {
	items: {
		[key: string]: WaystoneItem
	}
	populateItems: () => void
	updateItem: (item: WaystoneItem) => void
}

const useWaystoneStore = create(
	devtools<WaystoneStore>(
		(set, get) => ({
			items: {},
			populateItems: () => {
				waystones.map((item) => {
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
		{ name: 'Waystone' }
	)
)

export default useWaystoneStore
