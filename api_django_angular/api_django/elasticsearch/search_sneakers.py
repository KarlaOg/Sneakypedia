
from .. import models
from elasticsearch_dsl import connections
from elasticsearch_dsl import Document, Text
from elasticsearch.helpers import bulk
from elasticsearch import Elasticsearch

connections.create_connection(hosts=['https://localhost:9200'], http_auth="elastic:yCQ+1LA-j8Rt39WJNHnW", timeout=20)


def bulk_indexing():
    SneakerIndex.init()
    es = Elasticsearch()
    bulk(client=es, actions=(b.indexing() for b in models.SneakerModel.objects.all().iterator()))

class SneakerIndex(Document):
    label = Text()
    release_date = Text()
    description = Text()
    price = Text()

    class Meta:
        index = 'sneakers-index'