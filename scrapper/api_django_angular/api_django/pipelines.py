class ScraperPipeline(object):
    """
    Saves Item to the database
    """
    def process_item(self, item, spider):
        item.save()
        return item


class SneakerPricePipeline(object):
    """
    Removes signs from the price value.
    """
    def process_item(self, item, spider):
        if item.get('price'):
            item['price'] = item['price'].replace('€', '')
            return item