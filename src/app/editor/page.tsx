'use client';
import React, { useEffect, useState } from 'react';
import styles from './editor.module.scss';
import { useDispatch } from 'react-redux';
import { CREATE_POST, GET_POST, UPDATE_POST, selectCurrentPost } from '@/redux/postSlice';
import { useSelector } from 'react-redux';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const mdParser = new MarkdownIt();

const EditorPage = (props: { searchParams: { title?: string } }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState<{ md: string; html: string }>({
    md: '',
    html: '',
  });

  const router = useRouter();

  const currentPostParam = props.searchParams.title;

  const dispatch = useDispatch();
  const data = useSelector(selectCurrentPost);

  const onChangePostTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentPostParam) {
      const updatePayload = {
        param: currentPostParam,
        title: postTitle,
        contentMd: postContent.md,
        contentHtml: postContent.html,
      };
      dispatch(UPDATE_POST(updatePayload));
      setPostTitle('');
      setPostContent({ md: '', html: '' });
      router.push(`/post-details/${postTitle}`);
    } else {
      if (postTitle.trim() === '') {
        alert('제목을 작성해주세요.');
        return;
      }

      if (postContent.md.trim() === '') {
        alert('내용을 작성해주세요.');
        return;
      }

      const createPayload = {
        title: postTitle,
        contentMd: postContent.md,
        contentHtml: postContent.html,
      };
      dispatch(CREATE_POST(createPayload));
      setPostTitle('');
      setPostContent({ md: '', html: '' });
      router.push(`/post-details/${postTitle}`);
    }
  };

  useEffect(() => {
    if (currentPostParam) {
      dispatch(GET_POST({ title: currentPostParam }));
    }
  }, [dispatch, currentPostParam]);

  useEffect(() => {
    if (data && currentPostParam) {
      setPostTitle(data.title);
      setPostContent({ md: data.contentMd, html: data.contentHtml });
    }
  }, [data, currentPostParam]);

  return (
    <div className={styles.editorContainer}>
      <form onSubmit={onSubmitPost}>
        <div className={styles.PostTitleContainer}>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="제목을 작성해주세요."
            value={postTitle}
            onChange={onChangePostTitle}
          />
        </div>

        <MdEditor
          value={postContent.md}
          style={{ height: '500px' }}
          onChange={(e) => {
            setPostContent({ md: e.text, html: e.html });
          }}
          renderHTML={(md) => mdParser.render(md)}
        />
        <div className={styles.buttonWrapper}>
          <Button>저장하기</Button>
        </div>
      </form>
    </div>
  );
};

export default EditorPage;
