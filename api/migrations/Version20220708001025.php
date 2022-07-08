<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220708001025 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE favorite_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE inventory_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE favorite (id INT NOT NULL, id_sneaker VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE favorite_user (favorite_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY(favorite_id, user_id))');
        $this->addSql('CREATE INDEX IDX_6395CF76AA17481D ON favorite_user (favorite_id)');
        $this->addSql('CREATE INDEX IDX_6395CF76A76ED395 ON favorite_user (user_id)');
        $this->addSql('CREATE TABLE inventory (id INT NOT NULL, id_sneaker VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE inventory_user (inventory_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY(inventory_id, user_id))');
        $this->addSql('CREATE INDEX IDX_C73519679EEA759 ON inventory_user (inventory_id)');
        $this->addSql('CREATE INDEX IDX_C7351967A76ED395 ON inventory_user (user_id)');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('ALTER TABLE favorite_user ADD CONSTRAINT FK_6395CF76AA17481D FOREIGN KEY (favorite_id) REFERENCES favorite (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE favorite_user ADD CONSTRAINT FK_6395CF76A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE inventory_user ADD CONSTRAINT FK_C73519679EEA759 FOREIGN KEY (inventory_id) REFERENCES inventory (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE inventory_user ADD CONSTRAINT FK_C7351967A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE favorite_user DROP CONSTRAINT FK_6395CF76AA17481D');
        $this->addSql('ALTER TABLE inventory_user DROP CONSTRAINT FK_C73519679EEA759');
        $this->addSql('ALTER TABLE favorite_user DROP CONSTRAINT FK_6395CF76A76ED395');
        $this->addSql('ALTER TABLE inventory_user DROP CONSTRAINT FK_C7351967A76ED395');
        $this->addSql('DROP SEQUENCE favorite_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE inventory_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('DROP TABLE favorite');
        $this->addSql('DROP TABLE favorite_user');
        $this->addSql('DROP TABLE inventory');
        $this->addSql('DROP TABLE inventory_user');
        $this->addSql('DROP TABLE "user"');
    }
}
