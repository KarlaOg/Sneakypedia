from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst
# from scrapy.http.request import Request
from ..items import SneakersItem
import scrapy 


class SneakersSpider(scrapy.Spider):
    name = "sneakers"
    allowed_domains = ["lesitedelasneaker.com"]
    start_urls = ["https://www.lesitedelasneaker.com/release-dates/?filter=latest_drops",]

    def parse(self, response):
        l = ItemLoader(item=SneakersItem(), response=response)
        l.default_output_processor = TakeFirst()

        l.add_css('label', 'h3.c-uprelease__title::text')
        l.add_xpath('image', '//div[@class="c-uprelease__picture"]/img/@src')
        l.add_css('description', 'p.item-date::text')
        l.add_css('price', 'p.item-price::text')

        return l.load_item()