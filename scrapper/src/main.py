from .entities.entity import Session, engine, Base
from .entities.product import Product

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
products = session.query(Product).all()

if len(products) == 0:
    # create and persist mock product
    python_product = Product("Air Jordan 1 Low Golf « UNC »", "https://www.lesitedelasneaker.com/wp-content/images/2022/02/air-jordan-1-low-golf-unc-dd9315-100-pic100.jpeg"," ", "130.0","script")
    session.add(python_product)
    session.commit()
    session.close()

    # reload products
    products = session.query(Product).all()

# show existing products
print('### products:')
for product in products:
    print(f'({product.id}) {product.label} - {product.image} - {product.description} - {product.price}')