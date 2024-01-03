import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Romance",
    "Comedy",
    "History",
    "Mistery",
    "Programming",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiographiy",
    "Self-help",
    "Memorial",
    "Bussiness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChanageSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl
      font-bold'>Upload A Book</h2>

    <form className="flex lg:w-[1180px] flex-col
    flex-wrap gap-4">
      {/* First row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" 
          value="Book Title" />
        </div>
        <TextInput 
          name='bookTitle'
          id="bookTitle" 
          type="text" 
          placeholder="Book Name" 
          required />
      </div>
      {/* Autho name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" 
          value="Author Name" />
        </div>
        <TextInput 
          name='authorName'
          id="authorName" 
          type="text" 
          placeholder="Author Name" 
          required />
      </div>
      </div>

      {/* Sec row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" 
          value="Image URL" />
        </div>
        <TextInput 
          name='imageURL'
          id="imageURL" 
          type="text" 
          placeholder="Image URL" 
          required />
      </div>
      {/* Category name */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label 
            htmlFor="inputState" 
            value="Category" 
          />
        </div>
        <Select id='inputState' name='categoryName'
          className='w-full rounded'
          value={selectedBookCategory}
          onChange={handleChanageSelectedValue}
          >
            {
              bookCategories.map((option) => <option key={option}
              value={option}>{option}</option>)
            }
        </Select>
      </div>
      </div>

      
    </form>
    </div>
  )
}

export default UploadBook