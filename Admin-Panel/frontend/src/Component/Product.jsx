import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Product() {

    const [product, setproduct] = useState([])
    const [category_data, setcategory_data] = useState([])
    
    useEffect(() => {
        fetchdata()
        show_category()
    }, [])

    const fetchdata = async () => {
        try{
            let productdata = await axios.get("http://localhost:4512/product")
            setproduct(productdata.data)
        } catch(error){
            console.error("Failed to fetch product",error);
        }
        
    }

     const show_category = async () => {
        try{
            const res = await axios.get("http://localhost:4512/category")
            setcategory_data(res.data)
        } catch(error){
            console.error("Failed to fetch category",error);
        }
    }

    const [form, setForm] = useState({
        title: '',
        price: '',
        categoryId: '',
        image: null
    })
    const imageRef = useRef()

    const handlechange = (e) => {
        const { name, value, files } = e.target

        if (name === "image") {
            setForm({ ...form, image: files[0] })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:4512/product", form,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
    
            setForm({
                title: '',
                price: '',
                categoryId: ''
            })

            imageRef.current.value = null
            fetchdata()
            alert("Product added successfully")
        
        } catch(error){
            console.error("Failed to add product",error);
        }
    }

    return (
        <>
            <form encType="multipart/form-data" onSubmit={handlesubmit}>

                <label>Title: </label>
                <input type="text" name="title" onChange={handlechange} value={form.title} required /><br /><br />

                <label>Price: </label>
                <input type="number" name="price" onChange={handlechange} value={form.price} required/><br /><br />

                <label>Image: </label>
                <input type="file" name="image" onChange={handlechange} ref={imageRef} required /><br /><br />

                <label>Category: </label>
                <select name='categoryId' value={form.categoryId} onChange={handlechange} required>
                    <option value="" disabled>Select Ctaegory</option>
                    {Array.isArray(category_data) && category_data.map((p)=>(
                        <option key={p._id} value={p._id}>{p.name}</option>
                    ))}
                </select><br /><br />
                <input type="submit" />
            </form>
            
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(product) && product.map((data) => (
                        <tr key={data._id}>
                            <td><img src={`http://localhost:4512/${data.image}`} width="100" height="100" /></td>
                            <td>{data.title}</td>
                            <td>₹{data.price}</td>
                            <td>{data.categoryId.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
