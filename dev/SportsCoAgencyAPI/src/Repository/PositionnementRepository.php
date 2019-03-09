<?php

namespace App\Repository;

use App\Entity\Positionnement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Positionnement|null find($id, $lockMode = null, $lockVersion = null)
 * @method Positionnement|null findOneBy(array $criteria, array $orderBy = null)
 * @method Positionnement[]    findAll()
 * @method Positionnement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PositionnementRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Positionnement::class);
    }

    // /**
    //  * @return Positionnement[] Returns an array of Positionnement objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Positionnement
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
