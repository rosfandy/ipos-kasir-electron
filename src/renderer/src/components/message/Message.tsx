import { FC } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/utils'
import { LuX } from 'react-icons/lu'

interface MessageProps {
  text: string
  variant: 'success' | 'danger'
  onClick: () => void
}

const Variants = cva('flex gap-x-4 items-center mt-2', {
  variants: {
    variant: {
      success: 'text-green-600',
      danger: 'text-red-600'
    }
  }
})

const Message: FC<MessageProps> = ({ ...props }) => {
  const { text, variant, onClick } = props
  return (
    <div className={cn(Variants({ variant }))}>
      <div>{text}</div>
      <div onClick={onClick} className="cursor-pointer">
        <LuX size={20} />
      </div>
    </div>
  )
}

export { Message }
