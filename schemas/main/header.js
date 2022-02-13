export default {
    title: 'Sanity Header',
    name: 'Sheader',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Background Color',
            name: 'backgroundcolor',
            type: 'string'
        },
        {
            title: 'Text Color',
            name: 'textcolor',
            type: 'string'
        },
        {
            title: 'Menu Selected Color',
            name: 'selectcolor',
            type: 'string'
        },
        {
            title: 'Main Logo',
            name: 'mainlogo',
            type: 'image'
        },
        {
            title: 'Sort Logo',
            name: 'sortlogo',
            type: 'image'
        }
    ],
    preview: {
        select: {
            title: 'description'
        }
    }
}
