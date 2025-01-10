export type Tier = {
	tier: number
	class: string
	fontSize: number
	textColor: number[]
	borderColor: number[]
	backgroundColor: number[]
	alertSound: number[] | null
	effect: string | null
	minimapIcon: (number | string)[]
}

type ItemParent = {
	name: string
	image: string
	tier: number
	selected: boolean
	custom: boolean
	customSettings: {
		fontSize: number
		textColor: number[]
		borderColor: number[]
		backgroundColor: number[]
		alertSound: number[] | null
		effect: string | null
		minimapIcon: (number | string)[]
	} | null
}

export type CurrencyItem = ItemParent & {}

export type GemItem = ItemParent & {
	gemLevel: number
}

export type EssenceItem = ItemParent & {
	short: string
	category: 'Normal' | 'Greater'
}

export type RuneItem = ItemParent & {
	short: string
}

export type WaystoneItem = ItemParent & {}

export type PrecursorTabletItem = ItemParent & {
	short: string
}

export type TrialOfSekhemasItem = ItemParent & {
	short: string | null
	category: 'Relic' | 'Key' | 'Barya' | 'Unique'
	trials: number | null
}
