import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all the fields" };
    }

    // likhne wala part kam hogya
    // cors lag gaya -> proxy(browser ko dikh rha single but hai double -> frontend and ek mera backend)

    const res = await fetch("/v1/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    // here state is the previous state of my database
    return {success:true,message:"Product created successfully"}
  },
  fetchProducts: async ()=>{
    const res = await fetch("/v1/api/products");
    const data = await res.json();
    set({products:data.data})
  },
  deleteProduct: async(pid)=>{
    const res = await fetch(`/v1/api/products/${pid}`,{
      method:"DELETE",
    })
    const data = await res.json();
    if(!data.success){
      return {success:false, message: data.message};
    }
    set((state)=>({
      products:state.products.filter((product)=>product._id!=pid),
    }))
    return {success:true,message:data.message};
    
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/v1/api/products/${pid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));
    return { success: true, message:data.message };
  },
}));

// const [state,setState] = useState({})