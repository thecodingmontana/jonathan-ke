export type ModalType = 'fullView'

export interface ModalData {}

export interface ModalStore {
  type: ModalType | null
  isOpen: boolean
  data: ModalData
}

export interface Image {
  url: string
  content: string
}

export const githubUrl =
  "https://github.com/thecodingmontana/jonathan-ke";
export const twitterUrl = "https://x.com/codewithmontana";