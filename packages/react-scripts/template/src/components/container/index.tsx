import * as React from 'react'
import { component } from '../theme'

export const Container = component<any>('div', 'container')

export function Wrap(props) {
	return (
		<Container flex justify-center>
			<Container pad-h4 style={{
				width: '68rem',
				maxWidth: '100%',
			}}>
			{props.children}
			</Container>
		</Container>
	)
}

interface GridProps {
	columns: number
	flush?: boolean
	responsive?: boolean
}

export class Grid extends React.Component<{[key: string]: any} & GridProps, any> {
	render() {
		const { columns, children, responsive, flush, ...rest } = this.props
		return (
			<Container {...rest} style={flush ? {} : {margin: '-1rem 0 0 -1rem'}}>
			{
				Grid
				.chunk([].concat(children), columns)
				.map((items, index: number) => {
					return (
						<Container s-flex key={index} >
						{
							items.map((item, index: number) => (
								<Container
									key={index}
									flex-column
									style={flush ? {} : { padding: '1rem 0 0 1rem'}}
									flex>
									{item}
								</Container>
							))
						}
						</Container>
					)
				})
			}
			</Container>
		)
	}

	private static chunk<T>(input: T[], chunk: number) {
		const result = []
		for (let i = 0; i < input.length; i+=chunk) {
			const current = []
			for (let n = 0; n < chunk; n++) {
				current[n] = input[n + i]
			}
			result.push(current)
		}
		return result
	}
}