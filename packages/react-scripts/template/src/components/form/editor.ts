import { Dynamic } from '@ironbay/kora'

export default class Editor<T> {
	private _component: React.Component
	private _path: string[]
	public changes: Mutation;

	constructor(component: React.Component, path: string[]) {
		this._component = component
		this._path = path
		this.changes = {
			merge: {},
			delete: {},
		}
	}

	public handle(path: string[], cb = (value: any) => {}) {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target
			this.merge(path, value, cb)
		}
	}

	public edit(item: T) {
		this.changes = {
			merge: {},
			delete: {},
		}
		this._component.setState(state => Dynamic.put(state, this._path, item))
	}

	public merge(path: string[], value: any, cb = (value: any) => {}) {
		const full = [...this._path, ...path]
		Dynamic.put(this.changes.merge, path, value)
		this._component.setState(state => {
			return Dynamic.put(state, full, value)
		}, () => cb(value))
	}

	public delete(path: string[], cb = () => {}) {
		const full = [...path, ...this._path]
		Dynamic.put(this.changes.merge, path, 1)
		this._component.setState(state => {
			return Dynamic.delete(state, full)
		}, () => cb())
	}
}