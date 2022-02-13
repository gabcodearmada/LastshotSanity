export default {
    title: 'Block Slide',
    name: 'Slide',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Slide Image',
            name: 'slideimg',
            type: 'image'
        },
        {
            title: 'Text to Right (yes=right, no=left)',
            name: 'textright',
            type: 'boolean'
        },
        {
            title: 'Slide Text',
            name: 'slidetext',
            type: 'localeString'
        },
        {
            title: 'Text Color',
            name: 'slidecolor',
            type: 'string'
        }
    ],
    initialValue: {
        textright: true,
        slidecolor: '#666666'
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
