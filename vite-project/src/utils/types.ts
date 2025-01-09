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
