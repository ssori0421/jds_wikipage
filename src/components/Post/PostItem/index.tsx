import React from 'react';
import styles from './postItem.module.scss';
import { IPost } from '@/types/post';
import Link from 'next/link';

const PostItem = ({ postData }: { postData: IPost }) => {
  const { title, content } = postData;

  return (
    <Link className={styles.postItemContainer} href={`/post-details/${title}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </Link>
  );
};

export default PostItem;
