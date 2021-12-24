import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
        query(
            ':enter',
            [
                style({ opacity: 0 }),
                stagger(
                    '80ms',
                    animate('800ms ease-out', style({ opacity: 1 }))
                ),
            ],
            { optional: true }
        ),
        query(':leave', animate('400ms', style({ opacity: 0 })), {
            optional: true,
        }),
    ]),
])
