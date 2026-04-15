export interface ConfigField {
  key: string
  label: string
  type: 'text' | 'number' | 'textarea' | 'select' | 'boolean' | 'json' | 'file' | 'compound-value-upload'
  placeholder?: string
  options?: { label: string; value: string }[]
  multiple?: boolean
  accept?: string
}

