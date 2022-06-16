<?php

namespace ContainerXeo1Dwn;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUserMailSubscriberService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'App\EventSubscriber\UserMailSubscriber' shared autowired service.
     *
     * @return \App\EventSubscriber\UserMailSubscriber
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/src/EventSubscriber/UserMailSubscriber.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/mailer/MailerInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/mailer/Mailer.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/mailer/Transport/TransportInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/mailer/Transport/Transports.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/mailer/Transport.php';

        return $container->privates['App\\EventSubscriber\\UserMailSubscriber'] = new \App\EventSubscriber\UserMailSubscriber(new \Symfony\Component\Mailer\Mailer((new \Symfony\Component\Mailer\Transport(new RewindableGenerator(function () use ($container) {
            yield 0 => $container->load('getMailer_TransportFactory_GmailService');
            yield 1 => $container->load('getMailer_TransportFactory_MailgunService');
            yield 2 => $container->load('getMailer_TransportFactory_SendgridService');
            yield 3 => $container->load('getMailer_TransportFactory_NullService');
            yield 4 => $container->load('getMailer_TransportFactory_SendmailService');
            yield 5 => $container->load('getMailer_TransportFactory_NativeService');
            yield 6 => $container->load('getMailer_TransportFactory_SmtpService');
        }, 7)))->fromStrings(['main' => $container->getEnv('MAILER_DSN')]), NULL, ($container->services['event_dispatcher'] ?? $container->getEventDispatcherService())));
    }
}
