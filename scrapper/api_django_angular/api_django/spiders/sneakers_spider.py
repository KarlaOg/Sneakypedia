from scrapy.spiders import CrawlSpider
from scrapy.spiders import Rule
from scrapy.linkextractors import LinkExtractor
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst
from api_django.items import ScrapperItem


class SneakersSpider(CrawlSpider):
    name = "sneakers"
    # allowed_domains = ["realestatedatabase.net"]
    start_urls = [
        "https://www.lesitedelasneaker.com/release-dates/?filter=latest_drops",
    ]

    rules = (
        Rule(
            LinkExtractor(allow=("SneakersDetails\.aspx")),
            callback="parse_sneaker",
            follow=True,
        ),
    )

    def parse_sneaker(self, response):
        sneaker_loader = ItemLoader(item=ScraperItem(), response=response)
        sneaker_loader.default_output_processor = TakeFirst()

        sneaker_loader.add_css(
            "label", "h3.c-uprelease__title::text"
        )
        sneaker_loader.add_css(
            "image", ".c-uprelease__picture img::text"
        )
        sneaker_loader.add_css(
            "description", "p.item-date::text"
        )
        sneaker_loader.add_css(
            "price", "p.item-price::text"
        )
       
        yield sneaker_loader.load_item()