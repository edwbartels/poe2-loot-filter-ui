import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CurrencyItem } from '../utils/types'
import { Tier } from '../utils/types'
import currencies from '../data/defaults/currency/items'
import currencyTiers from '../data/defaults/currency/tiers'

interface CurrencyStore {
	items: {
		[key: string]: CurrencyItem
	}
	tiers: {
		[key: number]: Tier
	}
	populateItems: () => void
	populateTiers: () => void
	updateItem: (item: CurrencyItem) => void
	updateTier: (tier: Tier) => void
}

const useCurrencyStore = create(
	devtools<CurrencyStore>(
		(set, get) => ({
			items: {},
			tiers: {},
			populateItems: () => {
				currencies.map((item) => {
					const name = item.name
					set((state) => ({
						items: {
							...state.items,
							[name]: item,
						},
					}))
				})
			},
			populateTiers: () => {
				currencyTiers.map((item) => {
					const tierValue = item.tier
					set((state) => ({
						tiers: {
							...state.tiers,
							[tierValue]: item,
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
			updateTier: (tier) => {
				set((state) => ({
					tiers: {
						...state.tiers,
						[tier.tier]: tier,
					},
				}))
			},
		}),
		{ name: 'Currency' }
	)
)

export default useCurrencyStore
