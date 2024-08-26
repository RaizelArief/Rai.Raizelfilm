import React from "react";
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

const Superhero = () => {
    return (
        <>
            <div className="garis"></div>

            <div>
                <Container>
                    <br />
                    <br />
                    <h1 className="text-white">SUPERHERO MOVIE</h1>
                    <br />
                    <Row>
                        <Col md={4} className="movieWrapper" id="superhero">
                            <Card className="bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./Doctor-Strange-2-poster.jpg" alt="miracle" className="image" />
                                <Card.Title className="text-center">Doctor Strange In Multiverse Of Madness</Card.Title>
                                <Card.Text className="text-left">
                                    Doctor Strange bekerja sama dengan seorang gadis remaja misterius yang dapat melakukan perjalanan melintasi multiverse, untuk melawan versi dirinya dari alam semesta lain yang mengancam untuk melenyapkan multiverse .
                                </Card.Text>
                                <Card.Text className="text-left">5 Mei 2022</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className="bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./robinhood.jpg" alt="miracle" className="image" />
                                <Card.Title className="text-center">RobinHood</Card.Title>
                                <Card.Text className="text-left">
                                    Robin Hood sebagai tentara salib kembali ke negerinya dengan keadaan yang berbeda. Ia temukan pejabat korup dan menghabiskan uang kerajaan sementara rakyat dalam keadaan sengsara. Bersama Little John Ia melawan tirani Inggris yang sangat kuat.
                                </Card.Text>
                                <Card.Text className="text-left">20 November 2018</Card.Text>
                            </Card>
                        </Col>
                           
                        <Col md={4} className="movieWrapper">
                            <Card className="bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./the marvel.jpeg" alt="miracle" className="image" />
                                <Card.Title className="text-center">The Marvels</Card.Title>
                                <Card.Text className="text-left">
                               Sebuah Insiden yang buat Monica,Carol, dan Kamala menjadi saling terhubung dan bisa bertukar tempat secara bersamaan dan bisa menggunakan kekuatan super mereka. Dar-benn menghancurkan Kerajaan Kree. Hal inilah yang membuat trio marvel melawan Dar-benn, 
                                </Card.Text>
                                <Card.Text className="text-left">10 November 2023</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className="bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./avenger.jpg" alt="miracle" className="image" />
                                <Card.Title className="text-center">Avenger Infinity War</Card.Title>
                                <Card.Text className="text-left">
                                Seorang musuh yang kuat bernama Thanos, Thanos mengincar batu infinity untuk melenyapkan separuh kehidupan di Alam Semesta, lalu Avengers dan Guardians of the Galaxy berupaya menghentikan Thanos mengumpulkan Batu Infinity yang kuat.
                                </Card.Text>
                                <Card.Text className="text-left">25 April 2018</Card.Text>
                            </Card>
                        </Col>


                        <Col md={4} className="movieWrapper">
                            <Card className="bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./aquaman.webp" alt="miracle" className="image" />
                                <Card.Title className="text-center">Aquaman and the lost of kingdom</Card.Title>
                                <Card.Text className="text-left">
                                Arthur harus bekerja sama dengan saudara tirinya Orm untuk mencegah Black Manta dari membunuh keluarganya dan menggunakan Trisula Hitam yang terkutuk untuk membuat dunia menjadi terlalu panas dan cari kerajaan ketujuh di lautan yang hilang.
                                </Card.Text>
                                <Card.Text className="text-left">22 Desember 2023</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} className="movieWrapper">
                            <Card className="bg-dark text-white movieImage  m-3 p-2">
                                <Image src="./mortal kombat.jpg" alt="miracle" className="image" />
                                <Card.Title className="text-center">Mortal Kombat</Card.Title>
                                <Card.Text className="text-left">
                                Tujuh prajurit berbeda dengan alasan mereka sendiri untuk mengikuti turnamen dengan hadiah berupa kebebasan lanjutan dari wilayah mereka di bawah ancaman pengambilalihan oleh Outworld. Dan Petarung MMA Cole Young menghentikan mereka keamanan untuk Alam semesta.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Superhero;