import { render, fireEvent } from '@testing-library/react'
import TodoList from 'pages/Todo'
import {inputTestId} from './Header.test'

const undoItemTestId = 'undo-item'

it('TodoList initial, undoList should be an empty array', () => {
    const screen = render(<TodoList />)

    const allUndoItems = screen.queryAllByTestId(undoItemTestId)
    expect(allUndoItems).toHaveLength(0)
})

it('Add new data when Header onAdd callback is called', () => {
    const screen = render(<TodoList />)

    const inputEl = screen.queryByTestId(inputTestId)
    
    const content = 'have a lunch'
    fireEvent.keyUp(inputEl!, {
        key: 'Enter',
        target: {
            value: content
        }
    })

    const allUndoItems = screen.queryAllByTestId(undoItemTestId)
    expect(allUndoItems).toHaveLength(1)
    expect(allUndoItems.at(0)).toHaveTextContent(content)
})

it('Delete data when UndoList onDelete callback is called', () => {
    const screen = render(<TodoList />)

    // add task
    const inputEl = screen.queryByTestId(inputTestId)
    const content = 'have a lunch'
    fireEvent.keyUp(inputEl!, {
        key: 'Enter',
        target: {
            value: content
        }
    })

    // delete task
    const deleteButton = screen.queryByTestId('delete-button')
    fireEvent.click(deleteButton!)

    const allUndoItems = screen.queryAllByTestId('undo-item')
    expect(allUndoItems).toHaveLength(0)
})