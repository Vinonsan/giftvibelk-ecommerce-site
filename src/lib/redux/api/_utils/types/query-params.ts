export type QueryParamValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Array<string | number | boolean>

export type QueryParams = Record<string, QueryParamValue>
