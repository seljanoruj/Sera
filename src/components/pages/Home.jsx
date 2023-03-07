import React from 'react'
import { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import "../../i18"
import Second from "./Second"
import logo from "../../assets/img/logo.svg"
import phone from "../../assets/img/phone.png"

const Home = () => {

    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    const [theme,setTheme] = useState("light");

    const ChangeMode = () =>{
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    useEffect(()=>{
        document.body.className = theme;
    },[theme])

  return (
      <>
      <section className='first-section'>
          <nav>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                          <div className="left">
                              <img src={logo} />
                          </div>
                      </div>
                      <div className="col-lg-10 col-md-6 col-sm-6 col-12">
                          <div className="right">
                              <ul>
                                  <li className='active'> {t("nav.0")} </li>
                                  <li> {t("nav.1")} </li>
                                  <li> {t("nav.2")} </li>
                                  <li> {t("nav.3")} </li>
                                  <li> {t("nav.4")} </li>
                                  <li> {t("nav.5")} </li>
                                  <li> {t("nav.6")} </li>
                                  <li> {t("nav.7")} </li>
                                  <button className='btn btn-light' onClick={ChangeMode}><i class="fa-solid fa-dog"></i></button>
                                  <button className='btn btn-light' onClick={() => handleClick("az")}>AZ</button>
                                  <button className='btn btn-light' onClick={() => handleClick("en")}>EN</button>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
          <div className='main'>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12 pt-5">
                          <div className="text">
                              <h1> {t("main.0")} </h1>
                              <div className="line"></div>
                              <h2> {t("main.1")} </h2>
                              <div className="buttons">
                                  <button className='btn1'> {t("btxt.0")} </button>
                                  <button className='btn2'> {t("btxt.1")} </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="small">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="box">
                              <h1> <strong>S</strong><span>era</span> is your last template theme ever!</h1>
                              <button> {t("btxt.2")} </button>
                          </div>
                      </div>
                  </div>
              </div>
     </section>
     <section className='third-section'>
         <div className="container">
             <div className="row">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="text">
                         <h1> {t("head.0")} </h1>
                         <div className="line"><div className="ln"></div></div>
                         <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at tincidunt sem. Interdum et malesuada <br /> fames ac ante ipsum primis in faucibus. Morbi id ornare ante. Cras odio nibh, volutpat vitae volutpat sed,<br /> suscipit et nisi. Nulla a tellus at turpis gravida congue non sed nisl.</h2>
                     </div>
                 </div>
             </div>
         </div>
     </section>
      <section className='fourth-section'>
          <div className="container">
              <div className="row ">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text">
                          <h1>Core Features</h1>
                          <div className="line"><div className="ln"></div></div>
                          <h2>Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet diam ut eleifend. Mauris consequat interdum <br /> quam. Mauris dui sapien, efficitur et cursus id, molestie fringilla turpis aliquet diam ut eleifend.</h2>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                      <div className="box1">
                          <div className="text1">
                              <div className="left">
                                  <h1>Creative</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                              <div className="right">
                                  <i class="fa-solid fa-lightbulb"></i>
                              </div>
                          </div>
                          <div className="text1">
                              <div className="left">
                                  <h1>Minimalism</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                              <div className="right">
                                  <i class="fa-solid fa-droplet"></i>
                              </div>
                          </div>
                          <div className="text1">
                              <div className="left">
                                  <h1>Clean Coding</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                              <div className="right">
                                  <i class="fa-solid fa-mug-hot"></i>
                              </div>
                          </div>
                          <div className="text1">
                              <div className="left">
                                  <h1>Friendly</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                              <div className="right">
                                  <i class="fa-solid fa-face-smile"></i>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                      <div className="box2">
                          <img src={phone}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                      <div className="box1">
                          <div className="text1">
                              <div className="right">
                                  <i class="fa-solid fa-wine-glass"></i>
                              </div>
                              <div className="left">
                                  <h1>Branding</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                          </div>
                          <div className="text1">
                              <div className="right">
                                  <i class="fa-solid fa-tv"></i>
                              </div>
                              <div className="left">
                                  <h1>Web Design</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                          </div>
                          <div className="text1">
                              <div className="right">
                                  <i class="fa-solid fa-crop"></i>
                              </div>
                              <div className="left">
                                  <h1>Graphic Design</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                          </div>
                          <div className="text1">
                              <div className="right">
                                  <i class="fa-solid fa-camera"></i>
                              </div>
                              <div className="left">
                                  <h1>Photography</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing diam.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
      </section>
      <Second/>
      </>
  )
}

export default Home

