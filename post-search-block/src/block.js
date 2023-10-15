registerBlockType( 'cgb/post-search-block' ), {
	// Block name.
	title: __( 'Load a Post' ), // Block title.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
        __( 'my-block — CGB Block' ),
        __( 'CGB Example' ),
        __( 'create-guten-block' ),
      ],

    attributes: {
        content: {
          type: 'array',
          source: 'children',
          selector: 'p',
        },
        title: {
          type: 'string',
          selector: 'h2'
        },
        link: {
          type: 'string',
          selector: 'a'
        },
        selectedPost: {
          type: 'number',
          default: 0,
        },
      },
  // ...
}