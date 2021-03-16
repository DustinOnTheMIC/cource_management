import React, { Component } from 'react';
import Pagination from '../../Components/Blogs/Pagination';
import BlogItem from '../../Components/Blogs/BlogItem';

class BlogBody extends Component {
    render() {
        return (
            <section className="ftco-section">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                    <Pagination />
                </div>
            </section>
        );
    }
}

export default (BlogBody);