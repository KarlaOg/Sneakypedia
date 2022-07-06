from django.db import models
from sqlalchemy import *
from sqlalchemy.engine.url import URL
# from api_django.elasticsearch.search_sneakers import SneakerIndex
from sqlalchemy.ext.declarative import declarative_base
from api_django import settings


DeclarativeBase = declarative_base()

def db_connect():
    """
    Performs database connection using database settings from settings.py.
    Returns sqlalchemy engine instance
    """
    return create_engine(URL(**settings.DATABASE))

def create_sneakers_table(engine):
    DeclarativeBase.metadata.create_all(engine)


# def indexing(self):
#    obj = SneakerIndex(
#       meta={'id': self.id},
#       label=self.label,
#       released_date=self.released_date,
#       description=self.description,
#       price=self.price
#    )
#    obj.save()
#    return obj.to_dict(include_meta=True)

# Create your models here.
class SneakerModel(models.Model):
    label  = models.CharField(max_length=200)
    image  = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    release_date = models.CharField(max_length=15)
    price = models.DecimalField(max_digits=5, decimal_places=2)

class Sneakers(DeclarativeBase):
    """Sqlalchemy sneakers model"""
    __tablename__ = "sneakers"

    id = Column(Integer, primary_key=True)
    label = Column('label', String)
    image = Column('image', String, nullable=True)
    description = Column('description', String, nullable=True)
    release_date = Column('release_date', String, nullable=True)
    price = Column('price', Float, nullable=True)