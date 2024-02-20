'use client';

import PostList from '@/components/Post/PostList';
import React, { useEffect } from 'react';
const MOCK_DATA = [
  {
    title: '프론트엔드 프로그래밍',
    content:
      '### 설명\n프론트엔드 프로그래밍은 개발자가 웹사이트나 앱을 쉽고 편리하게 사용할 수 있도록 UI를 개발하고, 웹사이트나 앱의 성능을 개선하며, 모든 사용자가 웹사이트나 앱을 사용할 수 있도록 중요한 역할을 담당합니다. 프론트엔드 개발자는 프로그래밍 언어(Html, CSS, JavaScript)를 활용하여 웹사이트의 다양하고 역동적인 화면을 만들어내며, React와 같은 프레임워크를 사용하여 더 효율적인 코딩을 가능하게 해 줍니다.',
    html: '<h3>설명</h3>\n<p>프론트엔드 프로그래밍은 개발자가 웹사이트나 앱을 쉽고 편리하게 사용할 수 있도록 UI를 개발하고, 웹사이트나 앱의 성능을 개선하며, 모든 사용자가 웹사이트나 앱을 사용할 수 있도록 중요한 역할을 담당합니다. 프론트엔드 개발자는 프로그래밍 언어(Html, CSS, JavaScript)를 활용하여 웹사이트의 다양하고 역동적인 화면을 만들어내며, React와 같은 프레임워크를 사용하여 더 효율적인 코딩을 가능하게 해 줍니다.</p>\n',
    id: '1708360449635',
    subTitle: '설명 프론트엔드 프로그래밍은 개발자가 웹사이트나 앱을 ...',
    created_at: '2024-02-19T16:34:09.636Z',
    updated_at: '2024-02-19T17:13:36.610Z',
  },
  {
    title: 'JavaScript',
    content:
      '```javascript\nconsole.log("Hello, world!")\n```\n### 개요\n\n썬 마이크로시스템즈(현재 오라클)에서 개발한 Java와는 별 관계가 없는 언어이다. 이름이 비슷하다고 같은 언어가 아니다. 사람들이 흔히 헷갈리는 부분 중 하나라 Java의 소유자인 오라클에서도 아니라고 강조한다.[2] 실질적인 구동 방식도 Java Virtual Machine을 이용해서 돌리는 Java와, 브라우저 내에 스크립트 엔진(인터프리터)이 존재하는 JavaScript는 완전히 다르다. 햄이랑 햄스터가 다르고 파와 파슬리가 다르며, 인도가 인도네시아와 다르듯[3] 심지어는 웹 서버용 파생 규격도 다르다.\n',
    html: '<pre><code class="language-javascript">console.log(&quot;Hello, world!&quot;)\n</code></pre>\n<h3>개요</h3>\n<p>썬 마이크로시스템즈(현재 오라클)에서 개발한 Java와는 별 관계가 없는 언어이다. 이름이 비슷하다고 같은 언어가 아니다. 사람들이 흔히 헷갈리는 부분 중 하나라 Java의 소유자인 오라클에서도 아니라고 강조한다.[2] 실질적인 구동 방식도 Java Virtual Machine을 이용해서 돌리는 Java와, 브라우저 내에 스크립트 엔진(인터프리터)이 존재하는 JavaScript는 완전히 다르다. 햄이랑 햄스터가 다르고 파와 파슬리가 다르며, 인도가 인도네시아와 다르듯[3] 심지어는 웹 서버용 파생 규격도 다르다.</p>\n',
    id: '1708360619793',
    subTitle: 'javascript console.log("Hello,...',
    created_at: '2024-02-19T16:36:59.793Z',
    updated_at: '2024-02-19T17:12:44.401Z',
  },
  {
    title: 'CSS',
    content:
      '**종속형 시트** 또는 **캐스케이딩 스타일 시트**(영어: Cascading Style Sheet)는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어(영어: Style sheet language 스타일 시트 랭귀지)로, HTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이고, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명[2]은 style.css이다.\n\n마크업 언어(ex: HTML)가 웹사이트의 몸체를 담당한다면 CSS는 옷과 액세서리처럼 꾸미는 역할을 담당한다고 할 수 있다. 즉, HTML 구조는 그대로 두고 CSS 파일만 변경해도 전혀 다른 웹사이트처럼 꾸밀 수 있다.\n\n현재 개발 중인 CSS3의 경우 그림자 효과, 그라데이션, 변형 등 그래픽 편집 프로그램으로 제작한 이미지를 대체할 수 있는 기능이 추가되었다. 또한 다양한 애니메이션 기능이 추가되어 어도비 플래시를 어느 정도 대체하고 있다.',
    html: '<p><strong>종속형 시트</strong> 또는 <strong>캐스케이딩 스타일 시트</strong>(영어: Cascading Style Sheet)는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어(영어: Style sheet language 스타일 시트 랭귀지)로, HTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이고, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명[2]은 style.css이다.</p>\n<p>마크업 언어(ex: HTML)가 웹사이트의 몸체를 담당한다면 CSS는 옷과 액세서리처럼 꾸미는 역할을 담당한다고 할 수 있다. 즉, HTML 구조는 그대로 두고 CSS 파일만 변경해도 전혀 다른 웹사이트처럼 꾸밀 수 있다.</p>\n<p>현재 개발 중인 CSS3의 경우 그림자 효과, 그라데이션, 변형 등 그래픽 편집 프로그램으로 제작한 이미지를 대체할 수 있는 기능이 추가되었다. 또한 다양한 애니메이션 기능이 추가되어 어도비 플래시를 어느 정도 대체하고 있다.</p>\n',
    id: '1708362561021',
    subTitle: '종속형 시트 또는 캐스케이딩 스타일 시트(영어: Cas...',
    created_at: '2024-02-19T17:09:21.021Z',
    updated_at: '2024-02-19T17:09:32.778Z',
  },
];
const HomePage = () => {
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(MOCK_DATA));
  }, []);
  return (
    <>
      <PostList />
    </>
  );
};

export default HomePage;
