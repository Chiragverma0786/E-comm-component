import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Dash from './components/dash icons/dash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFileLines, faBagShopping, faUserGraduate, faCar, faEnvelope, faComment, faCalendar, faUser, faLock, faRobot, faTruck, faGaugeSimple, faClock, faX, faCircleDollarToSlot, faEllipsisVertical, faCreditCard, faChartPie, faChevronUp, faChevronDown, faCartShopping, faCheck
  } from '@fortawesome/free-solid-svg-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import dummy from '/src/assets/dummy1.png'
import chart from '/src/assets/chart.png'
import Data from './components/data/data'
import Trs from './components/transaction/trs'
import { faAmazonPay, faGooglePay, faPaypal } from '@fortawesome/free-brands-svg-icons'
import Pillar from './components/pillars/pillar'
import Id from './components/Id/Id'

const App = () => {
  const [normal, setNormal] = useState("-70%")

  const toggleDiv = ()=>{
    if(normal === "-70%"){
      setNormal("0%")
    }
  }
  const closetab = ()=>{
    if(normal === "0%"){
      setNormal("-70%")
    }
  }
  
  return (
    <>
    <div className="mobile-nav" style={{
      left: normal,
    }}> 
    <div className="ui">
            <div className="logo">
                <h1>Ui</h1>
                <div className="close" onClick={closetab}>
                <FontAwesomeIcon icon={faX} />
                </div>
            </div>

            <div className="dash1">
                <div className="upper-dash">
                <Dash faltu="Dashboard" icon={faHouse}
                styling="rgba(128, 128, 128, 0.34)"/>
                <Dash faltu="E-Commerce" icon={faFileLines}/>
                </div>

                <div className="title">
                  <p>Apps & Pages</p>
                </div>

                <div className="lower-dash">
                <Dash faltu="Pages" icon={faBagShopping}/>
                <Dash faltu="Education" icon={faUserGraduate}/>
                <Dash faltu="Car" icon={faCar}/>
                <Dash faltu="E-Mail" icon={faEnvelope}/>
                <Dash faltu="Chat" icon={faComment}/>
                <Dash faltu="Calender" icon={faCalendar}/>
                <Dash faltu="User" icon={faUser}/>
                <Dash faltu="Security" icon={faLock}/>
                <Dash faltu="AI" icon={faRobot}/>
                <Dash faltu="Delivery" icon={faTruck}/>
                <Dash faltu="Security" icon={faGaugeSimple}/>
                <Dash faltu="Timming" icon={faClock}/>
               
                
                </div>
            </div>
        </div>
    </div>
     <div className="window1">
        <div className="ui">
            <div className="logo">
                <h1>Ui</h1>
            </div>

            <div className="dash">
                <div className="upper-dash">
                <Dash faltu="Dashboard" icon={faHouse}
                styling="rgba(128, 128, 128, 0.34)"/>
                <Dash faltu="E-Commerce" icon={faFileLines}/>
                </div>

                <div className="title">
                  <p>Apps & Pages</p>
                </div>

                <div className="lower-dash">
                <Dash faltu="Pages" icon={faBagShopping}/>
                <Dash faltu="Education" icon={faUserGraduate}/>
                <Dash faltu="Car" icon={faCar}/>
                <Dash faltu="E-Mail" icon={faEnvelope}/>
                <Dash faltu="Chat" icon={faComment}/>
                <Dash faltu="Calender" icon={faCalendar}/>
                <Dash faltu="User" icon={faUser}/>
                <Dash faltu="Security" icon={faLock}/>
                <Dash faltu="AI" icon={faRobot}/>
                <Dash faltu="Delivery" icon={faTruck}/>
                <Dash faltu="Security" icon={faGaugeSimple}/>
                <Dash faltu="Timming" icon={faClock}/>
               
                
                </div>
            </div>
        </div>
     </div>
     <div className="window2">
      <div className="wrap">
        <div className="top">
        <Header onDivClick={toggleDiv}/>
        </div>
        <div className="components">
          <div className="first-container">
            <div className="box1">
              <div className="left-side">
                <div className="upper-side">
                  <h1>Congratulations <span>John!</span> 🎉</h1>
                </div>
                <div className="lower-side">
                  <p>You have done 72% 😎 more sales today. Check your new raising badge in your profile.</p>
                </div>
              </div>
              <div className="right-side">
                <div className="img-side">
                <img src={dummy} alt="" />
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="eek">
                <div className="dollar">
                <FontAwesomeIcon icon={faCircleDollarToSlot
                } style={{
                  fontSize: 30, color: 'rgb(86, 202, 0)'
                }} />
                </div>

                <div className="dots">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                </div>
              </div>
              <div className="doo">
                <div className="title-card">
                  <p>Revenue</p>
                </div>
                <div className="paisa">
                  <h1>$95K</h1>
                  <p>+12%</p>
                </div>
              </div>
              <div className="tin">
                <p>Revenue Increase</p>
              </div>
            </div>
            <div className="box3">
            <div className="eek">
                <div className="dollar">
                <FontAwesomeIcon icon={faCreditCard
                } style={{
                  fontSize: 30, color: 'rgb(22, 177, 255)'
                }} />
                </div>

                <div className="dots">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                </div>
              </div>
              <div className="doo">
                <div className="title-card">
                  <p>Transactions</p>
                </div>
                <div className="paisa">
                  <h1>$12.1K</h1>
                  <p>+38%</p>
                </div>
              </div>
              <div className="tin">
                <p>Daily Transactions</p>
              </div>
            </div>
          </div>
          {/* Second Container */}
          <div className="second-container">
                <div className="chart-div">
                    <div className="chart-left">
                      <div className="chart-upper">
                        <h1>Total Profit</h1>
                      </div>
                      <div className="chart-lower">
                        <img src={chart} alt="" />
                      </div>
                    </div>
                    <div className="chart-right">
                      <div className="chart-item1">
                        <div className="tata1">
                          <h1>$482.85k</h1>
                          <p>Last month balance $234.40k</p>
                        </div>
                        <div className="tata2">
                        <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                        </div>
                      </div>
                      <div className="chart-item2">
                        <Data icons={faChartPie} Data={"Profit"} paisa={"$48,568.20"} styling={"rgb(228, 246, 214)"}
                        iconColor={"rgb(86, 202, 0)"}/>
                        <Data icons={faChartPie} Data={"Profit"} paisa={"$48,568.20"} styling={"rgb(237, 228, 255)"}
                        iconColor={"rgb(140, 87, 255)"}/>
                        <Data icons={faChartPie} Data={"Profit"} paisa={"$48,568.20"} styling={"rgb(236, 237, 238)"}
                        iconColor={"rgb(151, 154, 159)"}/>
                      </div>
                      <div className="chart-item3">
                        <button>View Report</button>
                      </div>
                    </div>
                </div>
                <div className="chart-two">
                  <div className="first-div">
                    <div className="cal1">
                      <h1>Total Sales</h1>
                      <p>Calculated in last 7 days</p>
                      <h2>$25,980 <span>+15.6%</span>
                      </h2>
                    </div>
                    <div className="cal2"></div>
                  </div>
                  <div className="second-div">
                    <div className="cont1"></div>
                    <div className="cont2"></div>
                  </div>
                </div>
          </div>
          {/* third Container */}
          <div className="third-container">
            <div className="tc1">
              <div className="tc1-left">
                <div className="tc1-title">
                  <h2>Transactions</h2>
                  <div className="three-dots">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                  </div>
                </div>
                <div className="tc1-dis">
                  <Trs upDown={faChevronUp} paymentLogo={faPaypal} company={"PayPal"} mainPaisa={"+$1234.55"} recieve={"Recieve Money"} colorOfBack={"rgb(255, 226, 227)"}
                  mainColor={"rgb(255, 76, 81)"}/>
                  <Trs upDown={faChevronUp} paymentLogo={faGooglePay}
                  company={"G-Pay"} mainPaisa={"+$1234.55"} recieve={"Recieve Money"} colorOfBack={"rgb(228, 246, 214)"}
                  mainColor={"rgb(167, 227, 122)"}/>
                  <Trs upDown={faChevronDown} paymentLogo={faAmazonPay}
                  company={"Amazon Pay"} mainPaisa={"+$1234.55"} recieve={"Recieve Money"} colorOfBack={"rgb(255, 243, 214)"}
                  mainColor={"rgb(255, 207, 92)"}/>
                  <Trs upDown={faChevronUp} paymentLogo={faCartShopping}
                  company={"COD"} mainPaisa={"+$1234.55"} recieve={"Recieve Money"} colorOfBack={"rgb(237, 228, 255)"}
                  mainColor={"rgb(185, 146, 254)"}/>
                  <Trs upDown={faChevronUp} paymentLogo={faCreditCard}
                  company={"Card Shopping"} mainPaisa={"+$1234.55"} recieve={"Recieve Money"} colorOfBack={"rgb(218, 242, 255)"}
                  mainColor={"rgb(22, 177, 255)"}/>
                </div>
              </div>
              <div className="tc1-right">
                <div className="tc1-upper">
                  <div className="tc1-upper-right">
                  <div className="eek">
                <div className="dollar">
                <FontAwesomeIcon icon={faCircleDollarToSlot
                } style={{
                  fontSize: 30, color: 'rgb(86, 202, 0)'
                }} />
                </div>

                <div className="dots">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                </div>
              </div>
              <div className="doo">
                <div className="title-card">
                  <p>Revenue</p>
                </div>
                <div className="paisa">
                  <h1>$95K</h1>
                  <p>+12%</p>
                </div>
              </div>
              <div className="tin">
                <p>Revenue Increase</p>
              </div>
                  </div>
                  <div className="tc1-upper-left">
                  <div className="eek">
                <div className="dollar">
                <FontAwesomeIcon icon={faCircleDollarToSlot
                } style={{
                  fontSize: 30, color: 'rgb(86, 202, 0)'
                }} />
                </div>

                <div className="dots">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                </div>
              </div>
              <div className="doo">
                <div className="title-card">
                  <p>Revenue</p>
                </div>
                <div className="paisa">
                  <h1>$95K</h1>
                  <p>+12%</p>
                </div>
              </div>
              <div className="tin">
                <p>Revenue Increase</p>
              </div>
                  </div>
                </div>
                <div className="tc1-lower">
                  <div className="lower-left">
                    <div className="left-one">
                      <h1>New Visitors</h1>
                    </div>

                    <div className="left-two">
                      <p>48% new visitors <br /> this week</p>
                    </div>
                    <div className="left-three">
                      <h1>12,480 <span>+28%</span></h1>
                    </div>
                  </div>
                  <div className="lower-right">
                    <Pillar pillHeight="30%" pillColor="rgb(243, 238, 255)"/>
                    <Pillar pillHeight={"50%"} pillColor={"rgb(243, 238, 255)"}/>
                    <Pillar pillHeight={"40%"} pillColor={"rgb(243, 238, 255)"}/>
                    <Pillar pillHeight={"50%"} pillColor={"rgb(243, 238, 255)"}/>
                    <Pillar pillHeight={"80%"} pillColor={"rgb(140, 87, 255)"}/>
                    <Pillar pillHeight={"30%"} pillColor={"rgb(243, 238, 255)"}/>
                    <Pillar pillHeight={"40%"} pillColor={"rgb(243, 238, 255)"}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tc2">
              <div className="tc2-one">
              <h2>Website Statistics</h2>
                  <div className="three-dots">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{
                  cursor: 'pointer'
                }} />
                  </div>
              </div>
              <div className="tc2-two">
                <div className="one-main"></div>
                <div className="two-main"></div>
              </div>
              <div className="tc2-three"></div>
            </div>
          </div>

          {/* Fourth Container */}
          <div className="fourth-container">
            <div className="fourth-left">
              <div className="fourth-title1">
                <div className="person-id">
                  <div className="id-no">
                    <h2>#ID</h2>
                  </div>
                  <div className="status">
                    <h2>STATUS</h2>
                  </div>
                  <div className="client">
                    <h2>CLIENT</h2>
                  </div>
                </div>
                <div className="person-balance">
                <div className="cl-total">
                    <h2>TOTAL</h2>
                  </div>
                  <div className="cl-balance">
                    <h2>BALANCE</h2>
                  </div>
                </div>
              </div>
              <div className="fourth-dis1">
                <Id idNo={"#4987"} statusIcon={faCheck} clientLogo={"JN"} clientName={"Jones Niklodean"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"green"} statusbgColor={'rgb(228, 246, 214)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faEnvelope} clientLogo={"AJ"} clientName={"Amanda Jones"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"rgb(153, 106, 255)"} statusbgColor={'rgb(237, 228, 255)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faCheck} clientLogo={"CR"} clientName={"Cristiano Ronaldo"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"green"} statusbgColor={'rgb(228, 246, 214)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faCheck} clientLogo={"WS"} clientName={"Will Smith"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"green"} statusbgColor={'rgb(228, 246, 214)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faCheck} clientLogo={"KM"} clientName={"kriss Marton"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"green"} statusbgColor={'rgb(228, 246, 214)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faCheck} clientLogo={"MJ"} clientName={"Micheal Jons"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"green"} statusbgColor={'rgb(228, 246, 214)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faEnvelope} clientLogo={"KP"} clientName={"Kevin Paton"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"rgb(153, 106, 255)"} statusbgColor={'rgb(237, 228, 255)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>

                <Id idNo={"#4987"} statusIcon={faCheck} clientLogo={"DF"} clientName={"David Flaros"} clientEmail={"jonesnik@gmail.com"} totalAmount={"$3456"} balance={"$234"} statusColor={"green"} statusbgColor={'rgb(228, 246, 214)'} clientColor={"grey"} clientbgColor={'rgb(240, 239, 240)'}/>
              </div>
            </div>
            <div className="fourth-right">
              <div className="fourth-title2"></div>
              <div className="fourth-dis2"></div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App