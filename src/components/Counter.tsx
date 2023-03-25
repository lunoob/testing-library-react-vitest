import type { FC } from 'react'
import { memo } from 'react'

type CounterProps = object

export const Counter: FC<CounterProps> = memo(() => {
    return (
        <div>
            <span data-testid="count-value">count</span>
        </div>
    )
})

Counter.displayName = 'Counter'