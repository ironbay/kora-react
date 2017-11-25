import './styles.css'
import * as React from 'react'

import { Grid, Container, Wrap } from '../../components/container'
import * as Form from '../../components/form'

interface Form {
	name?: string
	email?: string
	password?: string
	time?: number
}

interface State {
	form: Form
}

export default class HomePage extends React.Component<any, State> {
	private editor: Form.Editor<Form> = new Form.Editor<Form>(this, ['form'])
	constructor(props, context) {
		super(props, context)
		this.state = {
			form: {
				name: '',
				email: '',
				password: '',
				time: new Date().getTime()
			}
		}
	}
	render() {
		const { form } = this.state
		return (
			<Wrap>
				<Container size-8 mgn-t8>Hello</Container>
				<Container fg-white weight-5 size-5 mgn-t8>
					<Grid columns={3} responsive={true}>
						<Container bg-blue pad-4>Hello</Container>
						<Container bg-purple pad-4>Hello</Container>
						<Container bg-green pad-4>Hello</Container>
						<Container bg-red pad-4>Hello</Container>
						<Container bg-gray pad-4>Hello</Container>
					</Grid>
				</Container>
				<Container fg-white weight-5 size-5 mgn-t8>
					<Container flex>
						<Container bg-blue pad-4 flex-4>Hello</Container>
						<Container bg-purple pad-4 flex-6>Hello</Container>
					</Container>
					<Container flex>
						<Container flex-third bg-green pad-4>Hello</Container>
						<Container flex-third bg-red pad-4>Hello</Container>
						<Container flex-third bg-gray pad-4>Hello</Container>
					</Container>
				</Container>
				<Container border-h1 border-t1 mgn-b8 border-b0 mgn-t8>
					<Container m-flex>
						<Form.Block border-b1 m-border-r1>
							<Form.Label>Full Name</Form.Label>
							<Form.Input
								value={form.name || ''}
								onChange={this.editor.handle(['name'])}
								placeholder="Name"
							/>
						</Form.Block>
						<Form.Block border-b1>
							<Form.Label>Email Address</Form.Label>
							<Form.Input
								fg-red={form.email && !Form.Validators.email(form.email)}
								value={form.email || ''}
								onChange={this.editor.handle(['email'])}
								placeholder="Email"
							/>
						</Form.Block>
					</Container>
					<Container m-flex>
						<Form.Block border-b1 border-r1>
							<Form.Label>Password</Form.Label>
							<Form.Input
								type="password"
								placeholder="Password"
							/>
						</Form.Block>
						<Form.Block border-b1 border-r1 >
							<Form.Label>Time</Form.Label>
							<Form.Time
								value={form.time || new Date().getTime()}
								onChange={this.editor.handle(['time'])}
								placeholder="Time"
							/>
						</Form.Block>
						<Form.Block border-b1 relative>
							<Form.Label>Date</Form.Label>
							<Form.Date
								value={form.time || 0}
								onChange={this.editor.handle(['time'])}
								placeholder="Date"
							/>
						</Form.Block>
					</Container>
				</Container>
			</Wrap>
		)
	}
}