import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TrialOfSekhemasItem } from '../utils/types'
import { Tier } from '../utils/types'
import trialOfSekhemasItems from '../data/defaults/trial-of-sekhemas/items'

interface TrialOfSekhemasStore {
	items: {
		[key: string]: TrialOfSekhemasItem
	}
	populateItems: () => void
	updateItem: (item: TrialOfSekhemasItem) => void
}

const useTrialOfSekhemasStore = create(
	devtools<TrialOfSekhemasStore>(
		(set, get) => ({
			items: {},
			populateItems: () => {
				trialOfSekhemasItems.map((item) => {
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
		{ name: 'TrialOfSekhemas' }
	)
)

export default useTrialOfSekhemasStore
