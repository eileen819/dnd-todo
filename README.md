# To-Do Board(가제)

사이트 주소와 화면 캡쳐해서 넣기
🔗 **배포 주소:** [사이트 이름](사이트 주소)

<br />

## 📌 프로젝트 개요

- **To-Do Board**는 사용자의 할 일을 카테고리별로 정리하고, **드래그 앤 드롭 기능을 통해 직관적으로 할 일을 관리할 수 있는 웹 어플리케이션**입니다.
- @hello-pangea/dnd 라이브러리 학습을 목적으로 개발되었으며, **새로운 보드 생성, 항목 간 이동, 할 일의 수정 및 삭제** 등 실제 사용성과 유지보수를 고려하여 구현했습니다.

## 💡 주요 기능

### ✅ 카테고리 보드와 할 일의 순서 변경

- Drag & Drop으로 **카테고리 보드의 순서 변경** 및 **To-Do 항목의 단일 보드 또는 서로 다른 보드 간의 이동**이 가능
- 사용 목적에 따라 To-Do 항목의 **우선 순위 조정이 직관적으로 가능**

### ✅ 목적에 따른 카테고리 보드 생성 가능

- 사용자가 원하는 만큼 새로운 카테고리 보드 생성이 가능
- 각 보드는 독립적인 To-Do 리스트를 가질 수 있음

### ✅ 할 일의 수정 및 삭제

- 모달 UI를 이용한 보드 이름 및 To-Do 내용의 수정 기능
- 카테고리 삭제 시 해당 보드의 모든 To-Do 항목 삭제 가능
- To-Do 항목을 쓰레기통으로 드래그 앤 드롭하여 손쉽게 삭제가 가능

### ✅ 로컬스토리지 저장

- `localStorage` 활용하여 새로고침 시에도 데이터가 유지되도록 함

## 🔎 역할과 기여도

- 개인 프로젝트
- 기획, 설계, 개발, 스타일링 및 배포까지 **전 과정을 담당**
- 강의를 통해 배운 것들을 바탕으로 기본 기능을 구현한 후, **추가적인 기능을 직접 개발**하여 확장

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

## 🚀 배포 방법

이 프로젝트는 GitHub의 **GitHub Pages**를 활용하여 배포됩니다.  
React 애플리케이션을 정적 파일로 빌드한 후, `gh-pages` 브랜치에 배포하는 방식입니다. 코드를 GitHub에 push하는 것만으로는 배포되지 않으며, **수동으로 `npm run deploy` 명령어를 실행해야 업데이트됩니다.**

### 🖥️ 로컬 실행 방법

**프로젝트 클론**

```bash
$ 코드 내용 추가 필요
```

## 🔄 개선 예정 기능 (업데이트 계획)

_추후 추가 예정_

## 📚 기술적 학습 및 인사이트

### 📍@hello-pangea/dnd를 활용한 UI/UX 설계

### 📍React-Hook-Form을 이용한 폼 구현

### 📍 Recoil을 이용한 state 관리

### 📍localStorage를 이용한 데이터 저장 및 유지

### 📍styled-components를 이용한 반응형 UI 구현

[📚 기술적 학습 및 인사이트 예시]

- **@hello-pangea/dnd**: 드래그 앤 드롭 UX의 구성 원리와 React에서의 적용 방식 이해
- **Recoil**: 보드 상태와 다크모드 상태를 전역으로 관리하며 상태 분리의 중요성 체득
- **React-Hook-Form**: 폼 입력값 검증 및 모듈화된 폼 처리 구조를 간결하게 구현
- **localStorage**: 간단한 상태 저장을 위한 브라우저 API의 활용법과 UX 측면의 장점 이해
- **반응형 UI 구현**: styled-components의 `@media`를 활용하여 디바이스별 UI 구성 경험
