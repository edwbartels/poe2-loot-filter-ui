import './App.css'
import { useState } from 'react'
import CurrencyContainer from './components/CurrencyContainer'
import { CurrencyItem } from './utils/types'
import currency from './data/currency'
import templateText from './assets/base-filter-currency'

function App() {
	const initialCurrencies = currency
	const [currencies, setCurrencies] =
		useState<CurrencyItem[]>(initialCurrencies)

	const handleGenerate = () => {
		const hiddenCurrencies = currencies
			.filter((currency: CurrencyItem) => !currency.selected)
			.map((currency: CurrencyItem) => `"${currency.name}"`)

		const hideBlock = `
Hide # type->currency
    Class == "Stackable Currency"
    BaseType == ${hiddenCurrencies.join(' ')}
    SetFontSize 20
    SetBackgroundColor 20 20 0 255
    DisableDropSound True
`
		const finalText = hideBlock + templateText
		const blob = new Blob([finalText], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)

		const a = document.createElement('a')
		a.href = url
		a.download = 'basic-filter.filter'
		document.body.appendChild(a)
		a.click()

		document.body.removeChild(a)
		URL.revokeObjectURL(url)
	}
	return (
		<div className="flex flex-col min-h-screen min-w-[1000px] font-sans bg-gray-700 text-gray-400 items-center">
			<CurrencyContainer
				currencies={currencies}
				setCurrencies={setCurrencies}
			/>
			<button
				className="bg-yellow-500 rounded px-2 text-black font-bold border-2 border-black hover:border-white"
				onClick={handleGenerate}
			>
				Generate
			</button>
		</div>
	)
}

export default App
