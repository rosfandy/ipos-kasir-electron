import { FaSearch } from 'react-icons/fa'
import { InputText } from '../../components/input/InputText'
import { TableProduct } from '../../components/table/TableProduct'
import MainLayout from '../../layout/MainLayout'
import { MasterLayout } from '../../layout/MasterLayout'
import { Button } from '../../components/button/Button'
import { useEffect, useRef, useState } from 'react'

export function MasterPage() {
  const [isEdit, setIsEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const editRef = useRef<HTMLButtonElement | null>(null)
  const addRef = useRef<HTMLButtonElement | null>(null)
  const datas = [
    { kodeProduk: '001', namaProduk: 'A Mild Rokok Djarum Super', harga: 'Rp. 20.000', stok: '10' }
  ]

  const openAddProductWindow = () => {
    window.open('', 'modal')
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (true) {
      case event.ctrlKey && event.key === 'e':
        event.preventDefault()
        setIsEdit(true)
        break
      case event.ctrlKey && event.key === 'f':
        event.preventDefault()
        inputRef.current?.focus()
        break
      case event.ctrlKey && event.key === 't':
        event.preventDefault()
        openAddProductWindow()
        break
      case event.key === 'Escape':
        if (document.activeElement === inputRef.current) {
          inputRef.current?.blur()
        } else {
          setIsEdit(false)
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isEdit])

  return (
    <MainLayout>
      <div className="bg-slate-100 min-h-[90vh] w-full">
        <MasterLayout title="Master Product" desc="Anda dapat update dan delete data produk">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
              <div className="w-1/3 flex items-center gap-x-4">
                <InputText
                  placeholder="Cari produk"
                  name="input"
                  label="input"
                  type="text"
                  outline="box"
                  icon={<FaSearch />}
                  ref={inputRef}
                  className="w-full rounded-md py-2 bg-blue-100/50"
                />
                <div className="italic text-gray-500">{'(ctrl+f)'}</div>
              </div>
              <div className="flex flex-col gap-y-4">
                <Button ref={addRef} label="Tambah (ctrl+t)" className="text-sm" />
                <Button
                  ref={editRef}
                  onClick={() => setIsEdit(!isEdit)}
                  label={isEdit ? 'Batal (esc)' : 'Edit (ctrl+e)'}
                  className="text-sm"
                  variant="secondary"
                />
              </div>
            </div>
            <TableProduct datas={datas} isEdit={isEdit} setIsEdit={setIsEdit} />
          </div>
        </MasterLayout>
      </div>
    </MainLayout>
  )
}
