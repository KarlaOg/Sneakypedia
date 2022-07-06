import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'api_django.settings'
# If you you use django outside of manage.py context, you 
# need to explicitly setup the django
import django
django.setup()
from shutil import which


SPIDER_MODULES = ['scrapper.spiders']
NEWSPIDER_MODULE = 'scrapper.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# replace this with your actual user-agent value
USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# update the pipelines to this
ITEM_PIPELINES = {
   'scrapper.pipelines.SneakerPricePipeline': 200,
   'scrapper.pipelines.ScraperPipeline': 400,
}

# SELENIUM_DRIVER_NAME = 'chrome'
# SELENIUM_COMMAND_EXECUTOR = 'http://localhost:4444/wd/hub'
# SELENIUM_DRIVER_ARGUMENTS=['-headless']  # '--headless' if using chrome instead of firefox