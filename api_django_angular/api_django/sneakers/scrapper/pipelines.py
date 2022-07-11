from sqlalchemy.orm import sessionmaker
from sneakers.models import Sneakers, db_connect, create_sneakers_table

class ScraperPipeline(object):
    def __init__(self):
        """
        Initializes database connection and sessionmaker.
        Creates deals table.
        """
        engine = db_connect()
        create_sneakers_table(engine)
        self.Session = sessionmaker(bind=engine)
    """
    Saves Item to the database
    """
    def process_item(self, item, spider):
        session = self.Session()
        sneaker = Sneakers(**item)

        try:
            if sneaker not in session:
                session.add(sneaker)
                session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

        return item


class SneakerPricePipeline(object):
    """
    Removes signs from the price value.
    """
    def process_item(self, item, spider):
        if item.get('price'):
            item['price'] = item['price'].replace('€', '').strip()
            item['price'] = item['price'].replace(',','.')
            item.save()
            return item