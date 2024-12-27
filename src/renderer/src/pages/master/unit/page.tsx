import MainLayout from '../../../layout/MainLayout'
import { MasterLayout } from '../../../layout/MasterLayout'

export function MasterUnit() {
  return (
    <MainLayout>
      <div className="bg-slate-100 min-h-[90vh] w-full">
        <MasterLayout title="Master Unit" desc="Anda dapat update dan delete data unit">
          <div className="">unit</div>
        </MasterLayout>
      </div>
    </MainLayout>
  )
}
