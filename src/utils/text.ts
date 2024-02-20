import { IPost } from '@/types/post';
import * as cheerio from 'cheerio';

// subTitle 말줄임 함수
export const truncateText = (inputText: string, maxLength: number = 10) => {
  if (inputText.length <= maxLength) {
    return inputText;
  } else {
    return inputText.slice(0, maxLength) + '...';
  }
};

// subTitle을 md=>html로 변환하는 함수
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

// 자동 링크 생성을 위한 함수
export const autoLink = (
  contentHtml: string,
  posts: IPost[],
  currentUrl: string,
  excludeText?: string
): string => {
  if (contentHtml.length === 0) {
    return '';
  }
  // contentHtml이 문자열이 아니거나 빈 문자열이면 빈 문자열을 반환
  if (typeof contentHtml !== 'string' || contentHtml.trim() === '') {
    return '';
  }

  // cheerio를 사용하여 HTML을 로드
  const $ = cheerio.load(contentHtml, { xmlMode: true });

  // 제외할 텍스트가 지정되어 있다면 해당 텍스트를 제외한 포스트 배열을 생성
  const filteredPosts = !!excludeText ? posts.filter((post) => post.title !== excludeText) : posts;

  // 각 포스트에 대해 반복
  for (const post of filteredPosts) {
    // 링크 형식의 문자열을 생성
    const urlMarkdown = `<a href="${currentUrl}/post-details/${post.title}">${post.title}</a>`;

    // HTML 내에서 모든 엘리먼트에 대해 반복
    $(`*:contains('${post.title}')`).each((index, element) => {
      const $element = $(element);

      // 텍스트 노드를 필터링
      const node = $element.contents().filter(function () {
        return this.nodeType === 3;
      });

      // 노드의 텍스트를 가져옴
      const content = node.text();

      // 포스트 제목이 포함되어 있다면 해당 부분을 링크로 교체
      if (content.includes(post.title)) {
        node.replaceWith(content.replace(new RegExp(post.title, 'g'), urlMarkdown));
      }
    });
  }

  // 변환된 HTML 문자열을 반환
  return $.html();
};
