export default {
    title: 'Block Simple Text',
    name: 'SimpleText',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Title Text',
            name: 'titletext',
            type: 'localeString'
        },
        {
            title: 'Content (Html tags allowed)',
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
            title: 'Bottom Small Image (usually svg)',
            name: 'bottomimage',
            type: 'image'
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
