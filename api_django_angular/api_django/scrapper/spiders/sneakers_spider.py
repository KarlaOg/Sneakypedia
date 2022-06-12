from ..items import SneakersItem
import scrapy 
from scrapy.linkextractors import LinkExtractor

class SneakersSpider(scrapy.Spider):
    name = "sneakers"
    allowed_domains = ["lesitedelasneaker.com"]
    start_urls = ["https://www.lesitedelasneaker.com/release-dates/?filter=latest_drops",]

    def parse(self, response):
        data = response.css("a.c-uprelease")

        for line in data:
            item={
                "label" : line.css("h3.c-uprelease__title::text").get(),
                "image" : line.css(".c-uprelease__picture img").xpath('@data-lazy-src').get(),
                "description" : line.css("p.item-date::text").get(),
                "price" : line.css("p.item-price::text").get()
            }
            yield SneakersItem(**item)
