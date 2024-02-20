# 🔖 jds-wikipage

## 1. 디렉토리 구조 📂

```
jds-wikipage
├─ src
│  ├─ app
│  │  ├─ (home)
│  │  ├─ editor
│  │  ├─ post-details
│  │  ├─ layout.module.scss
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ Button
│  │  ├─ Header
│  │  ├─ Loader
│  │  ├─ MarkdownViewer
│  │  ├─ Pagination
│  │  └─ Post
│  │     ├─ PostItem
│  │     └─ PostList
│  ├─ mock
│  │  └─ mock.ts
│  ├─ redux
│  │  ├─ Providers
│  │  ├─ postSlice.ts
│  │  └─ store.ts
│  ├─ styles
│  │  ├─ _global.scss
│  │  ├─ _reset.scss
│  │  ├─ _variables.scss
│  │  └─ mixins
│  │     └─ _text.scss
│  ├─ types
│  └─ utils



```

## 2. 구현 사항 👩🏻‍💻

✅ **UI/UX**

- `Loader 컴포넌트`를 추가적으로 구현하여 `UI/UX`를 향상시켰습니다.

✅ **모듈화된 디자인 단위의 기능 개발**

- `컴포넌트 단위`로 나누어 개발함으로써 `유지 보수성`을 고려했습니다.

  - Button 컴포넌트, Header 컴포넌트, PostList 컴포넌트, PostItem 컴포넌트, MarkdownViewer 컴포넌트, Pagination 컴포넌트, Loader 컴포넌트

- 다양한 사용 상황에 대응하는 `유연`하고 `확장 가능한 컴포넌트`를 설계했습니다.

  - Button 컴포넌트, Loader 컴포넌트

    - `icon, text, children` 등을 `프로퍼티`로 받아 프로젝트 전체에서 `재사용` 되도록 구현했습니다.

    - `classnames` 라이브러리를 사용해 css의 확장이 가능하도록 구현했습니다.

✅ **redux toolkit 라이브러리 사용해 전역 상태 관리**

- `post 관련 데이터`는 `전역적`으로 관리되어야 할 값으로 판단하여 redux에서 작성 및 적용했습니다.

✅ **home / editor / post-details 페이지 개발**

✔️ home 페이지

- post 아이템에는 title, subTitle이 보여지고, subTitle의 경우 노출되는 단어의 수를 30개로 제한했습니다.
- `Pagination`을 구현하여 한 페이지 당 5개의 게시글이 노출되도록 구현했습니다.
- next/link의 `<Link> 태그`를 사용해서 개별 게시글로 `동적 라우팅`되도록 구현했습니다.

✔️ editor 페이지

- `redux`에서 작성한 post 관련 데이터를 사용했습니다.
- `markdown-it` 라이브러리를 사용해 `Markdown 형식의 텍스트를 파싱`하고 `HTML로 변환`했습니다.
- `react-markdown-editor-lite` 라이브러리를 사용해 사용자가 Markdown 텍스트를 입력하면 이를 실시간으로 미리보기할 수 있는 에디터를 구현했습니다.

✔️ post-details 페이지

- `react-markdown` 라이브러리를 사용해 `Markdown 형식의 텍스트`를 `React 구성 요소로 변환`하여 렌더링했습니다.
- `rehype` 라이브러리의 rehypeRaw 플러그인을 사용해 Markdown 내에서 `직접 HTML를 삽입`할 수 있도록 했습니다.
- Markdown 내에서 삽입된 이미지의 경우 Next.js의 `<Image> 태그로 교체`해 `이미지 최적화`가 되도록 구현했습니다.

✅ **SCSS를 사용한 스타일링 작업**

- `중첩(Nesting)구문을 활용`하여 코드의 `가독성`을 높였습니다.

- `variable`을 사용해 스타일의 `일관성`과 `유지 보수성`을 향상시켰습니다.

- `mixin`을 사용해 `텍스트 스타일`을 정의해 `재사용성`을 높였습니다.

## 3. STACKS 📚

<div align=center> 
 <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=black">
<img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
 </br>
  <img src="https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=NEXT.JS&logoColor=black">
  <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=TYPESCRIPT&logoColor=black">
     <img src="https://img.shields.io/badge/REDUX TOOLKIT-764ABC?style=for-the-badge&logo=ZUSTAND&logoColor=black">
    <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SCSS&logoColor=black">
     </br>
    <img src="https://img.shields.io/badge/REACT MARKDOWN-83B81A?style=for-the-badge&logo=ZUSTAND&logoColor=black">
  <img src="https://img.shields.io/badge/MARKDOWN IT-FF0000?style=for-the-badge&logo=ZUSTAND&logoColor=black">
  </br>
        <img src="https://img.shields.io/badge/REACT MARKDOWN EDITOR LITE-008FC7?style=for-the-badge&logo=ZUSTAND&logoColor=black">
          <img src="https://img.shields.io/badge/REHTPE-34567C?style=for-the-badge&logo=ZUSTAND&logoColor=black">

</div>

## 4. Git Convention 🖍️

| 태그     | 설명                                                                        |
| -------- | --------------------------------------------------------------------------- |
| feat     | 새로운 기능을 추가할 경우                                                   |
| chore    | 패키지 매니저 설정 등 여러가지 기능과 무관한 부분 들을 수정, 추가 하는 경우 |
| error    | 버그를 고친경우                                                             |
| HOTFIX   | 치명적인 버그 수정, 운영중 빠른 수정이 필요한 경우                          |
| design   | CSS 등 사용자 UI 디자인 변경                                                |
| style    | 코드 포맷 변경, 세미콜론 누락 등 기능상의 코드 수정이 없는 경우             |
| comment  | 주석 추가 및 변경                                                           |
| docs     | 문서를 수정한 경우                                                          |
| refactor | 프로덕션 코드 리팩토링                                                      |
| rename   | 파일명을 수정하거나 옮기는 작업                                             |
| remove   | 파일을 삭제하는 작업                                                        |
| test     | Test코드 추가                                                               |

## 5. 프로젝트 실행 방법 🖥️

```bash
# 레포지토리 클론
git clone https://github.com/ssori0421/jds_wikipage

# 패키지 설치
yarn

# 실행
yarn build 후에 yarn start
```
