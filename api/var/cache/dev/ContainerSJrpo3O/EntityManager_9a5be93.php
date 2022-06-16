<?php

namespace ContainerSJrpo3O;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderb0d9b = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerbf8a5 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties7532a = [
        
    ];

    public function getConnection()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getConnection', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getMetadataFactory', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getExpressionBuilder', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'beginTransaction', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getCache', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getCache();
    }

    public function transactional($func)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'transactional', array('func' => $func), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'wrapInTransaction', array('func' => $func), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'commit', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->commit();
    }

    public function rollback()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'rollback', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getClassMetadata', array('className' => $className), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'createQuery', array('dql' => $dql), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'createNamedQuery', array('name' => $name), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'createQueryBuilder', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'flush', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'clear', array('entityName' => $entityName), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->clear($entityName);
    }

    public function close()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'close', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->close();
    }

    public function persist($entity)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'persist', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'remove', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'refresh', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'detach', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'merge', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getRepository', array('entityName' => $entityName), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'contains', array('entity' => $entity), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getEventManager', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getConfiguration', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'isOpen', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getUnitOfWork', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getProxyFactory', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'initializeObject', array('obj' => $obj), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'getFilters', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'isFiltersStateClean', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'hasFilters', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return $this->valueHolderb0d9b->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerbf8a5 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderb0d9b) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderb0d9b = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderb0d9b->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, '__get', ['name' => $name], $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        if (isset(self::$publicProperties7532a[$name])) {
            return $this->valueHolderb0d9b->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb0d9b;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderb0d9b;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb0d9b;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderb0d9b;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, '__isset', array('name' => $name), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb0d9b;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderb0d9b;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, '__unset', array('name' => $name), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb0d9b;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderb0d9b;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, '__clone', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        $this->valueHolderb0d9b = clone $this->valueHolderb0d9b;
    }

    public function __sleep()
    {
        $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, '__sleep', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;

        return array('valueHolderb0d9b');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerbf8a5 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerbf8a5;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerbf8a5 && ($this->initializerbf8a5->__invoke($valueHolderb0d9b, $this, 'initializeProxy', array(), $this->initializerbf8a5) || 1) && $this->valueHolderb0d9b = $valueHolderb0d9b;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderb0d9b;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderb0d9b;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
