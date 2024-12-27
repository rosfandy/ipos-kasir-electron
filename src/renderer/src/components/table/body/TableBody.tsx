import React, { forwardRef } from 'react'
import { TableCell } from '../cell/TableCell'
import { FaSave, FaTrashAlt } from 'react-icons/fa'

interface TableBodyProps {
  datas: any[]
  focusedCell: number | null
  isEdit: boolean
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ datas, focusedCell, isEdit }, ref) => {
    return (
      <tbody ref={ref}>
        {datas && datas.length > 0 ? (
          datas.map((data: any, index: number) => (
            <tr key={index}>
              <TableCell
                className="w-0"
                isSelected={focusedCell === index}
                index={index}
                content={index + 1}
              />
              <TableCell
                isSelected={focusedCell === index}
                index={index}
                content={data.kodeProduk}
              />
              <TableCell
                isSelected={focusedCell === index}
                index={index}
                content={data.namaProduk}
              />
              <TableCell isSelected={focusedCell === index} index={index} content={data.harga} />
              <TableCell isSelected={focusedCell === index} index={index} content={data.stok} />
              {isEdit && (
                <TableCell
                  isSelected={focusedCell === index}
                  index={index}
                  className="w-[10px]"
                  content={
                    <div className="flex gap-x-4 items-center">
                      <div className="bg-blue-500 px-4 py-2 rounded">
                        <FaSave className="text-white" size={16} />
                      </div>
                      <div className="bg-red-500 px-4 py-2 rounded">
                        <FaTrashAlt className="text-white" size={16} />
                      </div>
                    </div>
                  }
                />
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="p-2 text-center text-gray-500">
              Tidak ada data
            </td>
          </tr>
        )}
      </tbody>
    )
  }
)

export { TableBody }
