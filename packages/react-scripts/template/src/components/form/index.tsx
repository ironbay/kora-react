import * as React from 'react'
import { component } from '../theme'
import { Container } from '../container'

export { default as Editor } from './editor'
export { default as Time } from './time'
export { default as Date } from './date'
import * as validators from './validators'
export const Validators = validators

export const Input = component<React.InputHTMLAttributes<HTMLInputElement>>('input', 'input')

export const TextArea = component<React.TextareaHTMLAttributes<HTMLTextAreaElement>>('textarea', 'input')

export const Block = component<any>(Container, 'form-block', {
	'flex': true,
	'flex-column': true,
	'pad-4': true,
})

export const Label = component<any>(Container, 'form-label', {
	uppercase: true,
	'size-3': true,
	'weight-6': true,
	'fg-gray': true,
	'mgn-b2': true
})