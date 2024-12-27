import MainLayout from '../../../layout/MainLayout'
import { MasterLayout } from '../../../layout/MasterLayout'

export function MasterStock() {
  return (
    <MainLayout>
      <div className="bg-slate-100 min-h-[90vh] w-full">
        <MasterLayout title="Master Stock" desc="Anda dapat update dan delete data stock">
          <div className="">stock</div>
        </MasterLayout>
      </div>
    </MainLayout>
  )
}
