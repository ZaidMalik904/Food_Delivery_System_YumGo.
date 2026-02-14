import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Trash2 } from 'lucide-react' // Import Trash2

const List = ({ url }) => {

  const [list, setList] = useState([]);

  const [currCategory, setCurrCategory] = useState("All");

  const listFood = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.foods);
      }
      else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  }

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await listFood();
      if (response.data.success) {
        toast.success(response.data.message);
      }
      else {
        toast.error("Error removing food");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  }

  useEffect(() => {
    listFood();
  }, [])

  return (
    <div className='list add flex-col'>
      <div className="list-header">
        <p>All Foods List</p>
        <select onChange={(e) => setCurrCategory(e.target.value)} className='list-category-select'>
          <option value="All">All Categories</option>
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Desserts">Desserts</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure Veg">Pure Veg</option>
          <option value="Pasta">Pasta</option>
          <option value="Noodles">Noodles</option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Drinks">Drinks</option>
        </select>
      </div>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.filter(item => currCategory === "All" || item.category === currCategory).map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <div className='flex justify-center'>
                <Trash2 size={20} onClick={() => removeFood(item._id)} className='cursor hover:text-red-500 transition-colors' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List