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
                    <a href="index.html" data-type="index-link">client documentation</a>
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
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddressModule-439b48266dac2db7cb6062216b12daa89b1bae50c13bc15e5c80b28de9653035721ab171cfd38b5257a1543d73022cd334bbc86c524aab7cc4cf7a3eaf7b8059"' : 'data-target="#xs-components-links-module-AddressModule-439b48266dac2db7cb6062216b12daa89b1bae50c13bc15e5c80b28de9653035721ab171cfd38b5257a1543d73022cd334bbc86c524aab7cc4cf7a3eaf7b8059"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddressModule-439b48266dac2db7cb6062216b12daa89b1bae50c13bc15e5c80b28de9653035721ab171cfd38b5257a1543d73022cd334bbc86c524aab7cc4cf7a3eaf7b8059"' :
                                            'id="xs-components-links-module-AddressModule-439b48266dac2db7cb6062216b12daa89b1bae50c13bc15e5c80b28de9653035721ab171cfd38b5257a1543d73022cd334bbc86c524aab7cc4cf7a3eaf7b8059"' }>
                                            <li class="link">
                                                <a href="components/AddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddressFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressFormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddresslistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddresslistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddresstableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddresstableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddressRoutingModule.html" data-type="entity-link" >AddressRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-650657ecbcdaa8c1b3bdd588f978d9927fc1921f3db52fb91d6eb82177b316a88f0ab3749ed0ed16e3d0ca3af770594b35fa47e351f1f4bc2ccab46a20a1bf6a"' : 'data-target="#xs-components-links-module-AppModule-650657ecbcdaa8c1b3bdd588f978d9927fc1921f3db52fb91d6eb82177b316a88f0ab3749ed0ed16e3d0ca3af770594b35fa47e351f1f4bc2ccab46a20a1bf6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-650657ecbcdaa8c1b3bdd588f978d9927fc1921f3db52fb91d6eb82177b316a88f0ab3749ed0ed16e3d0ca3af770594b35fa47e351f1f4bc2ccab46a20a1bf6a"' :
                                            'id="xs-components-links-module-AppModule-650657ecbcdaa8c1b3bdd588f978d9927fc1921f3db52fb91d6eb82177b316a88f0ab3749ed0ed16e3d0ca3af770594b35fa47e351f1f4bc2ccab46a20a1bf6a"' }>
                                            <li class="link">
                                                <a href="components/AccessDeniedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessDeniedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-81f9421d0e33c7abc756b8fad53d8ca490b5a7116178fa664a7a14f9f2f83437623f08f8cbca5fa59c7837914c0fff78ba6effede80f7a2df0a9836756a9bef6"' : 'data-target="#xs-components-links-module-AuthModule-81f9421d0e33c7abc756b8fad53d8ca490b5a7116178fa664a7a14f9f2f83437623f08f8cbca5fa59c7837914c0fff78ba6effede80f7a2df0a9836756a9bef6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-81f9421d0e33c7abc756b8fad53d8ca490b5a7116178fa664a7a14f9f2f83437623f08f8cbca5fa59c7837914c0fff78ba6effede80f7a2df0a9836756a9bef6"' :
                                            'id="xs-components-links-module-AuthModule-81f9421d0e33c7abc756b8fad53d8ca490b5a7116178fa664a7a14f9f2f83437623f08f8cbca5fa59c7837914c0fff78ba6effede80f7a2df0a9836756a9bef6"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BusRouteModule.html" data-type="entity-link" >BusRouteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BusRouteModule-767481f94d07bb1bf166aaaa6984b37b8879b0e812ca27e47489a425a797e79e5a92a15598b9e083530340846196a83003a55c229399da64989a42a4e842d4fd"' : 'data-target="#xs-components-links-module-BusRouteModule-767481f94d07bb1bf166aaaa6984b37b8879b0e812ca27e47489a425a797e79e5a92a15598b9e083530340846196a83003a55c229399da64989a42a4e842d4fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusRouteModule-767481f94d07bb1bf166aaaa6984b37b8879b0e812ca27e47489a425a797e79e5a92a15598b9e083530340846196a83003a55c229399da64989a42a4e842d4fd"' :
                                            'id="xs-components-links-module-BusRouteModule-767481f94d07bb1bf166aaaa6984b37b8879b0e812ca27e47489a425a797e79e5a92a15598b9e083530340846196a83003a55c229399da64989a42a4e842d4fd"' }>
                                            <li class="link">
                                                <a href="components/BusRouteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusRouteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusRouteformsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusRouteformsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusRoutelistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusRoutelistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BusRoutetableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusRoutetableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusRouteRoutingModule.html" data-type="entity-link" >BusRouteRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-200df8012ac3a147ccd823757c585544f500d04da6e4f71a37baf86708ff79b1b26eedcedbecd4c85a3b6739ecfd97ec60aa90eddab534a6c9281dcdee93e9a0"' : 'data-target="#xs-components-links-module-DashboardModule-200df8012ac3a147ccd823757c585544f500d04da6e4f71a37baf86708ff79b1b26eedcedbecd4c85a3b6739ecfd97ec60aa90eddab534a6c9281dcdee93e9a0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-200df8012ac3a147ccd823757c585544f500d04da6e4f71a37baf86708ff79b1b26eedcedbecd4c85a3b6739ecfd97ec60aa90eddab534a6c9281dcdee93e9a0"' :
                                            'id="xs-components-links-module-DashboardModule-200df8012ac3a147ccd823757c585544f500d04da6e4f71a37baf86708ff79b1b26eedcedbecd4c85a3b6739ecfd97ec60aa90eddab534a6c9281dcdee93e9a0"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeesModule.html" data-type="entity-link" >FeesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeesModule-ffcc04321909c8a75348e5c1afb5326d0ce5f7c96a60a110762f89b232cb3b34d49b204cb27f16a610ed2fbb6553160bbbe195cb495bc54ae238df84fd3b0011"' : 'data-target="#xs-components-links-module-FeesModule-ffcc04321909c8a75348e5c1afb5326d0ce5f7c96a60a110762f89b232cb3b34d49b204cb27f16a610ed2fbb6553160bbbe195cb495bc54ae238df84fd3b0011"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeesModule-ffcc04321909c8a75348e5c1afb5326d0ce5f7c96a60a110762f89b232cb3b34d49b204cb27f16a610ed2fbb6553160bbbe195cb495bc54ae238df84fd3b0011"' :
                                            'id="xs-components-links-module-FeesModule-ffcc04321909c8a75348e5c1afb5326d0ce5f7c96a60a110762f89b232cb3b34d49b204cb27f16a610ed2fbb6553160bbbe195cb495bc54ae238df84fd3b0011"' }>
                                            <li class="link">
                                                <a href="components/FeesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeesformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeesformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeeslistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeeslistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeestableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeestableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeesRoutingModule.html" data-type="entity-link" >FeesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MatCustomTableModule.html" data-type="entity-link" >MatCustomTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' : 'data-target="#xs-components-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' :
                                            'id="xs-components-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' }>
                                            <li class="link">
                                                <a href="components/ActionButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatCustomTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatCustomTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' : 'data-target="#xs-directives-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' :
                                        'id="xs-directives-links-module-MatCustomTableModule-bb0eec1419a47caa815620ff3c070aa495c1bba92649446ce086aefba6761b8eb4942c4c5556a426b7a0d8d6df11e76be41d81ef4cf47635a1928143a4ad3a30"' }>
                                        <li class="link">
                                            <a href="directives/TableActionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableActionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParentsModule.html" data-type="entity-link" >ParentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParentsModule-d8c83f033d5ad1e3dd980675c6e1e7544e9369dfb41227d05fffa8d633083f2962ee6e7657af09071845edfc29c83f78053019e7b8ec70f11a10e667d88ec1c2"' : 'data-target="#xs-components-links-module-ParentsModule-d8c83f033d5ad1e3dd980675c6e1e7544e9369dfb41227d05fffa8d633083f2962ee6e7657af09071845edfc29c83f78053019e7b8ec70f11a10e667d88ec1c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParentsModule-d8c83f033d5ad1e3dd980675c6e1e7544e9369dfb41227d05fffa8d633083f2962ee6e7657af09071845edfc29c83f78053019e7b8ec70f11a10e667d88ec1c2"' :
                                            'id="xs-components-links-module-ParentsModule-d8c83f033d5ad1e3dd980675c6e1e7544e9369dfb41227d05fffa8d633083f2962ee6e7657af09071845edfc29c83f78053019e7b8ec70f11a10e667d88ec1c2"' }>
                                            <li class="link">
                                                <a href="components/ParentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParentsFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentsFormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParentsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParentsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentsTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParentsRoutingModule.html" data-type="entity-link" >ParentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-ccc733675a75b059b7455356c338b5f8426029a685c0deb383bfc5757a1b9175206d2fb5c1a0b8a0e72f1f486958aa1c174317c130d247cab37061724d3ee56d"' : 'data-target="#xs-components-links-module-SettingsModule-ccc733675a75b059b7455356c338b5f8426029a685c0deb383bfc5757a1b9175206d2fb5c1a0b8a0e72f1f486958aa1c174317c130d247cab37061724d3ee56d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-ccc733675a75b059b7455356c338b5f8426029a685c0deb383bfc5757a1b9175206d2fb5c1a0b8a0e72f1f486958aa1c174317c130d247cab37061724d3ee56d"' :
                                            'id="xs-components-links-module-SettingsModule-ccc733675a75b059b7455356c338b5f8426029a685c0deb383bfc5757a1b9175206d2fb5c1a0b8a0e72f1f486958aa1c174317c130d247cab37061724d3ee56d"' }>
                                            <li class="link">
                                                <a href="components/AccessCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesAssignComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesAssignComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesRulesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesRulesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondarySidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondarySidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-afa0cec2f5274729d86c602e75c4a10f6d40fd1f88ee1fed11a161b729527d8a53659d19061b98d2ac349ccd45c99c0f02603005907b7bd1c17da09e256c9aec"' : 'data-target="#xs-directives-links-module-SharedModule-afa0cec2f5274729d86c602e75c4a10f6d40fd1f88ee1fed11a161b729527d8a53659d19061b98d2ac349ccd45c99c0f02603005907b7bd1c17da09e256c9aec"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-afa0cec2f5274729d86c602e75c4a10f6d40fd1f88ee1fed11a161b729527d8a53659d19061b98d2ac349ccd45c99c0f02603005907b7bd1c17da09e256c9aec"' :
                                        'id="xs-directives-links-module-SharedModule-afa0cec2f5274729d86c602e75c4a10f6d40fd1f88ee1fed11a161b729527d8a53659d19061b98d2ac349ccd45c99c0f02603005907b7bd1c17da09e256c9aec"' }>
                                        <li class="link">
                                            <a href="directives/AppLoadingDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppLoadingDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DebounceDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DebounceDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RoleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SibilingsModule.html" data-type="entity-link" >SibilingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SibilingsModule-88496364376e1452141d562c847e042ee16475efb2c1d79d746f22065c4cccdfe22c5e1b0244c5d21485858baeab741b7254b1b99c1fb950b7c4aa28e3d22d2d"' : 'data-target="#xs-components-links-module-SibilingsModule-88496364376e1452141d562c847e042ee16475efb2c1d79d746f22065c4cccdfe22c5e1b0244c5d21485858baeab741b7254b1b99c1fb950b7c4aa28e3d22d2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SibilingsModule-88496364376e1452141d562c847e042ee16475efb2c1d79d746f22065c4cccdfe22c5e1b0244c5d21485858baeab741b7254b1b99c1fb950b7c4aa28e3d22d2d"' :
                                            'id="xs-components-links-module-SibilingsModule-88496364376e1452141d562c847e042ee16475efb2c1d79d746f22065c4cccdfe22c5e1b0244c5d21485858baeab741b7254b1b99c1fb950b7c4aa28e3d22d2d"' }>
                                            <li class="link">
                                                <a href="components/BottomsheetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BottomsheetsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SibilingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SibilingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SibilingsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SibilingsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SibilingsformsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SibilingsformsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SibilingstableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SibilingstableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SibilingsRoutingModule.html" data-type="entity-link" >SibilingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StoreModule.html" data-type="entity-link" >StoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StudentdetailsModule.html" data-type="entity-link" >StudentdetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' : 'data-target="#xs-components-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' :
                                            'id="xs-components-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' }>
                                            <li class="link">
                                                <a href="components/StudentFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentFormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentdetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentdetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' : 'data-target="#xs-pipes-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' :
                                            'id="xs-pipes-links-module-StudentdetailsModule-cfec9cf92e69798012653c418efb1e53cc219e39e2257237573d8d5d34d3586663fb37cf150d395f57bf6cc4f06500b3c64b3bece2b49172b2d703ee06b47213"' }>
                                            <li class="link">
                                                <a href="pipes/BottomsheetPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BottomsheetPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentdetailsRoutingModule.html" data-type="entity-link" >StudentdetailsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetModule.html" data-type="entity-link" >WidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' : 'data-target="#xs-components-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' :
                                            'id="xs-components-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' }>
                                            <li class="link">
                                                <a href="components/AppMatTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppMatTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuickNavigationMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuickNavigationMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RootLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RootLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' : 'data-target="#xs-pipes-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' :
                                            'id="xs-pipes-links-module-WidgetModule-0c5e651d5d3dfe571dffab1fa6c406cbc627cc9be6d460b00ca374fd3ca9021b6edf8d21e8a83d759213181292bd5cf95ed7c9179fdd2df2fbb0367e80d73c98"' }>
                                            <li class="link">
                                                <a href="pipes/TabPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BottomsheetsComponent-1.html" data-type="entity-link" >BottomsheetsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent-1.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentTableComponent.html" data-type="entity-link" >StudentTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentTableComponent-1.html" data-type="entity-link" >StudentTableComponent</a>
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
                                <a href="classes/Datasource.html" data-type="entity-link" >Datasource</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReduxExtension.html" data-type="entity-link" >ReduxExtension</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentDetailsCoreLogicFacade.html" data-type="entity-link" >StudentDetailsCoreLogicFacade</a>
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
                                    <a href="injectables/AddressApiService.html" data-type="entity-link" >AddressApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthapiService.html" data-type="entity-link" >AuthapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutoUnsubscribe.html" data-type="entity-link" >AutoUnsubscribe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreakPointService.html" data-type="entity-link" >BreakPointService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityStore.html" data-type="entity-link" >EntityStore</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeesapiService.html" data-type="entity-link" >FeesapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalstorageService.html" data-type="entity-link" >LocalstorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParentsapiService.html" data-type="entity-link" >ParentsapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Selector.html" data-type="entity-link" >Selector</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link" >SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiblingapiService.html" data-type="entity-link" >SiblingapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentapiService.html" data-type="entity-link" >StudentapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentDetailsFacade.html" data-type="entity-link" >StudentDetailsFacade</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/CachingInterceptorService.html" data-type="entity-link" >CachingInterceptorService</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpErrorFilter.html" data-type="entity-link" >HttpErrorFilter</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpFilter.html" data-type="entity-link" >HttpFilter</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IsAuthenticatedGuard.html" data-type="entity-link" >IsAuthenticatedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SiblingResolver.html" data-type="entity-link" >SiblingResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/SiblingStudentBasedResolver.html" data-type="entity-link" >SiblingStudentBasedResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentdetailsResolver.html" data-type="entity-link" >StudentdetailsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentFormBasedResolver.html" data-type="entity-link" >StudentFormBasedResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Access.html" data-type="entity-link" >Access</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Action.html" data-type="entity-link" >Action</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenericData.html" data-type="entity-link" >GenericData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAccess.html" data-type="entity-link" >IAccess</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAdmissionNumber.html" data-type="entity-link" >IAdmissionNumber</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateFees.html" data-type="entity-link" >ICreateFees</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogin.html" data-type="entity-link" >ILogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavTabMenu.html" data-type="entity-link" >INavTabMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IParents.html" data-type="entity-link" >IParents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IParentsFormGroup.html" data-type="entity-link" >IParentsFormGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShowTableOnBottomSheet.html" data-type="entity-link" >IShowTableOnBottomSheet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShowTableOnBottomSheet-1.html" data-type="entity-link" >IShowTableOnBottomSheet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISibilingFormGroup.html" data-type="entity-link" >ISibilingFormGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISiblings.html" data-type="entity-link" >ISiblings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudentDetails.html" data-type="entity-link" >IStudentDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudentDetailsCoreLogicFacade.html" data-type="entity-link" >IStudentDetailsCoreLogicFacade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudentSearchModel.html" data-type="entity-link" >IStudentSearchModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToolBarMenu.html" data-type="entity-link" >IToolBarMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateFees.html" data-type="entity-link" >IUpdateFees</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/labelKeyconf.html" data-type="entity-link" >labelKeyconf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListConfig.html" data-type="entity-link" >ListConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link" >Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageMetaData.html" data-type="entity-link" >PageMetaData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SecondaryCardConfig.html" data-type="entity-link" >SecondaryCardConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudentDetails.html" data-type="entity-link" >StudentDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableButtonAction.html" data-type="entity-link" >TableButtonAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableConfig.html" data-type="entity-link" >TableConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Util.html" data-type="entity-link" >Util</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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