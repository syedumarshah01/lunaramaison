import { v2  as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'
// Function for add product

const addProduct = async (req, res) => {
    try {        
        const { name, description, features, price, category, subCategory, sizes, colors, bestseller } = req.body
        const peshawariChappalSizes = ["us-6-eu-39-uk-5-5", "us-7-eu-40-uk-6-5", "us-8-eu-41-uk-7-5", "us-9-eu-42-uk-8-5"]

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]


        const images = [image1, image2, image3, image4].filter((item) => item!== undefined)
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'})
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            features,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true: false,
            sizes: category === "Peshawari Chappal" ? peshawariChappalSizes : JSON.parse(sizes),
            colors: JSON.parse(colors),
            image: imagesUrl,
            date: Date.now()
        }


        const product = new productModel(productData)
        await product.save()

        res.json({success: true, message: "Product Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Function for list products

const listProducts = async (req, res) => {
    try {

        const {fetchLimit, offset} = req.body
        const products = await productModel.find({}).skip(offset).limit(fetchLimit)
        if(products.length > 0) {
            res.json({success: true, products})
        } else {
            res.json({success: true, products})
        }
        

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Function for remove product

const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product Removed."})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Function for single product info

const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body
        const product = await productModel.findById(productId)

        res.json({success: true, product})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {
    listProducts, addProduct, removeProduct, singleProduct
}