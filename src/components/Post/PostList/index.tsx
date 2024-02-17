'use client';
import React, { useState } from 'react';
import styles from './postList.module.scss';
import PostItem from '../PostItem';
import posts from '@/mock/data';
import Pagination from '@/components/Pagination';

const PostList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(posts);

  return (
    <>
      <div className={styles.PostListContiner}>
        {currentPagePosts.map((post) => (
          <PostItem key={post.id} postData={post} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
      />
    </>
  );
};

export default PostList;
