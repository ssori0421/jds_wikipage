'use client';
import React, { useEffect, useState } from 'react';
import styles from './postList.module.scss';
import PostItem from '../PostItem';
import Pagination from '@/components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { INIT_POSTS, selectPosts } from '@/redux/postSlice';

const PostList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const postList = useSelector(selectPosts);

  const currentPagePosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className={styles.PostListContiner}>
        {currentPagePosts.length !== 0 &&
          currentPagePosts.map((post) => <PostItem key={post.id} postData={post} />)}
      </div>
      {currentPagePosts.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={postList.length}
          postsPerPage={postsPerPage}
        />
      )}
    </>
  );
};

export default PostList;
