export default {
    title: 'Pages',
    name: 'PagePage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'string'
        },
        {
            title: 'Select Page Blocks',
            name: 'PageBlocks',
            type: 'array',
            of: [
                {type: 'selectBlock'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'title.GR',
            what: 'slug'
        },
        prepare(selection) {
            const {title, what} = selection;
            let whatSlug = '/';
            if (what) {
                whatSlug += what;
            }
            return {
                title: title + ' [' + whatSlug + ']'
            }
        }
    }
}
