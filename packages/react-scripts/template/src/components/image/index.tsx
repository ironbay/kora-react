import './styles.css'
import * as React from 'react'
import { Container } from '../container'
import { component } from '../theme'

export const Image = component<React.ImgHTMLAttributes<HTMLImageElement>>('img', 'image', {})

export function Icon(props) {
	const { src, ...rest } = props
	return (
		<Container pointer {...rest}>
			<Image
				style={{verticalAlign: 'top'}}
				width={18}
				src={`https://feathericons.com/node_modules/feather-icons/dist/icons/${src}.svg`} />
		</Container>
	)
}