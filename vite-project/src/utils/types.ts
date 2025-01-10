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

export type CurrencyItem = {
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

export type GemItem = {
	name: string
	image: string
	gemLevel: number
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

export type EssenceItem = {
	name: string
	short: string
	image: string
	category: 'Normal' | 'Greater'
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
