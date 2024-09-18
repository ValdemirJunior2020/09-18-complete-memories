import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

// Get all posts
export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        return res.status(200).json(postMessages);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

// Get a single post by ID
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

// Create a new post
export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    // Basic validation
    if (!title || !message || !creator) {
        return res.status(400).json({ message: "Title, message, and creator are required." });
    }

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags });

    try {
        await newPostMessage.save();
        return res.status(201).json(newPostMessage);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}

// Update an existing post by ID
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    try {
        const result = await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Delete a post by ID
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    try {
        await PostMessage.findByIdAndRemove(id);
        return res.json({ message: "Post deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Like a post by ID
export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    try {
        const post = await PostMessage.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
        return res.json(updatedPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default router;
