import {render, fireEvent, waitFor} from '@testing-library/react'
import {Header} from 'pages/Todo/components/Header'

export const inputTestId = 'header-input'

it('Initial value is empty string', () => {
    const screen = render(<Header />)

    const input = screen.queryByTestId(inputTestId)
    expect(input).toBeInTheDocument()
    expect(input).toHaveTextContent('')
})

it('Input onchange', async () => {
    const screen = render(<Header />)

    const input = screen.queryByTestId(inputTestId)

    const content = 'hello world'
    fireEvent.change(input!, {
        target: {value: content}
    })

    expect(input).toHaveValue(content)
})

it('Do not anything when keyup by enter and value is empty', () => {
    const fn = vi.fn()
    const screen = render(<Header onAdd={fn} />)

    const input = screen.queryByTestId(inputTestId)
    fireEvent.keyUp(input!, {
        key: 'Enter',
        target: {
            value: ''
        }
    })

    expect(fn).not.toHaveBeenCalled()
})

it('call onAdd when keyup by enter and value is valid, clear input at the same time', () => {
    const fn = vi.fn()
    const screen = render(<Header onAdd={fn} />)

    const input = screen.queryByTestId(inputTestId)
    const content = 'hello world'
    fireEvent.keyUp(input!, {
        key: 'Enter',
        target: {
            value: content
        }
    })

    expect(fn).toHaveBeenCalledWith(content)
    expect(input).toHaveTextContent('')
})