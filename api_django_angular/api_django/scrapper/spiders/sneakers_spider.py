from scrapy.spiders import CrawlSpider
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst
from scrapy.http.request import Request
from ..items import SneakersItem


class SneakersSpider(CrawlSpider):
    name = "sneakers"
    # allowed_domains = ["realestatedatabase.net"]
    start_urls = ["https://www.lesitedelasneaker.com/release-dates/?filter=latest_drops",]

    def parse(self, response):
        l = ItemLoader(item=SneakersItem(), response=response)
        # l.default_output_processor = TakeFirst()

        l.add_css('label', 'h3.c-uprelease__title')
        l.add_css('image', '.c-uprelease__picture img')
        l.add_css('description', 'p.item-date')
        l.add_css('price', 'p.item-price')

        yield(l.load_item())
        # return l.load_item()
