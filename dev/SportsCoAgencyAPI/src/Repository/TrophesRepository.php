<?php

namespace App\Repository;

use App\Entity\Trophes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Trophes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Trophes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Trophes[]    findAll()
 * @method Trophes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrophesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Trophes::class);
    }

    // /**
    //  * @return Trophes[] Returns an array of Trophes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Trophes
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
