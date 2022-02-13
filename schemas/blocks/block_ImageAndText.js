export default {
    title: 'Block Image And Text',
    name: 'ImageAndText',
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
            title: 'Title Text',
            name: 'titletext',
            type: 'localeString'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'localeString'
        },
        {
            title: 'Background Color',
            name: 'backgroundcolor',
            type: 'string'
        },
        {
            title: 'Title Color',
            name: 'titlecolor',
            type: 'string'
        },
        {
            title: 'Content Color',
            name: 'contentcolor',
            type: 'string'
        },
        {
            title: 'Text to Left (yes=left, no=right)',
            name: 'textleft',
            type: 'boolean'
        }
    ],
    initialValue: {
        backgroundcolor: '#FFFFFF',
        titlecolor: '#777777',
        contentcolor: '#666666'
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
