import React from 'react'

import { twMerge } from 'tailwind-merge'

interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {}

export const TableHead = React.forwardRef<
  HTMLTableHeaderCellElement,
  TableHeadProps
>(({ ...props }, ref) => {
  return (
    <th
      {...props}
      ref={ref}
      className={twMerge(
        'p-2 text-left text-xs font-medium text-gray-400 md:text-sm',
        props.className,
      )}
    />
  )
})

TableHead.displayName = 'TableHead'
