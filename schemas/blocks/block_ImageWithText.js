export default {
    title: 'Block Image With Text',
    name: 'ImageWithText',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'localeString'
        },
        {
            title: 'Text Color',
            name: 'color',
            type: 'string'
        },
        {
            title: 'Text to Right (yes=right, no=left)',
            name: 'textright',
            type: 'boolean'
        }
    ],
    initialValue: {
        color: '#777777',
        textright: false
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
