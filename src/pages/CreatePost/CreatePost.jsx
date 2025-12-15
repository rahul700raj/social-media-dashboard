import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createPost } from '../../store/slices/postsSlice';
import toast from 'react-hot-toast';
import { Image } from 'lucide-react';
import './CreatePost.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.posts);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      const postData = {
        title: data.title,
        body: data.body,
        image: imagePreview || `https://picsum.photos/seed/${Date.now()}/600/400`,
      };
      
      await dispatch(createPost(postData)).unwrap();
      toast.success('Post created successfully!');
      navigate('/');
    } catch (err) {
      toast.error('Failed to create post');
    }
  };

  const handleImageChange = (e) => {
    const url = e.target.value;
    if (url) {
      setImagePreview(url);
    }
  };

  return (
    <div className="create-post-page">
      <h1 className="page-title">Create New Post</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            id="title"
            type="text"
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters',
              },
            })}
            className={errors.title ? 'error' : ''}
            placeholder="Enter post title"
          />
          {errors.title && <span className="error-message">{errors.title.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="body">Description</label>
          <textarea
            id="body"
            {...register('body', {
              required: 'Description is required',
              minLength: {
                value: 10,
                message: 'Description must be at least 10 characters',
              },
            })}
            className={errors.body ? 'error' : ''}
            placeholder="What's on your mind?"
            rows="5"
          />
          {errors.body && <span className="error-message">{errors.body.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="image">
            <Image size={20} /> Image URL (optional)
          </label>
          <input
            id="image"
            type="url"
            onChange={handleImageChange}
            placeholder="Enter image URL"
          />
        </div>

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
