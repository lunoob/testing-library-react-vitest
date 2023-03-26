import {render, fireEvent} from '@testing-library/react'
import {UndoList} from 'pages/Todo/components/UndoList'

it('List props is [], count should be 0, undo items length is 0', () => {
    const screen = render(<UndoList list={[]} />)

    const countEl = screen.queryByTestId('count')
    const undoItems = screen.queryAllByTestId('undo-item')

    expect(countEl).toHaveTextContent('0')
    expect(undoItems).toHaveLength(0)
})

it("List props is [1, 2, 3], count should be 3, undo items length is 3, delete button length is 3", () => {
    const screen = render(<UndoList list={['1', '2', '3']} />)

    const countEl = screen.queryByTestId('count')
    const undoItems = screen.queryAllByTestId('undo-item')
    const delButtons = screen.queryAllByTestId('delete-button')

    expect(countEl).toHaveTextContent('3')
    expect(undoItems).toHaveLength(3)
    expect(delButtons).toHaveLength(3)
})

it('Click delete button, call onDelete callback', () => {
    const fn = vi.fn()

    const screen = render(
        <UndoList
            list={['1', '2', '3']}
            onDelete={fn}
        />
    )
    const delButtons = screen.queryAllByTestId('delete-button')

    fireEvent.click(delButtons.at(1)!)
    expect(fn).toHaveBeenCalledWith('2')
})