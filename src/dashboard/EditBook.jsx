import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom'

const EditBook = () => {
  const {id} = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL
  } = useLoaderData();

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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const updateBookObj = {
      bookTitle: bookTitle,
      authorName: authorName,
      imageURL: imageURL,
      category: category,
      bookDescription: bookDescription,
      bookPDFURL: bookPDFURL
    }

    // console.log(bookObj);
    // update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    })
  .then(res => res.json())
  .then(data => {
    alert("Book updated succesfully")
  })

    
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl
      font-bold'>Update The Book Data</h2>
    <form 
      className="flex lg:w-[1180px] flex-col
        flex-wrap gap-4"
      onSubmit={handleUpdate}
    >
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
          required
          defaultValue={bookTitle} 
          />
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
          required 
          defaultValue={authorName}
          />
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
          required 
          defaultValue={imageURL}
          />
      </div>
      {/* Category name */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label 
            htmlFor="inputState" 
            value="Category" 
          />
        </div>
        <Select id='inputState' name='category'
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

      {/* Book Description */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookDescription" 
          value="Book Description" />
        </div>
        <Textarea 
          name='bookDescription'
          id="bookDescription" 
          type="text" 
          placeholder="Book Description..." 
          required 
          className='w-full '
          rows={5}
          defaultValue={bookDescription}
          />
      </div>

      {/* Book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="bookPDFURL" 
            value="Book PDF URL" />
        </div>
        <TextInput 
          id="bookPDFURL" 
          type="text" 
          name='bookPDFURL'
          placeholder="Book PDF URL" 
          defaultValue={bookPDFURL}
          required />
      </div>


      <Button 
        className='mt-5'
        type="submit">
          Update Book
      </Button>


    </form>
    </div>
  )
}

export default EditBook