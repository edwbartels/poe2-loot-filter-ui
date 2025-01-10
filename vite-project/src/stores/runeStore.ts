import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { RuneItem } from '../utils/types'
import { Tier } from '../utils/types'
import runes from '../data/defaults/runes/items'

interface RuneStore {
	items: {
		[key: string]: RuneItem
	}
	populateItems: () => void
	updateItem: (item: RuneItem) => void
}

const useRuneStore = create(
	devtools<RuneStore>(
		(set, get) => ({
			items: {},
			populateItems: () => {
				runes.map((item) => {
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
		{ name: 'Rune' }
	)
)

export default useRuneStore
