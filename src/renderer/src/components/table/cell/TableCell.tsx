import { cn } from '../../../utils/utils'

interface Props {
  index: number
  content: any
  className?: string
  isSelected: boolean
}
const TableCell: React.FC<Props> = ({ content, isSelected, className }) => {
  return (
    <td
      className={cn(
        `p-4 border-b w-[100px]
        ${isSelected ? 'bg-blue-50' : ''}
    `,
        className
      )}
    >
      {content}
    </td>
  )
}

export { TableCell }
