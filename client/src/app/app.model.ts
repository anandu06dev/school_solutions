import { IToolBarMenu } from "@utils/interfaces/toolbarmenu.interface";

export const menu:IToolBarMenu[] = [
    {
        label: 'Dashboard',
        icon: 'view_module',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: false,
        url:'/dashboard'
    },
    {
        label: 'Students',
        icon: 'person',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: false,
        url:'/students'

    },
    {
        label: 'Fees',
        icon: 'assessment',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: false,
        url:'/fees'

    },
    {
        label: 'Parents',
        icon: 'wc',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: false,
        url:'/parents'

    },
    {
        label: 'Siblings',
        icon: 'people',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: false,
        url:'/siblings'

    },
]