// components for importing required elements for block
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, InspectorControls } = wp.blocks; // Import registerBlockType() from wp.blocks
const { SelectControl } = wp.components;
const { Component } = wp.element;

class mySelectPosts extends Component {
	render() {
		return ( 'Load Post Placeholder' )
	}
}
 
registerBlockType( 'cgb/block-guten-load-post', {
	// ...
  
	// The "edit" property must be a valid function.
	edit: mySelectPosts,

	// ...
} );

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
        // This will be used an ID of the post
        selectedPost: {
          type: 'number',
          default: 0,
        },
      },
  // ...
}

