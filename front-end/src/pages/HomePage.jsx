import React, { useState, useEffect } from 'react';
import { getAllPosts} from '../api/postApi';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />

        </div>
    );
};

export default Home
