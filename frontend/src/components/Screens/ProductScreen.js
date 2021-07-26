import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import Loader from "../Loader";
import { productDetails } from "../../actions/productActions";

import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Rating from "../Rating";

const ProductScreen = ({ history, match }) => {
	const dispatch = useDispatch();

	const productDetail = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetail;

	useEffect(() => {
		if (!product._id || product._id !== match.params.id) {
			dispatch(productDetails(match.params.id));
		}
	}, [dispatch, match, product._id]);

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Row>
						<Col md={6}>
							<Image src={product.image} alt={product.name} fluid />
						</Col>
						<Col md={6}>
							<div>
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating value={product.rating} text={product.numReviews} />
								</ListGroup.Item>
								<ListGroup.Item>Price:${product.price}</ListGroup.Item>
								<ListGroup.Item>
									Description:{product.description}
								</ListGroup.Item>
							</div>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};

export default ProductScreen;
