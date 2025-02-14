
// Add products to user cart

import userModel from "../models/userModel.js"

const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size, color } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        
        if(size && color) {
            const sizeAndColor = `${size} ${color}`
            if(cartData[itemId]) {
                if(cartData[itemId][sizeAndColor]) {
                    cartData[itemId][sizeAndColor] += 1
                } else {
                    cartData[itemId][sizeAndColor] = 1
                }
            } else {
                cartData[itemId] = {}
                cartData[itemId][sizeAndColor] = 1
            }
        } else if(size) {
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
        } else if(color) {
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
        }
        // if(size) {
        //     if(cartData[itemId]) {
        //         if(cartData[itemId][size]) {
        //             cartData[itemId][size] += 1
        //         } else {
        //             cartData[itemId][size] = 1
        //         }
        //     } else {
        //         cartData[itemId] = {}
        //         cartData[itemId][size] = 1
        //     }
        // }
        
        // if(color) {
        //     if(cartData[itemId]) {
        //         if(cartData[itemId][color]) {
        //             cartData[itemId][color] += 1
        //         } else {
        //             cartData[itemId][color] = 1
        //         }
        //     } else {
        //         cartData[itemId] = {}
        //         cartData[itemId][color] = 1
        //     }
        // }
        

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: "Added to Cart"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// Update user cart
const updateCart = async (req, res) => {
    try {
        const {userId, itemId, size, quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        
        
        // if(quantity === 0) {
        //     delete cartData[itemId]
        // } else {
        //     cartData[itemId][size] = quantity
        // }
        cartData[itemId][size] = quantity

        

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: "Cart Updated"})

        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Get user cart

const getUserCart = async (req, res) => {
    try {
        const {userId} = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        res.json({success: true, cartData})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
} 


export {addToCart, updateCart, getUserCart}