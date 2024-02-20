'use client';
import React, { useEffect, useState } from 'react';
import styles from './postDetails.module.scss';
import Button from '@/components/Button';
import MarkdownViewer from '@/components/MarkdownViewer';
import { GET_POST, selectCurrentPost, selectPosts } from '@/redux/postSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { replaceContentHtmlWordToLink } from '@/utils/text';
import dayjs from 'dayjs';

const PostDetailPage = (props: { params: { title: string } }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  const dispatch = useDispatch();
  const currentPostParam = decodeURIComponent(props.params.title);

  console.log('currentPostParam', currentPostParam);

  const posts = useSelector(selectPosts);
  const currentPost = useSelector(selectCurrentPost);

  useEffect(() => {
    const currentUrl = window.location.origin;
    setCurrentUrl(currentUrl);
  }, []);

  useEffect(() => {
    dispatch(GET_POST({ title: currentPostParam }));
  }, [currentPostParam, dispatch]);

  const newPostContent = replaceContentHtmlWordToLink(
    currentPost.html,
    posts,
    currentUrl,
    currentPostParam
  );

  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button>
          <Link href={`/editor?title=${currentPostParam}`}>수정하기</Link>
        </Button>
      </div>
      <div className={styles.postDetailsContainer}>
        <h1>{currentPost.title}</h1>
        <div className={styles.dateWrapper}>
          <p>최초 작성 시간 : {dayjs(currentPost.created_at).format('YYYY-MM-DD HH:mm:ss')}</p>
          <p>최근 수정 시간 : {dayjs(currentPost.updated_at).format('YYYY-MM-DD HH:mm:ss')}</p>
        </div>
        <MarkdownViewer postData={newPostContent} />
      </div>
    </>
  );
};

export default PostDetailPage;
