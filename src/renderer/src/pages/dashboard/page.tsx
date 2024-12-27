import { FaSearch } from 'react-icons/fa'
import { InputText } from '../../components/input/InputText'
import MainLayout from '../../layout/MainLayout'

export function DashboardPage() {
  return (
    <MainLayout>
      <div className="bg-slate-100 min-h-[90vh] w-full py-6 px-4">
        <div className="">
          {/* Input Section */}
          <div className="flex">
            <div className=" bg-white w-2/3 px-4 py-6 border ">
              <div className="mb-4 font-semibold uppercase">cari barang</div>
              <div className="flex items-center">
                <InputText
                  placeholder="Input Text"
                  name="input"
                  label="input"
                  type="text"
                  outline="box"
                  icon={<FaSearch />}
                  className="py-2 bg-blue-100/50 w-full rounded"
                />
                <div className="italic w-1/5 text-center ">{'(ctrl + e)'}</div>
              </div>
            </div>
            {/* Price Section */}
            <div className="bg-white w-2/3 px-4 py-6 border">
              <div className="font-semibold text-xl">A Mild</div>
              <div className="text-end text-4xl font-bold">Rp. 20.000</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
