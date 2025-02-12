import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    
    const currency = '$'
    const delivery_fee = 10
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const addToCart = async (itemId, size, color) => {
        let product = products.filter((item) => item._id === itemId)[0]
        if(product.sizes.length && !size) {
            toast.error("Select Product Size")
            return
        } else if(product.sizes.length && size) {
            let cartData = structuredClone(cartItems)

            if(cartData[itemId]) {
                if(cartData[itemId][size]) {
                    cartData[itemId][size] += 1
                } else {
                    cartData[itemId][size] = 1
                }
            } else {
                cartData[itemId] = {}
                cartData[itemId][size] = 1
            }

            setCartItems(cartData)
        }
        
        if (product.colors.length && !color){
            toast.error("Select Product Color")
            return
        } else if(product.colors.length && color) {
            let cartData = structuredClone(cartItems)

            if(cartData[itemId]) {
                if(cartData[itemId][color]) {
                    cartData[itemId][color] += 1
                } else {
                    cartData[itemId][color] = 1
                }
            } else {
                cartData[itemId] = {}
                cartData[itemId][color] = 1
            }

            setCartItems(cartData)
        }

        // if(!size) {
        //     toast.error('Select Product Size')
        //     return
        // }        
        // let cartData = structuredClone(cartItems)

        // if(cartData[itemId]) {
        //     if(cartData[itemId][size]) {
        //         cartData[itemId][size] += 1
        //     } else {
        //         cartData[itemId][size] = 1
        //     }
        // } else {
        //     cartData[itemId] = {}
        //     cartData[itemId][size] = 1
        // }

        // setCartItems(cartData)

        if(token) {
            try {
                const response = await axios.post(backendUrl + '/api/cart/add', {itemId, size, color}, {headers: {token}})
                if(response.data.success) {
                    toast.success(response.data.message)
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }


    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItems) {
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                }
                catch (error) {

                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity

        setCartItems(cartData)

        if(token) {
            try {
                const response = await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers: {token}})
                if(response.data.success) {
                    toast.success(response.data.message)
                }
            } catch (error) 
            {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            let itemInfo = products.find((product) => product._id === item)
            for(const size in cartItems[item]) {
                try {
                    if(cartItems[item][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[item][size]
                    }
                }
                catch (error) {

                }
            }
           
        }
        return totalAmount
    }    

    const getProductsData = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(backendUrl + '/api/product/list')

            if(response.data.success) {
                setProducts(response.data.products)
                setIsLoading(false)
            } else {
                toast.error(response.data.message)
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers: {token}})
            if(response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if(!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch,
        showSearch, setShowSearch, setCartItems,
        cartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount,
        navigate, backendUrl,
        setToken, token, isLoading
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider