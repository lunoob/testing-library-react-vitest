import {Counter} from '../Counter'
import {render} from '@testing-library/react'
import {describe,it, expect} from 'vitest'

describe('Counter Component', () => {

    it('simple case', () => {
        const screen = render(<Counter />)

        const countEl = screen.getByTestId('count-value')

        expect(countEl).toHaveTextContent('count')
    })
})