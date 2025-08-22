# To-Do Board(가제)

**To-Do Board: Drag & Drop으로 편리하게 할 일을 관리하세요!**
사이트 주소와 화면 캡쳐해서 넣기
🔗 **배포 주소:** [사이트 이름](사이트 주소)

<br />

## 📌 프로젝트 개요

To-Do Board는 개인의 **할 일 관리**를 돕는 웹 애플리케이션입니다.
**Drag & Drop 인터페이스**를 통해 사용자는 마치 실제 보드처럼 직관적으로 할 일을 **정리, 이동 및 우선순위 변경**을 할 수 있습니다.
본 프로젝트는 **@hello-pangea/dnd 라이브러리 학습 목적**으로 시작되었으나, **새로운 보드 생성, 항목 간 이동, 할 일 수정 및 삭제, 반응형 UI 등 실제 사용자의 편의성과 유지보수를 고려**하여 개발되었습니다.

## 💡 주요 기능

### ✅ Drag & Drop으로 자유로운 이동

- Drag & Drop으로 **카테고리 및 To-Do 항목의 순서 변경**
- **보드 내 또는 보드 간의 이동** 지원
- 직관적인 인터페이스로 목적에 따라 할 일을 분류할 수 있으며, **일의 우선 순위를 기준으로 빠르고 쉽게 재정렬**이 가능

### ✅ 무제한 보드 생성

- 사용자가 **원하는 만큼 새로운 카테고리 보드 생성** 가능
- 각 보드는 독립적인 To-Do 리스트를 가질 수 있음

### ✅ 간편한 수정 & 삭제

- 모달 UI를 통해 **보드 이름 및 To-Do 내용 수정** 가능
- **카테고리 삭제** 시 해당 보드의 모든 To-Do 항목 삭제 가능
- 드래그 앤 드롭을 이용하여 **To-Do 항목을 휴지통으로 이동 시켜 손쉽게 삭제**

### ✅ 새로고침에도 안전한 데이터 저장

- `localStorage` 활용하여 브라우저 **새로고침 후에도 데이터 유지** 가능

## 🔎 역할과 기여도

- 개인 프로젝트로 기획부터 설계, 개발, 스타일링, 배포까지 **전 과정을 담당**
- 강의에서 학습한 내용을 기반으로 **추가 기능을 직접 개발**하여 확장

## 🛠️ 사용한 기술 스택

| 분류                 | 기술                                           |
| -------------------- | ---------------------------------------------- |
| **Frontend**         | Javascript, Typescript, React, React-Hook-Form |
| **Drag & Drop**      | @hello-pangea/dnd                              |
| **Styling**          | Styled-Components, Styled-Reset                |
| **UI Components**    | React-Icons                                    |
| **State Management** | Recoil                                         |
| **Deployment**       | gh-pages                                       |

## 📁 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ Board.tsx
 ┃ ┣ BoardArea.tsx
 ┃ ┣ CardArea.tsx
 ┃ ┣ CreateBoard.tsx
 ┃ ┣ DeleteItem.tsx
 ┃ ┣ DraggableCard.tsx
 ┃ ┣ EditContent.tsx
 ┃ ┗ ToggleMenu.tsx
 ┣ App.tsx
 ┣ atom.tsx
 ┣ index.tsx
 ┣ styled.d.ts
 ┗ theme.ts
```

## 🚀 배포 및 실행 방법

이 프로젝트는 GitHub의 **GitHub Pages**를 활용하여 배포됩니다.  
React 애플리케이션을 정적 파일로 빌드한 후, `gh-pages` 브랜치에 배포하는 방식입니다. 코드를 GitHub에 push하는 것만으로는 배포되지 않으며, **수동으로 `npm run deploy` 명령어를 실행해야 업데이트됩니다.**

### 🖥️ 로컬 실행 방법

**프로젝트 클론**

```bash
$ git clone https://github.com/eileen819/dnd-todo.git
$ cd dnd-todo
$ npm install
$ npm start
```

**배포**

```bash
$ npm run build
$ npm run deploy
```

## 🔄 개선 예정 기능 (업데이트 계획)

_추후 추가 예정_

## 📚 기술적 학습 및 인사이트

### 📍 @hello-pangea/dnd를 활용한 Drag & Drop UI 설계

- `Droppable`과 `Draggable`의 역할과 차이점을 명확히 이해하고, 실제 컴포넌트 구조에 적용하여 **Drag & Drop 기능을 구현**
- `onDragEnd` 이벤트를 기반으로 아이템의 위치를 업데이트하며, **보드 간 또는 보드 내에서 아이템 순서를 변경하는 처리 방식**을 학습

---

### 📍 React-Hook-Form을 이용한 폼 상태 관리

- `useForm()`을 통해 입력 폼 상태 및 유효성 검사를 간결하고 효율적으로 처리
- 컴포넌트를 분리해도 폼의 상태 유지가 쉽기 때문에 **유지보수성 및 확장성이 향상**됨을 경험

---

### 📍 Recoil을 활용한 전역 상태 관리

- **카테고리와 보드 데이터를 개별 atom으로 분리**하여 명확한 상태 구조를 구성
- 여러 개의 atom을 통해 상태를 모듈화하여 **효율적인 상태 관리와 재사용성**을 높이는 방법을 학습

---

### 📍 localStorage를 이용한 데이터 저장 및 영속성 유지

- Recoil의 `atom.effect()`를 이용하여 상태와 localStorage를 연동하는 데이터 저장 방식을 학습
- 브라우저 새로고침 이후에도 데이터가 유지되는 구조를 구현하여, **사용자 경험(UX)을 개선**함
- JSON 기반의 데이터 직렬화/역직렬화 방식을 통해 **브라우저 저장소를 활용한 데이터 저장의 장점과 한계**를 이해

---

### 📍 styled-components를 이용한 반응형 UI 및 테마 관리

- 컴포넌트 단위로 스타일을 작성하여 코드의 **일관성 및 유지보수성을 높임**
- `ThemeProvider`와 `@media` 쿼리를 활용해 **다크모드 지원과 다양한 화면 크기에 대응하는 반응형 디자인**을 구현
