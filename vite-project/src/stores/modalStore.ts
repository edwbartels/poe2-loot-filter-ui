import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type SelectedModal = {
	type: 'currency' | 'essences'
	name: string
} | null

export interface ModalStore {
	modalOptions: string[]
	activeModal: SelectedModal | null
	setActiveModal: (options: SelectedModal) => void
	// next: string | null
	// setNext: (option: string | null) => void
}

const useModalStore = create(
	devtools<ModalStore>(
		(set) => ({
			modalOptions: ['currency'],
			activeModal: null,
			setActiveModal: (options) =>
				set((state) => {
					if (options === null || state.modalOptions.includes(options.type)) {
						return { activeModal: options }
					}
					console.warn(`Invalid modal option: ${options.type}`)
					return state
				}),
			// next: null,
			// setNext: (option) => set({ next: option }),
		}),
		{ name: 'Modal' }
	)
)
export default useModalStore
