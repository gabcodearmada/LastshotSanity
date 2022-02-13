export default {
    title: 'Menu Item',
    name: 'menuItem',
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