import { IPost } from '@/types/post';
import * as cheerio from 'cheerio';

export const truncateText = (inputText: string, maxLength: number = 10) => {
  if (inputText.length <= maxLength) {
    return inputText;
  } else {
    return inputText.slice(0, maxLength) + '...';
  }
};

export const convertMarkdownToPlainText = (markdownText: string) => {
  return markdownText
    .replace(/^#+\s+/gm, '') // 헤더 제거 (줄의 시작이 #으로 시작하는 경우)
    .replace(/^\*|\d+\.\s+/gm, '') // 리스트 항목 제거 (줄의 시작이 *, 1. 등으로 시작하는 경우)
    .replace(/`/g, '') // 백틱 제거
    .replace(/\[.*?\]/g, '') // 인라인 링크 제거
    .replace(/\!\[.*?\]/g, '') // 인라인 이미지 제거
    .replace(/(?:__|[*#])|\*|\[.*?\]/g, '') // 볼드체, 이탤릭체, 기타 서식 제거
    .replace(/\n/g, ' ') // 줄 바꿈을 공백으로 대체
    .trim(); // 문자열 양 끝 공백 제거
};

export const replaceContentHtmlWordToLink = (
  htmlText: string,
  posts: IPost[],
  currentUrl: string,
  excludeText?: string
): string => {
  const $ = cheerio.load(htmlText, { xmlMode: true });

  const filteredPosts = !!excludeText ? posts.filter((post) => post.title !== excludeText) : posts;
  console.log(filteredPosts);

  for (const post of filteredPosts) {
    const urlMarkdown = `<a href="${currentUrl}/post-details/${post.title}">${post.title}</a>`;

    $(`*:contains('${post.title}')`).each((index, element) => {
      const $element = $(element);

      const node = $element.contents().filter(function () {
        return this.nodeType === 3;
      });

      const content = node.text();

      if (content.includes(post.title)) {
        node.replaceWith(content.replace(new RegExp(post.title, 'g'), urlMarkdown));
      }
    });
  }

  return $.html();
};
