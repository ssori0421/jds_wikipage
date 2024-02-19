'use client';
import React, { useEffect } from 'react';
import styles from './postDetails.module.scss';
import Button from '@/components/Button';
import MarkdownViewer from '@/components/MarkdownViewer';
import { GET_POST, selectCurrentPost } from '@/redux/postSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const PostDetailPage = ({ params }: { params: { title: string } }) => {
  const dispatch = useDispatch();
  const currentPostParam = decodeURIComponent(params.title);

  const data = useSelector(selectCurrentPost);

  useEffect(() => {
    dispatch(GET_POST({ title: currentPostParam }));
  }, [currentPostParam, dispatch]);

  if (!data) return null;

  console.log({ data });

  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button>
          <Link href={`/editor?title=${currentPostParam}`}>수정하기</Link>
        </Button>
      </div>
      <div className={styles.postDetailsContainer}>
        <h1>{data.title}</h1>

        <MarkdownViewer postData={data?.content} />
      </div>
    </>
  );
};

export default PostDetailPage;
