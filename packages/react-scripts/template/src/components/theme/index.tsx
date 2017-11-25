import '@ironbay/legos/dist/legos.css'

const properties = Object.keys({
	'flex': true,
	'flex-1': true,
	'flex-2': true,
	'flex-3': true,
	'flex-4': true,
	'flex-5': true,
	'flex-6': true,
	'flex-7': true,
	'flex-8': true,
	'flex-9': true,
	'flex-10': true,
	'flex-third': true,
	'flex-column': true,
	'flex-row': true,

	'relative': true,
	'fill': true,
	'hide': true,
	'show': true,
	'pointer': true,

	'justify-end': true,
	'justify-start': true,
	'justify-center': true,
	'justify-around': true,
	'justify-between': true,

	'align-end': true,
	'align-start': true,
	'align-center': true,
	'align-around': true,
	'align-stretch': true,

	'bg-purple': true,
	'bg-blue': true,
	'bg-green': true,
	'bg-gray': true,
	'bg-red': true,
	'bg-lightgray': true,
	'bg-highlight': true,
	'bg-white': true,
	'bg-black': true,

	'fg-purple': true,
	'fg-blue': true,
	'fg-green': true,
	'fg-gray': true,
	'fg-red': true,
	'fg-lightgray': true,
	'fg-highlight': true,
	'fg-white': true,
	'fg-black': true,

	'mgn-0': true,
	'mgn-1': true,
	'mgn-2': true,
	'mgn-3': true,
	'mgn-4': true,
	'mgn-5': true,
	'mgn-6': true,
	'mgn-7': true,
	'mgn-8': true,

	'mgn-l0': true,
	'mgn-l1': true,
	'mgn-l2': true,
	'mgn-l3': true,
	'mgn-l4': true,
	'mgn-l5': true,
	'mgn-l6': true,
	'mgn-l7': true,
	'mgn-l8': true,

	'mgn-r0': true,
	'mgn-r1': true,
	'mgn-r2': true,
	'mgn-r3': true,
	'mgn-r4': true,
	'mgn-r5': true,
	'mgn-r6': true,
	'mgn-r7': true,
	'mgn-r8': true,

	'mgn-t0': true,
	'mgn-t1': true,
	'mgn-t2': true,
	'mgn-t3': true,
	'mgn-t4': true,
	'mgn-t5': true,
	'mgn-t6': true,
	'mgn-t7': true,
	'mgn-t8': true,

	'mgn-b0': true,
	'mgn-b1': true,
	'mgn-b2': true,
	'mgn-b3': true,
	'mgn-b4': true,
	'mgn-b5': true,
	'mgn-b6': true,
	'mgn-b7': true,
	'mgn-b8': true,

	'mgn-v0': true,
	'mgn-v1': true,
	'mgn-v2': true,
	'mgn-v3': true,
	'mgn-v4': true,
	'mgn-v5': true,
	'mgn-v6': true,
	'mgn-v7': true,
	'mgn-v8': true,

	'mgn-h0': true,
	'mgn-h1': true,
	'mgn-h2': true,
	'mgn-h3': true,
	'mgn-h4': true,
	'mgn-h5': true,
	'mgn-h6': true,
	'mgn-h7': true,
	'mgn-h8': true,

	'pad-0': true,
	'pad-1': true,
	'pad-2': true,
	'pad-3': true,
	'pad-4': true,
	'pad-5': true,
	'pad-6': true,
	'pad-7': true,
	'pad-8': true,

	'pad-l0': true,
	'pad-l1': true,
	'pad-l2': true,
	'pad-l3': true,
	'pad-l4': true,
	'pad-l5': true,
	'pad-l6': true,
	'pad-l7': true,
	'pad-l8': true,

	'pad-r0': true,
	'pad-r1': true,
	'pad-r2': true,
	'pad-r3': true,
	'pad-r4': true,
	'pad-r5': true,
	'pad-r6': true,
	'pad-r7': true,
	'pad-r8': true,

	'pad-t0': true,
	'pad-t1': true,
	'pad-t2': true,
	'pad-t3': true,
	'pad-t4': true,
	'pad-t5': true,
	'pad-t6': true,
	'pad-t7': true,
	'pad-t8': true,

	'pad-b0': true,
	'pad-b1': true,
	'pad-b2': true,
	'pad-b3': true,
	'pad-b4': true,
	'pad-b5': true,
	'pad-b6': true,
	'pad-b7': true,
	'pad-b8': true,

	'pad-v0': true,
	'pad-v1': true,
	'pad-v2': true,
	'pad-v3': true,
	'pad-v4': true,
	'pad-v5': true,
	'pad-v6': true,
	'pad-v7': true,
	'pad-v8': true,

	'pad-h0': true,
	'pad-h1': true,
	'pad-h2': true,
	'pad-h3': true,
	'pad-h4': true,
	'pad-h5': true,
	'pad-h6': true,
	'pad-h7': true,
	'pad-h8': true,

	'border-0': true,
	'border-l0': true,
	'border-r0': true,
	'border-t0': true,
	'border-b0': true,
	'border-h0': true,
	'border-v0': true,

	'border-1': true,
	'border-l1': true,
	'border-r1': true,
	'border-t1': true,
	'border-b1': true,
	'border-h1': true,
	'border-v1': true,

	'weight-1': true,
	'weight-2': true,
	'weight-3': true,
	'weight-4': true,
	'weight-5': true,
	'weight-6': true,
	'weight-7': true,
	'weight-8': true,

	'size-1': true,
	'size-2': true,
	'size-3': true,
	'size-3-5': true,
	'size-4': true,
	'size-5': true,
	'size-6': true,
	'size-7': true,
	'size-8': true,

	'line-1': true,
	'line-2': true,
	'line-3': true,
	'line-4': true,
	'line-5': true,
	'line-6': true,
	'line-7': true,
	'line-8': true,

	'uppercase': true,
	'capitalize': true,
	'text-center': true,
}).reduce((collect, item) => {
	collect[item] = true
	collect['s-' + item] = true
	collect['m-' + item] = true
	collect['l-' + item] = true
	return collect
}, {})

import * as React from 'react'
import * as cs from 'classnames'

export function component<T>(element: any, base_class: string, forced_props = {}): (props: T) => React.SFCElement<T> {
	return function(props: T & {[key: string]: boolean}): any {
		const classes = {}
		const { children, className, ...rest} = props as any
		for (let key of Object.keys(rest)) {
			if (properties[key]) {
				classes[key] = rest[key]
				delete rest[key]
			}
		}
		const combined = cs(base_class, className, classes)
		return React.createElement<T>(element, {
			className: combined,
			...rest,
			...forced_props
		}, children)
	}
}
