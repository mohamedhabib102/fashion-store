import { db, Product } from "@/lib/db"
import { toast } from "react-toastify";

export const getAllProducts = () => {
    return db
};


export const getProductDyId = (id: number) => {
    return db.find((p) => p.id === id)
}


export const getAllCategories = (category: string) => {
   if (category === "all") {
    return db
   }else{
    return db.filter((p) => p.category === category)
   }
}

export const handelCart = async(product: Product, action: "add" | "remove") => {
    const cart = localStorage.getItem("cart")

    if (!cart) {
       await localStorage.setItem("cart", JSON.stringify([product]))
        toast.success("Product added to cart", {
            position: "top-right",
            autoClose: 1000,
        });
    }else{
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]")
        if (action === "add"){
            const filterCart = cartItems.find((p:Product) => p.id === product.id)
            if (filterCart) {
                toast.error("Product already in cart", {
                    position: "top-right",
                    autoClose: 1000,
                });
                return
            }
            await localStorage.setItem("cart", JSON.stringify([...cartItems, product]))
            toast.success("Product added to cart", {
            position: "top-right",
            autoClose: 1000,
        });
        } else{
            await localStorage.setItem("cart", 
                JSON.stringify(cartItems.filter((p:Product) => p.id !== product.id))
            )
            toast.success("Product removed from cart", {
            position: "top-right",
            autoClose: 1000,
        });
        }
    }
}

export const removeAllCart = () => {
    localStorage.removeItem("cart")
    toast.success("Payment Success", {
        position: "top-right",
        autoClose: 1000,
    });
    setTimeout(() => {
        window.location.href = "/"
    }, 1000)
}


export const handelFavo = async(product: Product, action: "add" | "remove") => {
    const cart = localStorage.getItem("Favo")

    if (!cart) {
       await localStorage.setItem("Favo", JSON.stringify([product]))
        toast.success("Product added to Favourite", {
            position: "top-right",
            autoClose: 1000,
        });
    }else{
        const favoItems = JSON.parse(localStorage.getItem("Favo") || "[]")
        if (action === "add"){
            const filterFavo = favoItems.find((p:Product) => p.id === product.id)
            if (filterFavo) {
                toast.error("Product already in Favourite", {
                    position: "top-right",
                    autoClose: 1000,
                });
                return
            }
            await localStorage.setItem("Favo", JSON.stringify([...favoItems, product]))
            toast.success("Product added to Favourite", {
            position: "top-right",
            autoClose: 1000,
        });
        } else{
            await localStorage.setItem("Favo", 
                JSON.stringify(favoItems.filter((p:Product) => p.id !== product.id))
            )
            toast.success("Product removed from Favourite", {
            position: "top-right",
            autoClose: 1000,
        });
        }
    }
}

export const removeAllFavo = () => {
    localStorage.removeItem("Favo")
    toast.success("All Favourite removed", {
        position: "top-right",
        autoClose: 1000,
    });
    setTimeout(() => {
        window.location.href = "/"
    }, 1000)
}

