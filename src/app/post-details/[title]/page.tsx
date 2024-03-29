'use client';
import React, { useEffect, useState } from 'react';
import styles from './postDetails.module.scss';
import Button from '@/components/Button';
import MarkdownViewer from '@/components/MarkdownViewer';
import { GET_POST, selectCurrentPost, selectPosts } from '@/redux/postSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { autoLink } from '@/utils/text';
import { formatTime } from '@/utils/dayjs';
import Loader from '@/components/Loader';

const PostDetailPage = (props: { params: { title: string } }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  const dispatch = useDispatch();

  const currentPostParam = decodeURIComponent(props.params.title);

  const posts = useSelector(selectPosts);
  const currentPost = useSelector(selectCurrentPost);

  useEffect(() => {
    const currentUrl = window.location.origin;
    setCurrentUrl(currentUrl);
  }, []);

  useEffect(() => {
    dispatch(GET_POST({ title: currentPostParam }));
  }, [currentPostParam, dispatch]);

  if (!currentPost) return null;

  const newPostContent = autoLink(currentPost.contentHtml, posts, currentUrl, currentPostParam);

  return (
    <>
      {currentPost.title ? (
        <>
          <div className={styles.buttonWrapper}>
            <Button>
              <Link href={`/editor?title=${currentPostParam}`}>수정하기</Link>
            </Button>
          </div>
          <div className={styles.postDetailsContainer}>
            <h1>{currentPost.title}</h1>
            <div className={styles.dateContainer}>
              <div className={styles.dateWrapper}>
                <p>최초 작성 시간: {formatTime(currentPost.created_at)}</p>
                <p>최근 수정 시간: {formatTime(currentPost.updated_at)}</p>
              </div>
            </div>
            <MarkdownViewer postData={newPostContent} />
          </div>
        </>
      ) : (
        <Loader type="component" text="글을 불러오고 있습니다." />
      )}
    </>
  );
};

export default PostDetailPage;
