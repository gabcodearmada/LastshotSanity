const supportedTypes = [
    {id: 'T1', title: '| One image only', isDefault: true},
    {id: 'T11', title: '|| Two images next to each other in portrait mode'},
    {id: 'T00', title: '= Two images next to each other in landscape mode'},
    {id: 'T100', title: '|=Three images, one landscape left and two portrait right (one below the other)'},
    {id: 'T001', title: '=| Three images, two portrait left (one below the other) and one landscape right'}
  ]
  
  export default {
    name: 'galleryitemType',
    type: 'object',
    fieldsets: [
      {
        title: 'Gallery Item Types',
        name: 'itemtypes',
        options: {collapsible: false}
      }
    ],
    fields: supportedTypes.map(itype => (
      {
        title: itype.title,
        name: itype.id,
        type: 'boolean',
        layout: 'checkbox'
      }
    )),
    initialValue: {
        T1: true,
        T11: false,
        T00: false,
        T100: false,
        T001: false
    }
  }
  