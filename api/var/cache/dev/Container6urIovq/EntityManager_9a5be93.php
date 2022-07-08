<?php

namespace Container6urIovq;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder9c871 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer1adbc = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesabac8 = [
        
    ];

    public function getConnection()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getConnection', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getMetadataFactory', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getExpressionBuilder', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'beginTransaction', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getCache', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getCache();
    }

    public function transactional($func)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'transactional', array('func' => $func), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'wrapInTransaction', array('func' => $func), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'commit', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->commit();
    }

    public function rollback()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'rollback', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getClassMetadata', array('className' => $className), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'createQuery', array('dql' => $dql), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'createNamedQuery', array('name' => $name), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'createQueryBuilder', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'flush', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'clear', array('entityName' => $entityName), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->clear($entityName);
    }

    public function close()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'close', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->close();
    }

    public function persist($entity)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'persist', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'remove', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'refresh', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'detach', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'merge', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getRepository', array('entityName' => $entityName), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'contains', array('entity' => $entity), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getEventManager', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getConfiguration', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'isOpen', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getUnitOfWork', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getProxyFactory', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'initializeObject', array('obj' => $obj), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'getFilters', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'isFiltersStateClean', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'hasFilters', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return $this->valueHolder9c871->hasFilters();
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

        $instance->initializer1adbc = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder9c871) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder9c871 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder9c871->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, '__get', ['name' => $name], $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        if (isset(self::$publicPropertiesabac8[$name])) {
            return $this->valueHolder9c871->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9c871;

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

        $targetObject = $this->valueHolder9c871;
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
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9c871;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder9c871;
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
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, '__isset', array('name' => $name), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9c871;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder9c871;
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
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, '__unset', array('name' => $name), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9c871;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder9c871;
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
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, '__clone', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        $this->valueHolder9c871 = clone $this->valueHolder9c871;
    }

    public function __sleep()
    {
        $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, '__sleep', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;

        return array('valueHolder9c871');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer1adbc = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer1adbc;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer1adbc && ($this->initializer1adbc->__invoke($valueHolder9c871, $this, 'initializeProxy', array(), $this->initializer1adbc) || 1) && $this->valueHolder9c871 = $valueHolder9c871;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder9c871;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder9c871;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
