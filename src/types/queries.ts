type FilterOptions =
  | 'equals'
  | 'not_equals'
  | 'less_than'
  | 'greater_than'
  | 'contains'
  | 'exists'
  | 'not_exists'
  | 'begins_with'

export type Queries = {
  draftKey?: string
  limit?: number
  offset?: number
  orders?: {
    direction?: 'ascend' | 'descend'
    key: string
  }
  fields?: string[]
  ids?: string[]
  filters?: string
  depth?: 1 | 2 | 3
}
