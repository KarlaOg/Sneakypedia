<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InventoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InventoryRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['inventory:read']],
    denormalizationContext: ['groups' => ['inventory:write']],
    collectionOperations: [
        "get",
        "post",
    ], 
    itemOperations: [
        "get",
        "delete" => ["security" => "object.getIdUser == user"],
    ],
)]
class Inventory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Groups(["inventory:write", "inventory:read"])]
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'inventories')]
    private $idUser;

    #[Groups(["inventory:write", "inventory:read",  "user:read"])]
    #[ORM\Column(type: 'string', length: 255)]
    private $idSneaker;

    public function __construct()
    {
        $this->idUser = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, User>
     */
    public function getIdUser(): Collection
    {
        return $this->idUser;
    }

    public function addIdUser(User $idUser): self
    {
        if (!$this->idUser->contains($idUser)) {
            $this->idUser[] = $idUser;
        }

        return $this;
    }

    public function removeIdUser(User $idUser): self
    {
        $this->idUser->removeElement($idUser);

        return $this;
    }

    public function getIdSneaker(): ?string
    {
        return $this->idSneaker;
    }

    public function setIdSneaker(string $idSneaker): self
    {
        $this->idSneaker = $idSneaker;

        return $this;
    }
}
