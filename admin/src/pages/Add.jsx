import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [features, setFeatures] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Necklaces')
  const [subCategory, setSubCategory] = useState('Silver')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])

  const onSumbitHandler = async (e) => {
    e.preventDefault()

    try {
      
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("features", features)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("colors", JSON.stringify(colors))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: {"token": token}})

      if(response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setFeatures('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setColors([])
        setSizes([])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  return (
    <form onSubmit={onSumbitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={image1 === false ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden/>
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={image2 === false ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden/>
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={image3 === false ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden/>
          </label>

          <label htmlFor="image4">
            <img className='w-20' src={image4 === false ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write product description...' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Features</p>
        <textarea onChange={(e) => setFeatures(e.target.value)} value={features} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write product features/specifications...' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Necklaces">Necklaces</option>
            <option value="Earrings">Earrings</option>
            <option value="Rings">Rings</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Golden">Golden</option>
            <option value="Silver">Silver</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Color</p>
          <input className='w-full px-3 py-2 sm:w-[120px] mt-1' onBlur={(e) => {
              setColors(e.target.value.length > 0 ? [...colors, e.target.value] : colors)
          }} type="text" placeholder='Color One'/>

          <input className='w-full px-3 py-2 sm:w-[120px] mt-1' onBlur={(e) => {
              setColors(e.target.value.length > 0 ? [...colors, e.target.value] : colors)
          }} type="text" placeholder='Color Two'/>

          <input className='w-full px-3 py-2 sm:w-[120px] mt-1' onBlur={(e) => {
              setColors(e.target.value.length > 0 ? [...colors, e.target.value] : colors)
          }} type="text" placeholder='Color Three'/>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25'/>
        </div>
      </div>


      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S"): [...prev, "S"])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('S')? 'bg-orange-200': 'bg-slate-200'}`}>S</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M"): [...prev, "M"])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('M')? 'bg-orange-200': 'bg-slate-200'}`}>M</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L"): [...prev, "L"])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('L')? 'bg-orange-200': 'bg-slate-200'}`}>L</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL"): [...prev, "XL"])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('XL')? 'bg-orange-200': 'bg-slate-200'}`}>XL</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL"): [...prev, "XXL"])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('XXL')? 'bg-orange-200': 'bg-slate-200'}`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)}  checked={bestseller} type="checkbox" id='bestseller'/>
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ADD</button>
    </form>
  )
}

export default Add
