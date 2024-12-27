import { IconType } from 'react-icons'
import { FaBoxes, FaClipboardList, FaCube, FaDollarSign, FaTags } from 'react-icons/fa'
import { MasterButton } from '../button/variants/MasterButton'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTabIdx } from '../../reducers/tabReducer'
import { useNavigate } from 'react-router-dom'

interface Path {
  icon: IconType
  label: string
  path: string
}

const MasterNav: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const prefix = 'master'
  const tabIdx = useSelector((state: any) => state.tab.tabIdx)
  const paths: Path[] = [
    { icon: FaClipboardList, label: 'Products (tab)', path: `/${prefix}` },
    { icon: FaBoxes, label: 'Stock (tab)', path: `/${prefix}/stock` },
    { icon: FaCube, label: 'Satuan (tab)', path: `/${prefix}/unit` },
    { icon: FaTags, label: 'Kategory (tab)', path: `/${prefix}/category` },
    { icon: FaDollarSign, label: 'Harga jual (tab)', path: `/${prefix}/price` }
  ]

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      const nextIdx = (tabIdx + 1) % paths.length
      dispatch(setTabIdx(nextIdx))
      navigate(paths[nextIdx].path)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [tabIdx, dispatch])

  return (
    <div>
      <div className="flex gap-x-4">
        {paths.map((item, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <MasterButton index={index} Icon={item.icon} label={item.label} path={item.path} />
          </div>
        ))}
      </div>
    </div>
  )
}

export { MasterNav }
