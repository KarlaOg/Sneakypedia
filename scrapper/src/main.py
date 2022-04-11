from .entities.entity import Session, engine, Base
from .entities.product import Product,ProductSchema
from flask import Flask, jsonify, request


# creating the Flask application
app = Flask(__name__)

# generate database schema
Base.metadata.create_all(engine)

@app.route('/products')
def get_products():
    # fetching from the database
    session = Session()
    product_objects = session.query(Product).all()

    # transforming into JSON-serializable objects
    schema = ProductSchema(many=True)
    products = schema.dump(product_objects)

    # serializing as JSON
    session.close()
    return jsonify(products.data)


@app.route('/products', methods=['POST'])
def add_product():
    # mount product object
    posted_product = ProductSchema(only=('label', 'image','description','price'))\
        .load(request.get_json())

    product = Product(**posted_product.data, created_by="HTTP post request")

    # persist product
    session = Session()
    session.add(product)
    session.commit()

    # return created product
    new_product = ProductSchema().dump(product).data
    session.close()
    return jsonify(new_product), 201