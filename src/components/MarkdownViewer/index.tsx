import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './markdownBlogViewer.module.scss';
import rehypeRaw from 'rehype-raw';

// 이미지 컴포넌트 분리
function MarkdownImage(image: any) {
  const { src, alt } = image;
  return (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={500}
      height={300}
      className={styles.markdownImage}
    />
  );
}

const MarkdownViewer = ({ postData }: { postData: string }) => {
  return (
    <div className={styles.markdownWrapper}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          img: MarkdownImage,
        }}
      >
        {postData}
      </ReactMarkdown>
    </div>
  );
};
export default MarkdownViewer;
