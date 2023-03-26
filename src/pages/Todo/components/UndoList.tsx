import type { FC } from 'react'
import { memo } from 'react'

type UndoListProps = {
    className?: string
    list: string[]
    onDelete?: (content: string) => void
}

export const UndoList: FC<UndoListProps> = memo(({className, list, onDelete}) => {
    return (
        <div className={className}>
            <p>
                <span>undo list - </span>
                <span data-testid="count">{list.length}</span>
            </p>
            <ul>
                {list.map((n) => (
                    <li data-testid="undo-item" key={n}>
                        {n}
                        <button 
                            data-testid="delete-button"
                            onClick={() => onDelete?.(n)}>
                            del
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
})

UndoList.displayName = 'UndoList'