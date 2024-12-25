import { cva } from 'class-variance-authority'
import { FC, ReactNode, useState } from 'react'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { cn } from '../../utils/utils'

interface InputProps {
  placeholder: string
  name: string
  label: string
  type: string
  icon?: ReactNode
  style?: React.CSSProperties
  variant?: 'default' | 'danger'
}

const Variants = cva('p-4 border-b-2 flex gap-x-4 items-center duration-200 transition-all', {
  variants: {
    variant: {
      default: 'focus-within:border-blue-500',
      danger: 'focus-within:border-red-500'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const InputText: FC<InputProps> = ({ ...props }) => {
  const { icon: Icon, type, placeholder, name, label, variant } = props
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className={cn(Variants({ variant }))}>
      <div className="flex items-center gap-x-4 w-full ">
        <label className="" htmlFor={label}>
          {Icon && Icon}
        </label>
        <input
          type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
          placeholder={placeholder}
          name={name}
          id={label}
          className="bg-transparent border-none outline-none w-full"
        />
      </div>
      {type === 'password' && (
        <div className="flex justify-end items-center">
          <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
          </button>
        </div>
      )}
    </div>
  )
}

export { InputText }
