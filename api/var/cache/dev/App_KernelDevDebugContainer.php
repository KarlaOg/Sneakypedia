<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container6urIovq\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container6urIovq/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container6urIovq.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container6urIovq\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \Container6urIovq\App_KernelDevDebugContainer([
    'container.build_hash' => '6urIovq',
    'container.build_id' => 'e79f14b0',
    'container.build_time' => 1657239792,
], __DIR__.\DIRECTORY_SEPARATOR.'Container6urIovq');
