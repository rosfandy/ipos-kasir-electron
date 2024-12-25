import { cva } from 'class-variance-authority'
import { FC, ReactNode } from 'react'
import { cn } from '../../utils/utils'

interface ButtonProps {
  label: string
  onClick?: (e: any) => void
  disabled?: boolean
  icon?: ReactNode
  style?: React.CSSProperties
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'secondary' | 'danger' | 'success' | 'warning'
}

const Variants = cva(
  'flex items-center font-bold gap-x-4 justify-center duration-200 transition-all rounded shadow-lg text-white',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 shadow-blue-200 hover:bg-blue-600',
        secondary: 'bg-gray-500 shadow-gray-200 hover:bg-gray-600',
        danger: 'bg-red-500 shadow-red-200 hover:bg-red-600',
        success: 'bg-green-500 shadow-green-200 hover:bg-green-600',
        warning: 'bg-yellow-500 shadow-yellow-200 hover:bg-yellow-600'
      },
      size: {
        small: 'px-4 py-1',
        medium: 'px-8 py-2',
        large: 'px-12 py-3'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium'
    }
  }
)

const Button: FC<ButtonProps> = ({ ...props }) => {
  const { label, onClick, disabled, size, icon: Icon, style, variant } = props

  return (
    <button
      className={cn(Variants({ variant, size }))}
      disabled={disabled}
      style={style}
      onClick={onClick}
    >
      {disabled ? 'Loading...' : label}
      {!disabled && Icon && Icon}
    </button>
  )
}

export { Button }
