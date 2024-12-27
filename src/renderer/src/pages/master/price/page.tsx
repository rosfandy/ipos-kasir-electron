import MainLayout from '../../../layout/MainLayout'
import { MasterLayout } from '../../../layout/MasterLayout'

export function MasterPrice() {
  return (
    <MainLayout>
      <div className="bg-slate-100 min-h-[90vh] w-full">
        <MasterLayout title="Master Price" desc="Anda dapat update dan delete data price">
          <div className="">price</div>
        </MasterLayout>
      </div>
    </MainLayout>
  )
}
