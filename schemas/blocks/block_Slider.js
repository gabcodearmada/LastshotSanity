export default {
    title: 'Block Slider',
    name: 'Slider',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Timer',
            name: 'timer',
            type: 'number'
        },
        {
            title: 'Select Slides',
            name: 'slides',
            type: 'array',
            of: [
                {
                    title: 'Slide',
                    type: 'reference',
                    to: [
                        {type: 'Slide'}
                    ]
                }
            ]
        }
    ],
    initialValue: {
        timer: 6
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
