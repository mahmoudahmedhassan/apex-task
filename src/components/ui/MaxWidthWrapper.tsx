import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 md:px-20 2xl:px-27',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper