import { create } from 'zustand'

export interface StoreAppTypes {
    pdfItem: string;
    setPdfItem: (newPdfItem: StoreAppTypes["pdfItem"]) => void;
}


const useAppStore = create<StoreAppTypes>((set) => ({
    pdfItem: '',
    setPdfItem: newPdfItem => set(()=> ({ pdfItem: newPdfItem }))
}))


export { useAppStore }