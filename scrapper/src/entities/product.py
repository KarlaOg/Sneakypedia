# coding=utf-8

from sklearn.metrics import cohen_kappa_score
from sqlalchemy import Column, String, Float

from .entity import Entity, Base


class Product(Entity, Base):
    __tablename__ = 'products'

    label = Column(String)
    image = Column(String)
    description = Column(String)
    price = Column(Float)



    def __init__(self, label,image, description, price, created_by):
        Entity.__init__(self, created_by)
        self.label = label
        self.image = image
        self.description = description
        self.price = price
