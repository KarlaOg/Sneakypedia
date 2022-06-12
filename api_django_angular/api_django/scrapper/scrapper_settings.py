import sys
sys.path.append('../../../api_django_angular/api_django')
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'api_django.settings'
# If you you use django outside of manage.py context, you 
# need to explicitly setup the django
import django
django.setup()

SPIDER_MODULES = ['api_django.scrapper.spiders']
NEWSPIDER_MODULE = 'api_django.scrapper.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# replace this with your actual user-agent value
USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# update the pipelines to this
ITEM_PIPELINES = {
   'api_django.scrapper.pipelines.SneakerPricePipeline': 200,
   'api_django.scrapper.pipelines.ScraperPipeline': 400,
}