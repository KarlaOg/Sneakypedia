# coding=utf-8

from sklearn.metrics import cohen_kappa_score
from sqlalchemy import Column, String, Float
from marshmallow import Schema, fields

from .entity import Entity, Base


class Product(Entity, Base):
    __tablename__ = 'products'

    label = Column(String)
    image = Column(String)
    description = Column(String)
    price = Column(Float)



    def __init__(self, label, image, description, price, created_by):
        Entity.__init__(self, created_by)
        self.label = label
        self.image = image
        self.description = description
        self.price = price


class ProductSchema(Schema):
    id = fields.Number()
    label = fields.Str()
    image = fields.Str()
    description = fields.Str()
    price = fields.Number()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
