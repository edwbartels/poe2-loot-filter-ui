import React, { useState } from 'react'

interface VisibilityProps {
	visible: boolean
}

const Visibility: React.FC<VisibilityProps> = ({ visible }) => {
	const [isVisible, setVisible] = useState<boolean>(visible)

	return <div className="flex"></div>
}

export default Visibility
