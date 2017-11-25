import * as React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Root from './root'
import HomePage from './pages/home-page'

export default () => {
	return (
		<BrowserRouter>
			<Root>
				<Switch>
					<Route path="/" component={HomePage} />
				</Switch>
			</Root>
		</BrowserRouter>
	)
}
