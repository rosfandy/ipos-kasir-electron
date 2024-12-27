import MainLayout from '../../../layout/MainLayout'
import { MasterLayout } from '../../../layout/MasterLayout'

export function MasterCategory() {
  return (
    <MainLayout>
      <div className="bg-slate-100 min-h-[90vh] w-full">
        <MasterLayout title="Master Kategori" desc="Anda dapat update dan delete data unit">
          <div className="">category</div>
        </MasterLayout>
      </div>
    </MainLayout>
  )
}
