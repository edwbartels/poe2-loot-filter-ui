import React, { useState } from 'react'
import useModalStore from '../stores/modalStore'
import useCurrencyStore from '../stores/currencyStore'
import { CurrencyItem } from '../utils/types'

interface CurrencyModalProps {
	isOpen: boolean
	onClose: () => void
	name: string
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({
	isOpen,
	onClose,
	name,
}) => {
	const item: CurrencyItem = useCurrencyStore((state) => state.items[name])
	const [pending, setPending] = useState(item)
	const { updateItem } = useCurrencyStore((state) => state)

	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-50 bg-wax-black"
			onClick={onClose}
		>
			<div
				className="flex flex-col items-center p-4 border-2 rounded shadow-lg bg-gray-700 border-amber-500"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="mb-2 text-2xl font-bold border-b-2 text-black border-black">
					{item && item.name}
				</h2>
			</div>
		</div>
	)
}

export default CurrencyModal
