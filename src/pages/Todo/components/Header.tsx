import { FC, useState } from 'react'
import { memo } from 'react'

type HeaderProps = {
    className?: string
    onAdd?: (task: string) => void
}

export const Header: FC<HeaderProps> = memo(({className, onAdd}) => {
    const [taskTitle, setTaskTitle] = useState('')

    return (
        <div className={className}>
            <input
                value={taskTitle}
                onChange={({target}) => setTaskTitle(target.value)}
                type="text"
                placeholder='task title'
                data-testid="header-input"
                onKeyUp={({key, target}) => {
                    const value = (target as HTMLInputElement).value
                    if (key === "Enter" && value !== '') {
                        onAdd?.(value)
                        setTaskTitle('')
                    }
                }}
            />
        </div>
    )
})

Header.displayName = 'Header'