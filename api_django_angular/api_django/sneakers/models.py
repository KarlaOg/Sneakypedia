from django.db import models
from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base


DeclarativeBase = declarative_base()

def db_connect():
    """
    Performs database connection using database settings from settings.py.
    Returns sqlalchemy engine instance
    """
    return create_engine('sqlite:///db.sqlite3')

def create_sneakers_table(engine):
    DeclarativeBase.metadata.create_all(engine)

class SneakerModel(models.Model):
    label  = models.CharField(max_length=200)
    image  = models.TextField()
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