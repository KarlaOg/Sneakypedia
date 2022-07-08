from django.core.management.base import BaseCommand
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings

from scrapper import scrapper_settings as my_settings
from scrapper.spiders.sneakers_spider import SneakersSpider


class Command(BaseCommand):
    help = 'scrapping_sneaker'

    def handle(self, *args, **options):
        crawler_settings = Settings()
        crawler_settings.setmodule(my_settings)

        process = CrawlerProcess(settings=crawler_settings)

        process.crawl(SneakersSpider)
        process.start()