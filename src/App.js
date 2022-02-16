// copyright 오석준
// start : 2022-02-15
// update : 2022-02-16

import React, { Fragment } from 'react';
// CSS 초기 셋팅
import './assets/css/reset.css';
// Header CSS & Component
import './assets/css/Component/header.css';
import Header from './assets/components/header';
// High CSS & Component
import './assets/css/Component/high.css';
import High from './assets/components/high';
// NotePad  CSS & Component
import './assets/css/Component/notePad.css';
import NotePad from './assets/components/notePad';
// LoadPage CSS & Component
import './assets/css/Component/loadPage.css';
import LoadPage from './assets/components/loadPage';
// SideBar CSS & Component
import './assets/css/Component/sideBar.css';
import SideBar from './assets/components/sideBar';

function App() {
  return (
    <Fragment>
      {/* Header */}
      <Header
        title="GWNU"
        mainTitle="Mechanical Engineering"
        subTitle="20211562 오석준"
      />
      {/* SideBar */}
      <SideBar
        dropDownName="홈페이지"
        dropDownContents="강릉원주대 메인 페이지"
      />
      {/* High */}
      <High
        highTitle="HIGH"
        highTime="졸업 가능 체인지 시간 : 20시간"
        highFullTime="체인지 200시간 채우면 40만원"
        highNowtime="현재 체인지시간 : 19시간"
      />
      {/* NotePad */}
      <NotePad
        notePadTitle="메모장"
      />
      {/* loadPage */}
      <LoadPage
        loadPageTitle="메뉴를 클릭하면 창이 바뀝니다."
      />
    </Fragment>
  );
}

export default App;