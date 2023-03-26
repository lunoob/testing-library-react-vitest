import { FC, useState } from 'react'
import { memo } from 'react'
import {Header} from './components/Header'
import {UndoList} from './components/UndoList'

type TodoProps = {
    className?: string
}

const Todo: FC<TodoProps> = memo(({className}) => {
    const [undoList, setUndoList] = useState<string[]>([])

    return (
        <div className={className}>
            <Header
                onAdd={(task) => {
                    setUndoList([...undoList, task])
                }}
            />
            <UndoList
                list={undoList}
                onDelete={(task) => {
                    setUndoList(undoList.filter(n => n !== task))
                }}
            />
        </div>
    )
})

Todo.displayName = 'Todo'

export default Todo