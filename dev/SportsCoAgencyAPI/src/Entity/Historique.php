<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HistoriqueRepository")
 */
class Historique
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $idClub;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Saison;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Division;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Pays;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdClub(): ?int
    {
        return $this->idClub;
    }

    public function setIdClub(int $idClub): self
    {
        $this->idClub = $idClub;

        return $this;
    }

    public function getSaison(): ?string
    {
        return $this->Saison;
    }

    public function setSaison(string $Saison): self
    {
        $this->Saison = $Saison;

        return $this;
    }

    public function getDivision(): ?string
    {
        return $this->Division;
    }

    public function setDivision(string $Division): self
    {
        $this->Division = $Division;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->Pays;
    }

    public function setPays(string $Pays): self
    {
        $this->Pays = $Pays;

        return $this;
    }
}
