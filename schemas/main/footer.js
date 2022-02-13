export default {
    title: 'Sanity Footer',
    name: 'Sfooter',
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
            title: 'Footer Logo',
            name: 'footerlogo',
            type: 'image'
        },
        {
            title: 'Bottom Bar Background Color',
            name: 'bottombackcolor',
            type: 'string'
        },
        {
            title: 'Bottom Bar Text Color',
            name: 'bottomtextcolor',
            type: 'string'
        },
        {
            title: 'Bottom Bar Social Color',
            name: 'bottomsocialcolor',
            type: 'string'
        },
        {
            title: 'Bottom Bar Social Hovered',
            name: 'bottomsocialhover',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'description'
        }
    }
}
