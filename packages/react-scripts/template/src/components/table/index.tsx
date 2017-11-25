import './styles.css'
import * as React from 'react'
import { Container } from '../container'

import wrap from '../wrap'

export const Root = wrap(function({ children, ...rest}) {
	return (
		<table {...rest}>
			<tbody>
				{children}
			</tbody>
		</table>
	)
}, 'table', {}, {})

export const Row = wrap('tr', 'table-row', {}, {
	cursor: true,
})

function HeaderInner({ children, ...rest}) {
	return (
		<th {...rest}>
			<Container uppercase size-3 weight-5 fg-gray >{children}</Container>
		</th>
	)
}

export const Header = wrap(HeaderInner, 'table-header', {}, {})

export const Cell = wrap('td', 'table-cell', {}, {})

export const TextCell = wrap(function({ children, ...rest}) {
	return (
		<Cell {...rest}>
			<Container>{children}</Container>
		</Cell>
	)
}, 'table-text-cell', {}, {})