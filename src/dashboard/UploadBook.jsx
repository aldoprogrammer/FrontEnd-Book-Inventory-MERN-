import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

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

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj = {
      bookTitle: bookTitle,
      authorName: authorName,
      imageURL: imageURL,
      category: category,
      bookDescription: bookDescription,
      bookPDFURL: bookPDFURL
    }

    console.log(bookObj);

    // send data to mongodb
    fetch('http://localhost:5000/upload-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert('Book uploaded successfully');
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl
      font-bold'>Upload A Book</h2>

    <form 
      className="flex lg:w-[1180px] flex-col
        flex-wrap gap-4"
      onSubmit={handleBookSubmit}
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
          required />
      </div>


      <Button 
        className='mt-5'
        type="submit">
          Upload Book
      </Button>


    </form>
    </div>
  )
}

export default UploadBook