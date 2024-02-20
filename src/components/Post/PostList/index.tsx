'use client';
import React, { useState } from 'react';
import styles from './postList.module.scss';
import PostItem from '../PostItem';
import Pagination from '@/components/Pagination';
import { useSelector } from 'react-redux';
import { selectPosts } from '@/redux/postSlice';
import Loader from '@/components/Loader';

const PostList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const postList = useSelector(selectPosts);

  const currentPagePosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {currentPagePosts.length !== 0 ? (
        <div className={styles.PostListContiner}>
          {currentPagePosts.map((post) => (
            <PostItem key={post.id} postData={post} />
          ))}
        </div>
      ) : (
        <Loader type="component" text="목록을 불러오고 있습니다." />
      )}

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
