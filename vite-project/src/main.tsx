import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Modal, ModalProvider } from './context/Modal.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ModalProvider>
			<App />
			<Modal />
		</ModalProvider>
	</StrictMode>
)
