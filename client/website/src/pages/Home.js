import logo from '../assets/images/logo.png';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import backgroundImage from '../assets/images/bg.png';
import { MDBBtn } from 'mdb-react-ui-kit';
import { motion } from "framer-motion"
import Card from 'react-bootstrap/Card';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';


import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBInput,
  MDBRadio,
  MDBFooter, 
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Col, Container } from 'react-bootstrap';

function HomePage() {
    const headerStyle = {
      opacity: 0, // start at 0
      minHeight: "870px"
    };

    const imageStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '47% 100%',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      opacity: 0,
    };

    const cards = document.querySelectorAll('.card');

    function animateCards() {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - cardHeight / 2) {
          card.classList.add('animate');
        }
      });
    }

    window.addEventListener('scroll', animateCards);
    const studentNo = window.location.href.slice(27,);
    return (
      <div>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} style={imageStyle}>
                  <Navbar></Navbar>

                  <motion.div initial={{ x: '-100vw' }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='d-flex align-items-center me-5' style={headerStyle}>
                    <Container>
                      <p style={{letterSpacing: "2px", color: "#0da5b3", fontSize: "30px"}}><b>Hemen Başla</b></p>
                      <h1 style={{width:"650px", fontSize: "80px", letterSpacing: "3px"}}>
                        Bakırçay TeleSağlık
                      </h1><br></br>
                      <p className='w-50' style={{letterSpacing: "2px", color: "grey"}}>
                        Uzman hekimlerimizden randevular alın ve Bakırçay TeleSağlık ile tedavinize hemen başlayın.
                      </p><br></br>
                      <MDBBtn href={`/doctorslist/${studentNo}`} rounded className='text-center' size='lg' style={{backgroundColor: "#0da5b3"}}>
                        Doktorlarımız

                      </MDBBtn>
                      <MDBBtn href={`/StudentProfile/${studentNo}`} rounded className='ms-4 text-center' color='primary' size='lg'>
                        Profilim
                      </MDBBtn>
                    </Container>
                  </motion.div>
          </motion.div>
          <i class="fa-duotone fa-head-side-medical" style={{color: "#494ca2"}}></i>
          <div style={{minHeight: "500px", backgroundColor: "#f3f4f6"}}>
            <br></br>
            <h5 className='text-center pt-5' style={{color: "#0da5b3"}}><b>Hizmetlerimiz</b></h5>
            <br></br>
            <h1 className='text-center m-auto' style={{width: "30%", color: "black", letterSpacing: "2px"}}><b>Hastalıklar</b></h1>
            <br></br><br></br><br></br>
            <Container>
            <i class="fa-regular fa-head-side-medical" style={{color: "#494ca2"}}></i>
                <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                  <MDBCol>
                    <MDBCard className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#d2f9f5"}}><i class="fa-solid fa-brain" style={{color: "#27e3d1"}}></i></span>
                        <MDBCardTitle className='mt-5'>Nöroloji</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                        ...
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#dbdbec"}}><i class="fa-solid fa-head-side-mask"></i></span>
                        <MDBCardTitle className='mt-5'>Psikoloji</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                        ...
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#cfe7ff"}}><i class="fas fa-headphones" style={{color: "#198eff"}}></i></span>
                        <MDBCardTitle className='mt-5'>Kardiyoloji</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                        ...
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#ffddd3"}}><i class="fas fa-bell" style={{color: "#ff5722"}}></i></span>
                        <MDBCardTitle className='mt-5'>Dahiliye</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                          ...
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              
              <br></br>
              {/* <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                  <MDBCol>
                  <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#cfe7ff"}}><i class="fas fa-file-invoice" style={{color: "#0f89ff"}}></i></span>
                        <MDBCardTitle className='mt-5'>Design & Creatives</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                          50 available vacancy
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#cef7e8"}}><i class="fas fa-chart-pie" style={{color: "#0cd68a"}}></i></span>
                        <MDBCardTitle className='mt-5'>Marketing & Communication</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                          50 available vacancy
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#fef8cc"}}><i class="fas fa-money-bill-alt" style={{color: "#fcdc00"}}></i></span>
                        <MDBCardTitle className='mt-5'>Business Development</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                          50 available vacancy
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard className='text-body mb-3 p-4' style={{backgroundColor: "#0026ff", height: "280px"}}>
                      <MDBCardBody>
                        <MDBCardTitle className='mt-5 text-white'>+4 More</MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-white'>
                          50 available vacancy
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow> */}
            </Container>
          </div>
          <div style={{minHeight: "1100px"}}>
            <Container>
              <br></br><br></br><br></br><br></br>
              <h6 style={{color: "#0da5b3"}}><b>Hakkımızda</b></h6>
              <br></br>
              <h1 className='w-50'>
                TeleSağlık Nedir!
              </h1>
              <br></br>
              <div className='d-flex'>
                <p style={{width: "50%", marginRight: "80px"}}>Telesağlık platformu, hastaların doktorlarla görüntülü olarak iletişim kurabildiği, online randevu oluşturabildiği ve muayene olabildiği bir dijital sağlık hizmetidir. Bu platform, kullanıcıların doktorlarıyla etkileşime geçmelerini sağlayan bir sanal ortam sağlar. Hastalar, cihazlarından (bilgisayar, akıllı telefon veya tablet) telesağlık uygulamasına erişerek randevu alabilir ve ilgili doktorla bir görüntülü görüşme yapabilir.

Telesağlık platformu, kullanıcılara çeşitli sağlık hizmetlerine erişim imkanı sunar. Hastalar, genel sağlık kontrolü, akut hastalık durumları, kronik rahatsızlıkların takibi, ilaç danışmanlığı, laboratuvar sonuçlarının değerlendirilmesi gibi konularda doktorlarıyla görüşebilir ve gerektiğinde uzaktan muayene olabilir. Ayrıca, doktorlar hastalık tanısı koymak, tedavi planı oluşturmak veya hastaların mevcut tedavilerini yönetmek için telesağlık platformunu kullanabilirler.
                </p>
                <p style={{width: "50%"}}>
                Bu platform, sağlık hizmetlerine kolay erişim sağlarken aynı zamanda zamandan ve yerden bağımsızlık sunar. Hastalar, mevcut konumlarından bağımsız olarak, istedikleri zaman ve yerde doktorlarıyla görüşebilirler. Özellikle kırsal bölgelerde yaşayan veya ulaşım sorunu yaşayan kişiler için büyük bir avantaj sağlar.

Telesağlık platformları, hasta gizliliği ve güvenliği konularında da titizlikle çalışır. Tüm görüşmeler ve hasta verileri, gizlilik standartlarına uygun olarak korunur ve sadece yetkilendirilmiş sağlık profesyonelleri tarafından erişilebilir.

Sonuç olarak, telesağlık platformları, hastaların doktorlarıyla görüntülü olarak iletişim kurabildiği, online randevu oluşturabildiği ve muayene olabildiği bir dijital sağlık hizmetidir. Bu platformlar, sağlık hizmetlerine erişimi kolaylaştırırken zamandan ve yerden bağımsızlık sunar, böylece hastaların sağlık ihtiyaçlarını etkili bir şekilde karşılamalarına yardımcı olur.
                </p>
              </div><br></br><br></br><br></br>
              <div className='d-flex'>
                <img src={"https://finestwp.co/demos/html/fastland/image/home-3/feature-l3-image.png"} alt="Logo" style={{marginRight: "100px"}}/>
                <ul>
                  <br></br><br></br><br></br>
                  <li className='listItem'><b>Alanında Uzman Doktorlar</b></li>
                  <br></br>
                  <li className='listItem'><b>Online Sağlık Hizmeti</b></li>
                  <br></br>
                  <li className='listItem'><b>Çevrimiçi Görüşme İmkanı</b></li>
                </ul>
                <div style={{position: "absolute",
                             top: "2800px", 
                             right: "350px", 
                             width: "700px", 
                             height:"180px",
                             borderRadius: "10px",
                            //  opacity: "0.8",
                             backgroundColor: "rgba(13,165,179, 0.8)",                  
                            }}
                      className="shadow-lg d-flex flex-column justify-content-center align-items-center ">
                  <div class="row">
                    <div class="col column">
                      <br></br>
                      <h1 class="text-white">280</h1>
                      <p class="text-white">Project Launched</p>
                    </div>
                    <div class="col column">
                      <br></br>
                      <h1 class="text-white">500</h1>
                      <p class="text-white">Happy clients</p>
                    </div>
                    <div class="col columnLast">
                      <br></br>
                      <h1 class="text-white">+3500</h1>
                      <p class="text-white">Users Comments</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div style={{minHeight: "1000px", backgroundColor: "#f3f4f6"}}>
            <Container> 
              <br></br><br></br><br></br><br></br><br></br>
              <h6 style={{color: "#0da5b3"}}><b>Yüksek Kalite</b></h6>
              <br></br><br></br><br></br>               
              <div className='d-flex'>
                <div style={{width: "50%"}}>
                  <h1>Online Sağlık </h1>
                  <br></br>
                  <p style={{width: "70%"}}>
                    Alanında uzman birbirinden değerli uzman doktorlar ile online randevular alarak görüntülü konuşun. Ve onlardan online sağlık hizmeti alın.
                  </p>
                  <br></br>
                  <div className='w-75'>
                    <div className='d-flex justify-content-between mb-2'><h5> Günlük Çevrimiçi Görüşme</h5><h5>850</h5></div>
                    <ProgressBar variant="success" now={65} style={{height: "7px", borderRadius: "10px"}}/>
                    <br></br><br></br>
                    <div className='d-flex justify-content-between mb-2'><h5>Günlük Alınan Randevu   </h5><h5>1200</h5></div>
                    <ProgressBar variant="info" now={80} style={{height: "7px", borderRadius: "10px"}}/>
                    <br></br><br></br>
                    <div className='d-flex justify-content-between mb-2'><h5>Kayıtlı Kullanıcı Sayısı</h5><h5>6859</h5></div>
                    <ProgressBar variant="warning" now={95} style={{height: "7px", borderRadius: "10px"}}/>
                    <br></br><br></br>
                    <div className='d-flex justify-content-between mb-2'><h5>Doktor Sayımız</h5><h5>486</h5></div>
                    <ProgressBar variant="danger" now={35} style={{height: "7px", borderRadius: "10px"}}/>
                  </div>
                </div>
                <img src={"https://finestwp.co/demos/html/fastland/image/home-3/content-l3-img-1.png"} alt="Logo" style={{width: "60%"}} />
              </div>
            </Container>
          </div>
          <div style={{minHeight: "500px"}}>
            <Container>
              <br></br>
              <h5 className='text-center pt-5' style={{color: "#0da5b3"}}><b>Mobil Uygulamalarımız</b></h5>
              <h1 className='text-center pt-3'>Artık Cebinizdeyiz</h1>
              <br></br><br></br><br></br>
              
              <div className='d-flex justify-content-between' style={{marginLeft: "400px", marginRight:"400px"}}>
                <div className='steps'>
                  {/* <h3 className='border rounded-circle text-white' style={{backgroundColor: "#5034fc", 
                                                                     padding:"30px 40px",
                                                                     boxShadow: "0px 0px 30px 30px rgba(80,52,252,0.1)",
                                                                     width:"100px"}}>1
                  </h3> */}
                  <FontAwesomeIcon
        icon={faAppStoreIos}
        style={{ fontSize: '10em', color: "#2e72e0" }}
      /><br></br><br></br><h3 className=''>App Store</h3>
                  <p></p>
                </div>
                <div className='steps'>
                <FontAwesomeIcon
        icon={faGooglePlay}
        style={{ fontSize: '10em', color: "#ff3396" }}

      /><br></br><br></br><h3 className=''>Google Play</h3>
                  </div>
                {/* <div>
                  <h3 className='border rounded-circle text-white' style={{backgroundColor: "#0da5b3", 
                                                                     padding:"30px 40px",
                                                                     boxShadow: "0px 0px 30px 30px rgba(13,165,179,0.1)"}}>3
                  </h3>
                  <h3 className=''>Yorumla</h3>
                </div> */}
              </div>
              <br></br><br></br>
              
            </Container>
          </div>
          <div className='d-flex align-items-center' style={{minHeight: "620px", backgroundImage: "url('https://arsiv.bakircay.edu.tr/sliderimage/1081218831.jpg')", backgroundSize: "100%"}}>
            <Container className='text-center text-white'>
              {/* <h1>TeleSağlık</h1><br></br>
              <h3 className='w-50 m-auto'>.
              </h3><br></br>
              <MDBBtn rounded className='text-center pe-5 ps-5 pt-3 pb-3' size='lg' style={{backgroundColor: "#0da5b3"}}>
                Hemen Başla
              </MDBBtn> */}
            </Container>
          </div>
          <div style={{minHeight: "900px" , backgroundColor: "#f3f4f6"}}>
            <Container>
              <div>
                <br></br><br></br><br></br><br></br>
                <h6 style={{color: "#0da5b3"}} className="text-center"><b>Yorumlar</b></h6>
                <br></br>
                <h1 className='text-center w-50 m-auto'>Kullanıcılarımızın Değerli Yorumları</h1><br></br><br></br><br></br>
                <MDBRow className='row-cols-1 row-cols-md-3 g-3'>
                  <MDBCol>
                    <MDBCard className='text-body mb-3 p-4 commentCard m-1' style={{height: "320px"}}>
                      <MDBCardBody>
                      <i class="fas fa-circle-user commentatorPic" style={{color: "#0da5b3", fontSize:"50px"}}></i>
                        <MDBCardText className='mt-4'>
                          Harika!
                        </MDBCardText><hr></hr>
                        <div className='d-flex justify-content-between'>
                          <MDBCardText>
                            <b>Mahmut Tiryaki</b>
                          </MDBCardText>
                          <MDBCardText className='text-secondary'>
                            <div className='d-flex'>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                            </div>
                          </MDBCardText>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard className='text-body mb-3 p-4 commentCard m-1' style={{height: "320px"}}>
                      <MDBCardBody>
                      <i class="fas fa-circle-user commentatorPic" style={{color: "#0da5b3", fontSize:"50px"}}></i>
                        <MDBCardText className='mt-4'>
                          Gençleştim resmen , bu kadar mı fark eder.
                        </MDBCardText><hr></hr>
                        <div className='d-flex justify-content-between'>
                          <MDBCardText>
                            <b>Kezman Tütün</b>
                          </MDBCardText>
                          <MDBCardText className='text-secondary'>
                            <div className='d-flex'>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star-half-stroke text-warning"></i>
                            </div>
                          </MDBCardText>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  <MDBCard className='text-body mb-3 p-4 commentCard m-1' style={{height: "320px"}}>
                      <MDBCardBody>
                      <i class="fas fa-circle-user commentatorPic" style={{color: "#0da5b3", fontSize:"50px"}}></i>
                        <MDBCardText className='mt-4'>
                          Teknoloji ne kadar gelişti, insan gerçekten hayret ediyor...
                        </MDBCardText><hr></hr>
                        <div className='d-flex justify-content-between'>
                          <MDBCardText>
                            <b>Rıfıka Su</b>
                          </MDBCardText>
                          <MDBCardText className='text-secondary'>
                            <div className='d-flex'>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="far fa-star text-warning"></i>
                            </div>
                          </MDBCardText>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  </MDBRow>
              </div>
            </Container>
          </div>
          <div style={{minHeight: "900px"}}>
            <Container>
              <br></br><br></br><br></br><br></br><br></br>
              <h6 style={{color: "#0da5b3"}}><b>Bizimle İletişime Geç</b></h6>
              <br></br><br></br>               
              <div className='d-flex'>
                <div style={{width: "50%"}}>
                  <h1>Mesaj Gönder</h1>
                  <br></br>
                  <p style={{width: "70%"}}>
                    Mesajınızı Aşağıya Yazın.
                  </p>
                  <br></br>
                  <div className='w-75'>
                    <div className='d-flex justify-content-between'>
                      <MDBInput id='form4Example1' wrapperClass='mb-4' label='İsim Soyisim' />
                      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email ' />
                    </div>
                    <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Mesaj' style={{height: "150px"}}/>
                    <div className='d-flex justify-content-between'>
                      <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Bültene Abone Ol.' />
                      <MDBBtn rounded className='text-center pe-5 ps-5 pt-3 pb-3' size='lg' style={{backgroundColor: "#0da5b3"}}>
                        Gönder
                      </MDBBtn>
                    </div>
                  </div>
                </div>
                {/* <img src={"https://finestwp.co/demos/html/fastland/image/home-3/content-l3-img-1.png"} alt="Logo" style={{width: "60%"}} /> */}
                <div className='text-white pt-5 pb-5 ps-5' style={{width: "550px", backgroundColor: "#0da5b3", borderRadius: "20px"}}>
                  <h1>Adresimiz</h1><br></br>
                  <p className='w-75'>
                    Gelin,bir çayımızı için...
                  </p>
                  <hr className='me-5'></hr>
                  <div className='d-flex justify-content-between me-5'>
                    
                    <div>
                      <b>Bizi Ziyaret için:</b>
                      <p >Gazi Mustafa Kemal Mah, Kaynaklar Cad , Seyrek, Menemen, İzmir</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div>
          <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <Container className='d-flex justify-content-center'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
        </Container>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
          </div>
        </div>

                
    );
}

export default HomePage;