import { create } from 'zustand'


interface useStageModalProps {
  isOpen: boolean;
  data: any
  setData: (data: any) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useStageModal = create<useStageModalProps>((set) => ({
  isOpen: false,
  data: null,
  setData: (data) => set(() => ({ data: data})),
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false, data: null })),
}))

export default useStageModal