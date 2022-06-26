<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FavoriteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FavoriteRepository::class)]
#[ApiResource()]
class Favorite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;
    
    #[Groups(["read:Post"])]
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'favorites')]
    private $userId;

    #[ORM\Column(type: 'string', length: 255)]
    private $idSneaker;

    public function __construct()
    {
        $this->userId = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUserId(): Collection
    {
        return $this->userId;
    }

    public function addUserId(User $userId): self
    {
        if (!$this->userId->contains($userId)) {
            $this->userId[] = $userId;
        }

        return $this;
    }

    public function removeUserId(User $userId): self
    {
        $this->userId->removeElement($userId);

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
