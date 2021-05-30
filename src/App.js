import {useLayoutEffect, useState, useCallback} from 'react';
import axios from 'axios';
import './App.css';
import santaImg from './images/me.png';
import socar from './images/Responsive_Web.png';
import dockdo from './images/mobile_425px.png';
import wekeep from "./images/html5_1_full.png";
import monami from "./images/html5_2_full.png";
import prvbtn from "./images/prev.png";
import nxtbtn from "./images/next.png";



function App() {
  // 날씨
  let icon;
  let temp ;
  let city;
  const [whether, setwether] = useState({'Icon':'', 'Temp':'', 'City':''});
  
  const setWhether = useCallback((icon, temp, city) => {
    setwether({'Icon':icon, 'Temp':temp, 'City':city});
  })


  //GNB
  const setNav = ['Main', 'About Me', 'Portpolios', 'Contect Me'];

  const setGnb = setNav.map((el, idx) => {
    return ( <li key = {idx}><a href= "#" onClick = {() => test(idx)}>{el}</a></li>)
  })

  // scroll animation
  const test = (idx) => {
    const sectionOffset = document.querySelectorAll('.wrap section')[idx].offsetTop;
    let saveOffset = sectionOffset;
    // console.log('sectionOffset', sectionOffset)
    // if(idx === 0) {
    //   window.scrollTo(saveOffset, sectionOffset);
    // } else if(idx === 1) {
    //   window.scrollTo(saveOffset, sectionOffset);
    // } else if(idx === 2) {
    //   window.scrollTo(saveOffset, sectionOffset);
    // } else if(idx === 3) {
    //   window.scrollTo(saveOffset, sectionOffset);
    // }
  }

  let windowScrollY = window.scrollY;
  const headerGnb = document.querySelector('header').clientHeight;
  console.log(headerGnb)
  
  const changeColorToGnb = (idx) => {
    // $('.header_wrap a.now').removeClass('now')
    // $('.m_header_wrap .center a.now').removeClass('now')

    // $('.header_wrap a').eq(idx).addClass('now')
    // $('.m_header_wrap .center a').eq(idx).addClass('now')
  }


  

  useLayoutEffect( () => {
    // 날씨
    axios({
      url:'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=87daf96918fe95de1b0a4ca2cdc418fb&units=metric',
      method:'get',
      responseType:'json'
    }).then(respones => {
      
      temp = Math.floor(respones.data.main.temp) + '°C';;
      city = respones.data.name;
      icon = 'http://openweathermap.org/img/wn/'+respones.data.weather[0].icon+'@2x.png';
      setWhether(icon, temp, city);
    })

    //mainTextanmt
    let i = 1;
    function moving() {
      const text1 = document.querySelectorAll('.main_text li')[i];
      const text2 = document.querySelectorAll('.main_text li')[0];
      const text3 = document.querySelectorAll('.main_text li')[1];
      const text4 = document.querySelectorAll('.main_text li')[2];

      text2.classList.remove('on')
      text3.classList.remove('on')
      text4.classList.remove('on')
      
      i++;
      if (i > 2) {
        i = 0;
      }
      text1.classList.add('on');

    }
    setInterval(moving, 2500);
  }, [])

  return (
    <div className="App">
        <div className="wrap">
    <header className="header">
      <div className="dim"></div>
      <nav className="header_wrap">
        <ul>
          {setGnb}
        </ul>
      </nav>
      <a href="#" className="m_header">
        <span className="mv1"></span>
        <span className="mv2"></span>
        <span className="mv3"></span>
      </a>
      <nav className="m_header_wrap">
        <div className="center">
          <a href="#" className="now">Main</a>
          <a href="#">About Me</a>
          <a href="#">Portpolios</a>
          <a href="#">Contect Me</a>
        </div>
      </nav>
      <span className="name">이효성</span>

    </header>
    <section className="page1 page">
      <div className="trans_text">
        <div className="weather">
          <div className="Icon"><img src = {whether.Icon}/></div>
          <div className="Temp">{whether.Temp}</div>
          <div className="city">{whether.City}</div>
        </div>
        <p>
          항상
        </p>
        <ul className="main_text">
          <li className="main_text_li_1 on">
            <span className="mv1">역</span>
            <span className="mv2">량</span>
            <span className="mv3">이</span>
          </li>
          <li className="main_text_li_2 ">
            <span className="mv1">감</span>
            <span className="mv2">각</span>
            <span className="mv3">이</span>
          </li>
          <li className="main_text_li_3 ">
            <span className="mv1">노</span>
            <span className="mv2">력</span>
            <span className="mv3">이</span>
          </li>
        </ul>
        <span className="text_2">발전하는 인재,<br />이효성의 포트폴리오 입니다.</span>
      </div>
    </section>


    <section className="page2 page">
      <div className="center">
        <h3>ABOUT ME</h3>
        <p>역량에 있어서 항상 더 나은 더 높은 나를 계발합니다.</p>
        <div className="abuot">
          <div className="info_img">
            <div className="info_me">
              <img src={santaImg} title="지원자 사진" />
              <div className="info">
                <p>이효성 Lee Hyosung</p>
                <p>Publisher &amp; Frontend</p>
              </div>
            </div>
          </div>
          <div className="info_text">
            <dl>
              <dt>E-mail</dt>
              <dd>hs__lee@naver.com</dd>
              <dt>Github</dt>
              <dd>
                <a href="https://github.com/bearscome" target="_blank">바로가기</a>
              </dd>
              <dt>Education</dt>
              <dd>스마트웹디자인(UI/UX)콘텐츠개발(19.02 ~ 19.08)</dd>
              <dt>Skills/Tools</dt>
              <dd>Html, Css, SCSS, Javascript(Jquery)</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>


    <section className="page3 page">
      <div className="page3_site_1 page_site active">
        <div className="info_text">
          <div className="info">
            <p className="listNum"># 01</p>
            <h3>SOCAR</h3>
            <p className="html">RESPONSIVE WEBSITE</p>
            <dl>
              <dd>반응형 웹</dd>
              <dd>카운팅 이벤트, 반응형 메뉴, 스크롤 이벤트</dd>
              <dd>퍼블리싱 100%</dd>
            </dl>
            <a href="socar/index.html" target="_blank" className="view_site">VIEW SITE</a>
            <p className="add">*포트폴리오는 기존에 있는 사이트를 카피하여 구현하는 방식으로 제작하였습니다.</p>
          </div>
        </div>
        <div className="info_img">
          <img src={socar} title="쏘카 이미지" />
        </div>
      </div>

      <div className="page3_site_2 page_site ">
        <div className="info_text">
          <div className="info">
            <p className="listNum"># 02</p>
            <h3>Dokdo Foundation</h3>
            <p className="html">Mobile</p>
            <dl>
              <dd>모바일 전용 웹</dd>
              <dd>slider.js 커스텀, 모바일터치</dd>
              <dd>퍼블리싱 100%</dd>
            </dl>
            <a href="mobile/dokdo.html" target="_blank" className="view_site">VIEW SITE</a>
            <p className="add">*포트폴리오는 기존에 있는 사이트를 카피하여 구현하는 방식으로 제작하였습니다.</p>
          </div>
        </div>
        <div className="info_img">
          <img src={dockdo} title="독도재단 이미지" />
        </div>
      </div>

      <div className="page3_site_3 page_site ">
        <div className="info_text">
          <div className="info">
            <p className="listNum"># 03</p>
            <h3>Wekeep</h3>
            <p className="html">HTML5_PC</p>
            <dl>
              <dd>HTML5 코딩</dd>
              <dd>원페이지 메인, 메뉴 애니메이션</dd>
              <dd>퍼블리싱 100%</dd>
            </dl>
            <a href="Wekeep/wekeep.html" target="_blank" className="view_site">VIEW SITE</a>
            <p className="add">*포트폴리오는 기존에 있는 사이트를 카피하여 구현하는 방식으로 제작하였습니다.</p>
          </div>
        </div>
        <div className="info_img">
          <img src={wekeep} title="Wekeep 이미지" />
        </div>
      </div>

      <div className="page3_site_4 page_site ">
        <div className="info_text">
          <div className="info">
            <p className="listNum"># 04</p>
            <h3>Monami</h3>
            <p className="html">HTML5_PC</p>
            <dl>
              <dd>HTML5 코딩</dd>
              <dd>메뉴 슬라이드, 탭창 이미지화</dd>
              <dd>퍼블리싱 100%</dd>
            </dl>
            <a href="Monami/monami.html" target="_blank" className="view_site">VIEW SITE</a>
            <p className="add">*포트폴리오는 기존에 있는 사이트를 카피하여 구현하는 방식으로 제작하였습니다.</p>
          </div>
        </div>
        <div className="info_img">
          <img src={monami} title="Monami 이미지" />
        </div>
      </div>

      <article className="arrow">
        <div className="left">
        </div>
        <div className="right">
          <div className="center clearfix">
            <a href="#" className="prev"><img src={prvbtn} alt="이전" /></a>
            <a href="#" className="next"><img src={nxtbtn} alt="다음" /></a>
          </div>
        </div>
      </article>
      <article className="m_arrow">
        <div className="m_center">
          <a href="#" className="prev"><img src={prvbtn} alt="이전" /></a>
          <a href="#" className="next"><img src={nxtbtn} alt="다음" /></a>
        </div>
      </article>
    </section>



    <section className="page4 page">
      <div className="center">
        <h3 className="title">CONTECT ME</h3>
        <p className="message">저의 포트폴리오를 끝까지 봐주셔서 감사합니다.</p>
        <p className="message">메일을 보내주시면 확인 후 빠른 회신 드리겠습니다.</p>
        <form className="form" id="contact-form">
          <p className="input_cover">
            <input type="hidden" name="contact_number"/>
            <input type="text" title="귀하성함 또는 귀사명" placeholder="성함 또는 회사명" className="input" name="from_name" />
            <label htmlFor="contact_number" className="label">귀하의 성함 또는 귀사명</label>
          </p>
          <p className="input_cover">
            <input type="email" title="email" id="email" placeholder="E-mail" className="input" name="to_name" />
            <label htmlFor="email" className="label">E-mail</label>
          </p>
          <p className="input_cover">
            <textarea type="textarea" title="message" id="message" placeholder="내용" className="input message"
              name="message"></textarea>
            <label htmlFor=" message" className="label">메세지 내용</label>
          </p>
          <input type="submit" value="전송하기" className="submit"/>
        </form>
      </div>
    </section>
    </div>
    </div>
  );
}

export default App;
