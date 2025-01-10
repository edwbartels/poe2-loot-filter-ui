import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { EssenceItem } from '../utils/types'
import { Tier } from '../utils/types'
import essences from '../data/defaults/essences/items'

interface EssenceStore {
	items: {
		[key: string]: EssenceItem
	}
	populateItems: () => void
	updateItem: (item: EssenceItem) => void
}

const useEssenceStore = create(
	devtools<EssenceStore>(
		(set, get) => ({
			items: {},
			populateItems: () => {
				essences.map((item) => {
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
		{ name: 'Essence' }
	)
)

export default useEssenceStore
