export type ModalType = 'fullView'

export interface ModalData {}

export interface ModalStore {
  type: ModalType | null
  isOpen: boolean
  data: ModalData
}