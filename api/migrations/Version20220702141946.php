<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220702141946 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE inventory_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE inventory (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE inventory_user (inventory_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY(inventory_id, user_id))');
        $this->addSql('CREATE INDEX IDX_C73519679EEA759 ON inventory_user (inventory_id)');
        $this->addSql('CREATE INDEX IDX_C7351967A76ED395 ON inventory_user (user_id)');
        $this->addSql('ALTER TABLE inventory_user ADD CONSTRAINT FK_C73519679EEA759 FOREIGN KEY (inventory_id) REFERENCES inventory (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE inventory_user ADD CONSTRAINT FK_C7351967A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE inventory_user DROP CONSTRAINT FK_C73519679EEA759');
        $this->addSql('DROP SEQUENCE inventory_id_seq CASCADE');
        $this->addSql('DROP TABLE inventory');
        $this->addSql('DROP TABLE inventory_user');
    }
}
