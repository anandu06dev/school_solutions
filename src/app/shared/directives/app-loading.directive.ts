import {
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core'
import { LoadingComponent } from '@widgets/components/loading/loading.component'

@Directive({
    selector: '[appLoading]',
})
export class AppLoadingDirective {
    loadingFactory: ComponentFactory<LoadingComponent>
    loadingComponent!: ComponentRef<LoadingComponent>

    _loading: boolean = false

    @Input()
    set appLoading(value: boolean | null | undefined) {
        this.viewContainerRef.clear()
        if (value === true) {
            this.loadingComponent = this.viewContainerRef.createComponent(
                this.loadingFactory
            );
        }

        if (!value) {
            this.viewContainerRef.createEmbeddedView(this.templateRef)
        }
    }

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.loadingFactory =
            this.componentFactoryResolver.resolveComponentFactory(
                LoadingComponent
            )
    }
}
