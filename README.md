# 📋 To-Do Board

**To-Do Board: Drag & Drop으로 편리하게 할 일을 관리하세요!**  
사이트 주소와 화면 캡쳐해서 넣기  
🔗 **배포 주소:** [DnD Board](https://eileen819.github.io/dnd-todo)

  <br/>

## 📌 프로젝트 개요

- To-Do Board는 기존 리스트 기반 할 일 관리 방식의 한계를 개선하기 위해 설계된 **Drag & Drop 기반 보드형 업무 관리 웹 애플리케이션**입니다.
- 사용자는 마치 실제 보드처럼 **직관적으로 업무를 이동하고 우선순위를 조정**할 수 있으며, 이를 통해 **관리 효율성과 가시성**을 동시에 확보할 수 있습니다.
- 본 프로젝트는 **@hello-pangea/dnd 라이브러리 학습 목적**으로 시작되었으나, 단순 예제를 넘어 **새로운 보드 생성, 항목 간 이동, 할 일 수정 및 삭제, 반응형 UI 등 실제 사용자 경험(UX)과 유지보수를 고려**하여 확장·구현하였습니다.

  <br/>

## 💡 주요 기능

### ✅ Drag & Drop 기반 직관적 관리

- `@hello-pangea/dnd` 라이브러리를 활용하여 **카테고리 및 To-Do 항목을 자유롭게 이동**시킬 수 있음
- **보드 내/보드 간 이동을 지원**하여 사용자의 업무 우선순위에 따라 직관적으로 재배치할 수 있음

### ✅ 제한 없는 보드 추가

- 사용자가 **필요한 만큼 새로운 보드 생성** 가능
- 각 보드는 **독립적인 To-Do 리스트**를 가질 수 있으며, 프로젝트·개인 업무 등 다양한 목적에 맞게 분류 가능

### ✅ 간편한 수정 & 삭제

- 모달 UI를 통한 **보드 이름 및 To-Do 항목 수정** 지원
- **보드 삭제** 시 해당 보드 내 모든 항목 자동 제거
- 보드 또는 To-Do 항목을 휴지통 영역으로 드래그하여 직관적으로 삭제 가능

### ✅ 데이터 영속성 보장

- `localStorage` 활용하여 새로고침이나 브라우저 종료 후에도 데이터 유지
- 별도의 서버 없이도 안정적인 사용자 경험 제공

### ✅ 반응형 UI 제공

- 모바일·태블릿·데스크톱 등 다양한 환경에서 **일관된 사용성** 제공
- `styled-components`의 `ThemeProvider`를 활용해 **미디어 쿼리 기반 반응형 레이아웃** 적용

  <br/>

## 🔎 역할과 기여도

- 개인 프로젝트로 **기획부터 설계, 개발, 스타일링, 배포까지 전 과정 단독 수행**
- 학습한 내용을 바탕으로 기본 기능을 구현한 뒤, **사용자 경험을 고려해 보드 추가, 항목 수정, 드래그 기반 삭제, 반응형 UI** 등을 직접 기획하여 프로젝트를 확장함
- **React + TypeScript** 기반으로 컴포넌트 구조 및 아키텍처 설계
- **@hello-pangea/dnd** 라이브러리를 활용해 카테고리/항목 이동 기능 구현
- **Recoil**을 적용하여 전역 상태를 효율적으로 관리
- **GitHub Pages**를 통한 정적 배포 환경 구성

  <br/>

## 🛠️ 사용한 기술 스택

| 분류                 | 기술                                         |
| -------------------- | -------------------------------------------- |
| **Frontend**         | React, TypeScript, react-hook-form           |
| **State Management** | Recoil                                       |
| **Drag & Drop**      | @hello-pangea/dnd                            |
| **Styling**          | styled-components, styled-reset, React-Icons |
| **Deployment**       | GitHub Pages                                 |

  <br/>

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

  <br/>

## 🚀 배포 방법

이 프로젝트는 GitHub의 **GitHub Pages**를 활용하여 배포됩니다.  
React 애플리케이션을 정적 파일로 빌드한 후, `gh-pages` 브랜치에 배포하는 방식입니다.  
코드를 GitHub에 push하는 것만으로는 배포되지 않으며, **수동으로 `npm run deploy` 명령어를 실행해야 업데이트됩니다.**

### 🖥️ 로컬 실행 방법

**프로젝트 클론**

```bash
# 프로젝트 클론
git clone https://github.com/eileen819/dnd-todo.git
cd dnd-todo

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

  <br/>

## 🔄 개선 예정 기능 (업데이트 계획)

- **완료 상태 표시**: 체크박스를 통해 할 일의 진행 상태(진행 중/완료)를 관리
- **다크 모드 지원**: `styled-components`의 `ThemeProvider` 확장을 통해 테마 기반 UI 전환 기능 추가 예정

  <br/>

## 📚 기술적 학습 및 인사이트

### 📍 @hello-pangea/dnd를 활용한 Drag & Drop UI 설계

- `Droppable`과 `Draggable` 컴포넌트를 조합하여 **직관적인 Drag & Drop 인터페이스** 구현
- `onDragEnd` 이벤트를 기반으로 아이템의 위치를 업데이트하며, **보드 간/보드 내 재정렬 로직**을 설계
- 실무에서도 활용 가능한 **UI 상호작용 패턴**을 직접 구현해 볼 수 있었음

---

### 📍 React-Hook-Form을 이용한 폼 상태 관리

- `useForm()`을 통해 입력 폼 상태 및 유효성 검사를 간결하고 효율적으로 처리
- 컴포넌트 분리 이후에도 상태의 일관성을 유지할 수 있어 **재사용성과 유지보수성이 향상**되는 것을 확인

---

### 📍 Recoil을 활용한 전역 상태 관리

- **보드와 To-Do 데이터를 atom 단위로 분리**하여 명확한 상태 구조를 구성
- 여러 atom을 모듈화하여 **상태 관리 효율성과 재사용성**을 높임
- 전역 상태 관리에 적합한 패턴을 직접 적용하며 **실무 확장성**을 학습

---

### 📍 localStorage를 이용한 데이터 저장 및 영속성 유지

- Recoil의 `atom.effect()`와 localStorage를 연동해 **상태 저장 및 복원 로직** 구현
- 브라우저 새로고침 이후에도 데이터가 유지되는 구조를 구현하여, **사용자 경험(UX)을 개선**함
- JSON 기반의 데이터 직렬화/역직렬화 방식을 통해 **브라우저 저장소를 활용한 데이터 저장의 장점과 한계**를 이해

---

### 📍 styled-components를 이용한 반응형 UI 및 테마 관리

- 컴포넌트 단위 스타일링으로 **일관된 디자인 시스템** 구축
- `ThemeProvider`와 미디어 쿼리를 활용하여 **다양한 화면 크기에 대응**
- 실제 서비스 수준의 **반응형/테마 관리 패턴**을 적용해 실무 확장성을 확인함
