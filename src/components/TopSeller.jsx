import { Card, Col, Row } from "react-bootstrap";
import seller_1 from '../assets/images/Seller_Images/seller_1.png'

function TopSeller() {
    return (
        <>
            <div className="container">
                <Row className="border rounded p-3">
                    <h3 className="mb-3">Top Sellers</h3>

                    <Col md={3}>
                        <Card className="p-2 bg-body-secondary border-0">
                            <div className="d-flex">
                                <img src={seller_1} alt="seller_1" className="rounded w-25 me-3" />
                                <div className="d-flex align-items-center">
                                    <div className="d-block">
                                        <h6>
                                            Ramesh
                                        </h6>
                                        <div className="d-flex">
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-half text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="p-2 bg-body-secondary border-0">
                            <div className="d-flex">
                                <img src={seller_1} alt="seller_1" className="rounded w-25 me-3" />
                                <div className="d-flex align-items-center">
                                    <div className="d-block">
                                        <h6>
                                            Ramesh
                                        </h6>
                                        <div className="d-flex">
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-half text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="p-2 bg-body-secondary border-0">
                            <div className="d-flex">
                                <img src={seller_1} alt="seller_1" className="rounded w-25 me-3" />
                                <div className="d-flex align-items-center">
                                    <div className="d-block">
                                        <h6>
                                            Ramesh
                                        </h6>
                                        <div className="d-flex">
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-half text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="p-2 bg-body-secondary border-0">
                            <div className="d-flex">
                                <img src={seller_1} alt="seller_1" className="rounded w-25 me-3" />
                                <div className="d-flex align-items-center">
                                    <div className="d-block">
                                        <h6>
                                            Ramesh
                                        </h6>
                                        <div className="d-flex">
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-fill me-1 text-warning"></i>
                                            <i class="bi bi-star-half text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default TopSeller;