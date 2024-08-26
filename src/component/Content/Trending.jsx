import React from "react";
import {Card, Container,Row,Col, Image} from 'react-bootstrap';

const Trending = () => {
    return (
        <>
       <div className = "garisBiru"></div> 

            <div>
                <Container>
                    <br />
                    <br />
                    <h1 className="text-white">TRENDING</h1>
                    <br />
                    <Row>
                        <Col md={4}className="movieWrapper" id="trending">
                            <Card className= "bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./miracle1.jpg" alt="miracle" className="image"/>
                                    <Card.Title className="text-center">Miracle In Cell No. 07</Card.Title>
                                    <Card.Text className="text-left">
                                     Bertahun-tahun setelah seorang pria Cacat mental dituduh melakukan pembunuhan, Putri nya seorang pengacara berusaha membuktikan ayah nya tidak bersalah.
                                    </Card.Text>
                                    <Card.Text className="text-left">8 September 2022</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className= "bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./galaksi.jpg" alt="miracle" className="image"/>
                                    <Card.Title className="text-center">Galaksi</Card.Title>
                                    <Card.Text className="text-left">
                                    Kehidupan Galaksi Aldebaran (Bryan Domani), seorang siswa SMA Ganesha. Ia merupakan ketua geng yang cukup disegani dan ditakuti di sekolahnya, Ravispa. 
                                    </Card.Text>
                                    <Card.Text className="text-left">24 Agustus 2023</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className= "bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./agak laen.jpg" alt="miracle" className="image"/>
                                    <Card.Title className="text-center">Agak Laen</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat sahabat yang berjuang untuk mengubah nasib mereka melalui rumah hantu di pasar malam, sayangnya wahana tersebut sepi pengunjung. Akankah mereka bisa mengubah nya?
                                    </Card.Text>
                                    <Card.Text className="text-left">1 Februari 2024</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className= "bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./ancika.jpg" alt="miracle" className="image"/>
                                    <Card.Title className="text-center">Dilan & Ancika</Card.Title>
                                    <Card.Text className="text-left">
                                    Seorang mantan ketua geng motor bernama Dilan yang jatuh cinta pada Ancika, seorang gadis yang membenci geng motor. Dan, Ancika menentang segala bentuk hubungan asmara dan tanpa terkecuali ia juga membenci Dilan.
                                    </Card.Text>
                                    <Card.Text className="text-left">11 Januari 2024</Card.Text>
                            </Card>
                        </Col>


                        <Col md={4} className="movieWrapper">
                            <Card className= "bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./the big 5.jpg" alt="miracle" className="image"/>
                                    <Card.Title className="text-center">The Big 4</Card.Title>
                                    <Card.Text className="text-left">
                                    Empat saudara dengan status pembunuh bayaran harus kembali beraksi setelah pensiun dini untuk cari tahu siapa pembunuh bapak mereka. Dan menampilkan seorang detektif wanita bernama Dina yang menyelidiki kematian ayahnya. 
                                    </Card.Text>
                                    <Card.Text className="text-left">15 Desember 2022</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className= "bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./serigala.jpg" alt="miracle" className="image"/>
                                    <Card.Title className="text-center">Serigala Terakhir</Card.Title>
                                    <Card.Text className="text-left">
                                    Alex mantan anggota Naga Hitam yang baru aja dibebaskan dari penjara dan bertekad perbaiki diri. Alex cari Aryati kekasih lamanya, Tapi hanya bertemu jalan buntu. Fatir salah satu anggota Naga Hitam, mengajak Alex kembali ke Naga Hitam. 
                                    </Card.Text>
                                    <Card.Text className="text-left">5 November 2009</Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Trending;