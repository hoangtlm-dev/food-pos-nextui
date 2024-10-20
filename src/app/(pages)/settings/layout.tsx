// Libs
import { ReactNode } from 'react'

// Components
import { SettingsNavbar } from '@/components'

const Settings = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-6 p-6 xl:h-full xl:gap-8 xl:px-8">
      <h1 className="text-lg font-semibold">Settings</h1>
      <div className="flex grow flex-col gap-6 overflow-hidden xl:flex-row xl:gap-8">
        <SettingsNavbar />
        {children}
      </div>
    </div>
  )
}

export default Settings
