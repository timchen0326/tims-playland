// ReduxProvider.tsx
'use client'

import { Provider } from 'react-redux'
import { store } from '@/util/redux/store'

// 創建 ReduxProvider 組件，將 Redux store 提供給其子組件
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
