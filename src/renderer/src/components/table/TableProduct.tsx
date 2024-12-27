import React, { useEffect, useState, useRef } from 'react'
import { TableBody } from './body/TableBody'

const TABLE_HEAD = ['No', 'Kode', 'Nama', 'Harga', 'Stok']

interface Props {
  datas?: any
  variants?: any
  isEdit: boolean
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const TableProduct: React.FC<Props> = ({ ...props }) => {
  const { datas, isEdit, setIsEdit } = props
  const [focusedCell, setFocusedCell] = useState<number | null>(0)
  const tableBodyRef = useRef<HTMLTableSectionElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isEdit) return

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setFocusedCell((prev) => {
          const newIndex = Math.min((prev ?? 0) + 1, (datas?.length || 0) - 1)
          scrollToCell(newIndex)
          return newIndex
        })
        break

      case 'ArrowUp':
        event.preventDefault()
        setFocusedCell((prev) => {
          const newIndex = Math.max((prev ?? 0) - 1, 0)
          if (newIndex === 0) {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
            }
          } else {
            scrollToCell(newIndex)
          }
          return newIndex
        })
        break

      case 'Escape':
        event.preventDefault()
        setFocusedCell(null)
        setIsEdit(false)
        if (scrollContainerRef.current)
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
        break

      default:
        break
    }
  }

  const scrollToCell = (index: number) => {
    if (tableBodyRef.current) {
      const cell = tableBodyRef.current.children[index]
      if (cell) {
        cell.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    isEdit ? setFocusedCell(0) : setFocusedCell(null)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isEdit])

  return (
    <div ref={scrollContainerRef} className="w-full overflow-auto max-h-[50vh]">
      <table className="w-full min-w-max table-auto text-left shadow-md">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 p-4 bg-blue-200 font-medium">
                {head}
              </th>
            ))}
            {isEdit && (
              <th className="border-b border-blue-gray-100 p-4 bg-blue-200 font-medium">Aksi</th>
            )}
          </tr>
        </thead>
        <TableBody isEdit={isEdit} datas={datas} focusedCell={focusedCell} ref={tableBodyRef} />
      </table>
    </div>
  )
}

export { TableProduct }
