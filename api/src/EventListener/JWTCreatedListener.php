<?php

// src/App/EventListener/JWTCreatedListener.php
namespace App\EventListener;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;


class JWTCreatedListener
{
  
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $user = $event->getUser();

        // merge with existing event data
        $payload = array_merge(
            $event->getData(),
            [
                'id' => $user->getId()
            ]
        );

        $event->setData($payload);
    }
}
