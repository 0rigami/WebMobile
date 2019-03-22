<?php

namespace App\Controller;

use App\Entity\Club;
use App\Entity\User;
use App\Form\RegistrationType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ClubController extends AbstractController
{


    /**
     * @Route("/clubs/get", name="get_club", methods={"GET"})
     */
    public function index(Request $request)
    {


        $entityManager = $this->getDoctrine()->getManager();
        $clubs = $entityManager->getRepository(Club::class)->findAll();

        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $data = $serializer->serialize($clubs, 'json');

        $response = new Response($data);

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }




}
