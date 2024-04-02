import { Card, Col, Row } from "react-bootstrap";
import { product } from "../utils/data";
import { getImageUrl } from "../utils/utils"

function Deals() {
    return (
        <>
            <div className="d-block border border-3 border-danger rounded-3 p-3 my-3">
                <h3 className="mb-3">Deal Of The Week</h3>

                <Row>
                    <Col md={4}>
                        <Card className="mb-3">
                            <div className="d-block p-3">
                                <div className="d-flex">
                                    <small className='w-50 text-start text-secondary'>{product[0].type}</small>
                                </div>
                                <img src={getImageUrl(product[0])} alt={product[0].imageId} srcSet="" className="w-75" />
                                <div className="d-block text-start mb-3">
                                    <h4>₹{product[0].price}</h4>
                                    <h6>{product[0].name}</h6>
                                </div>
                                <button className='btn_white w-100'>Add to cart</button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6}>
                                <Card className="mb-3">
                                    <div className="d-block p-3">
                                        <div className="d-flex">
                                            <small className='w-50 text-start text-secondary'>{product[1].type}</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={getImageUrl(product[1])} alt={product[1].imageId} srcSet="" className="w-50" />
                                            <div className="d-block text-start mb-3">
                                                <h4>₹{product[1].price}</h4>
                                                <h6>{product[1].name}</h6>
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
                            <Col md={6}>
                                <Card className="mb-3">
                                    <div className="d-block p-3">
                                        <div className="d-flex">
                                            <small className='w-50 text-start text-secondary'>{product[2].type}</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={getImageUrl(product[2])} alt={product[2].imageId} srcSet="" className="w-50" />
                                            <div className="d-block text-start mb-3">
                                                <h4>₹{product[2].price}</h4>
                                                <h6>{product[2].name}</h6>
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
                            <Col md={6}>
                                <Card className="mb-3">
                                    <div className="d-block p-3">
                                        <div className="d-flex">
                                            <small className='w-50 text-start text-secondary'>{product[3].type}</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={getImageUrl(product[3])} alt={product[3].imageId} srcSet="" className="w-50" />
                                            <div className="d-block text-start mb-3">
                                                <h4>₹{product[3].price}</h4>
                                                <h6>{product[3].name}</h6>
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
                            <Col md={6}>
                                <Card className="mb-3">
                                    <div className="d-block p-3">
                                        <div className="d-flex">
                                            <small className='w-50 text-start text-secondary'>{product[4].type}</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={getImageUrl(product[4])} alt={product[4].imageId} srcSet="" className="w-50" />
                                            <div className="d-block text-start mb-3">
                                                <h4>₹{product[4].price}</h4>
                                                <h6>{product[4].name}</h6>
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
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Deals;