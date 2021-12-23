'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">schoolsolutions documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' : 'data-target="#xs-controllers-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' :
                                            'id="xs-controllers-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' : 'data-target="#xs-injectables-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' :
                                        'id="xs-injectables-links-module-AppModule-b96e285772cf84841f8a91ea4db7650c661c18547a2425579378a2c98f761bc0fab0717b6ad3312c07b9eef0219d06af809988b2462d99174477dfc9e57fcf67"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3e3f47980613318cdcfa797f516b6bac6f5371d4c90424a3ede3e81146d9325b265c675290e1742e6898200d02666ccd8cc3e72a3a4922bdca36c6daa93e2497-1"' : 'data-target="#xs-components-links-module-AppModule-3e3f47980613318cdcfa797f516b6bac6f5371d4c90424a3ede3e81146d9325b265c675290e1742e6898200d02666ccd8cc3e72a3a4922bdca36c6daa93e2497-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3e3f47980613318cdcfa797f516b6bac6f5371d4c90424a3ede3e81146d9325b265c675290e1742e6898200d02666ccd8cc3e72a3a4922bdca36c6daa93e2497-1"' :
                                            'id="xs-components-links-module-AppModule-3e3f47980613318cdcfa797f516b6bac6f5371d4c90424a3ede3e81146d9325b265c675290e1742e6898200d02666ccd8cc3e72a3a4922bdca36c6daa93e2497-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' : 'data-target="#xs-controllers-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' :
                                            'id="xs-controllers-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' : 'data-target="#xs-injectables-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' :
                                        'id="xs-injectables-links-module-CatsModule-1f5d186726a13cefb2cd182ef08641d0f9800b54bfb6ef4bfcd22e2b8ec266ebc7f141fd6ba2292e44abacde3cb9c3d226be2be5bf50a1abb1d366589fb39d05"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' : 'data-target="#xs-controllers-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' :
                                            'id="xs-controllers-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' }>
                                            <li class="link">
                                                <a href="controllers/ConfigController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' : 'data-target="#xs-injectables-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' :
                                        'id="xs-injectables-links-module-ConfigModule-3f2b9d4e609b175b9a8d57ad175ad35ad58786b892abd3372e01c6b5a74a3ee65453b4ac297f8f26983b739b6fe1d421b3830a1ed153b6e1b684668f8463b287"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link" >StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' : 'data-target="#xs-controllers-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' :
                                            'id="xs-controllers-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' }>
                                            <li class="link">
                                                <a href="controllers/StudentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' : 'data-target="#xs-injectables-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' :
                                        'id="xs-injectables-links-module-StudentsModule-6bc4260ee2717e5eaac6500ca18d0d23c8067e37e59f1a003ac60819421939fe36ca782baa059b19ddbb25eea8081846596d7ce77cfd23e4ef998aaa6d10295b"' }>
                                        <li class="link">
                                            <a href="injectables/StudentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' : 'data-target="#xs-controllers-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' :
                                            'id="xs-controllers-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' : 'data-target="#xs-injectables-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' :
                                        'id="xs-injectables-links-module-UsersModule-d0c412c3f9f0047c0149113b793a3a2807fdd374111f20218f35c571165ebafbc3b88782df3558dd2c9c3af1f1c0d59a92a5e7948feeaae0d9e7c6a9a968a675"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CatsController.html" data-type="entity-link" >CatsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ConfigController.html" data-type="entity-link" >ConfigController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StudentsController.html" data-type="entity-link" >StudentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cat.html" data-type="entity-link" >Cat</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigDto.html" data-type="entity-link" >ConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigEntity.html" data-type="entity-link" >ConfigEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStudentDto.html" data-type="entity-link" >CreateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Student.html" data-type="entity-link" >Student</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentDto.html" data-type="entity-link" >UpdateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatsService.html" data-type="entity-link" >CatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsService.html" data-type="entity-link" >StudentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});