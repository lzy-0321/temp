# myapp/management/commands/test_neo4j.py

from django.core.management.base import BaseCommand
from neo4j import GraphDatabase
from django.conf import settings

class Command(BaseCommand):
    help = "Test Neo4j connection"

    def handle(self, *args, **kwargs):
        driver = GraphDatabase.driver(
            settings.NEO4J_URI, auth=(settings.NEO4J_USER, settings.NEO4J_PASSWORD)
        )
        try:
            with driver.session() as session:
                result = session.run("RETURN 1")
                self.stdout.write(self.style.SUCCESS(f"Neo4j connection successful: {result.single()}"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Neo4j connection error: {e}"))
        finally:
            driver.close()