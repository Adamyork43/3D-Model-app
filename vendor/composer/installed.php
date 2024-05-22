<?php return array(
    'root' => array(
        'name' => '__root__',
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'reference' => null,
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        '__root__' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'reference' => null,
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'mouf/nodejs-installer' => array(
            'pretty_version' => 'v1.0.14',
            'version' => '1.0.14.0',
            'reference' => '8b26f6893698f057b2c97b6bbf1a0cd12c2343e9',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/../mouf/nodejs-installer',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'twbs/bootstrap' => array(
            'pretty_version' => 'v5.3.3',
            'version' => '5.3.3.0',
            'reference' => '6e1f75f420f68e1d52733b8e407fc7c3766c9dba',
            'type' => 'library',
            'install_path' => __DIR__ . '/../twbs/bootstrap',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'twitter/bootstrap' => array(
            'dev_requirement' => true,
            'replaced' => array(
                0 => 'v5.3.3',
            ),
        ),
    ),
);
