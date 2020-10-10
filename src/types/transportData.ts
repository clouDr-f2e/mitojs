import { ERRORTYPES } from '../common'
import { BreadcrumbPushData } from './breadcrumb'

export interface AuthInfo {
  apikey: string
  sdkVersion: string
  trackerId: string
}

export interface TransportDataType {
  authInfo: AuthInfo
  breadcrumb: BreadcrumbPushData[]
  data: ReportDataType
  record?: any[]
}

export interface ReportDataType {
  type?: ERRORTYPES
  message?: string | object
  url: string
  name?: string
  stack?: any
  time?: number
  errorId?: number
  level: string
  // ajax
  elapsedTime?: number
  request?: {
    httpType?: string
    traceId?: string
    method: string
    url: string
    data: any
  }
  response?: {
    status: number
    statusText: string
    data: string
    description: string
  }
  // vue
  componentName?: string
  propsData?: any
  // logError 手动报错 MITO.log
  customTag?: string
  customInfo?: string
}
