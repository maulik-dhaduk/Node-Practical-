import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Category() {

    const [name, setname] = useState("")
    const [category_data, setcategory_data] = useState([])


    const show_category = async () => {
        try{
            const res = await axios.get("http://localhost:4512/category")
            setcategory_data(res.data)
        } catch(error){
            console.error("Failed to fetch category",error);
        }
    }

    useEffect(() => {
        show_category()
    }, [])

    const handlesubmit = async (e) => {
        e.preventDefault()
        
        try {
            await axios.post("http://localhost:4512/category", { name })
            setname("")
            show_category()
        } catch (error) {
            console.error("Failed to add category", error)
        }
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={(e) => setname(e.target.value)} value={name} required /><br /><br />
                <input type="submit" />
            </form><br />

            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(category_data) && category_data.map((data) => (
                        <tr key={data._id}>
                            <td>{data.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
