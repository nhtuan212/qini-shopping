import { create } from "zustand";
import { fetchData } from "@/utils/fetch";

type ProductState = {
    loading: boolean;
    products: {
        id: number;
        title: string;
        image: string;
        price: number;
    }[];
};

type ProductAction = {
    getProducts: (url: string) => Promise<void>;
};

const initialState: ProductState = {
    loading: false,
    products: [],
};

export const useProductStore = create<ProductState & ProductAction>()(set => ({
    ...initialState,

    getProducts: async url => {
        set({ loading: true });

        await fetchData({
            endpoint: url,
        })
            .then(data =>
                set({
                    products: data,
                    loading: false,
                }),
            )
            .catch(error => console.error(error));
    },
}));
