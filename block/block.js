(function (blocks, element, blockEditor, components) {
	const { registerBlockType } = blocks;
	const { InspectorControls } = blockEditor;
	const { PanelBody, ToggleControl, TextControl, SelectControl, ColorPalette } = components;
	const { Fragment, createElement } = element;

	// Register the block type
	registerBlockType('custom/block-template', {
		title: 'Custom Block Template', // Block title
		icon: 'admin-generic', // Block icon
		category: 'common', // Block category in the block editor
		attributes: { // Define block attributes
			toggleOption: { type: 'boolean', default: false }, // Boolean toggle
			textOption: { type: 'string', default: '' }, // Text input
			urlOption: { type: 'string', default: '' }, // URL input
			dropdownOption: { type: 'string', default: 'option1' }, // Dropdown selection
			colorOption: { type: 'string', default: '#000000' }, // Color selection
		},
		// Function to define the block's editor interface
		edit: function ({ attributes, setAttributes }) {
			const { toggleOption, textOption, urlOption, dropdownOption, colorOption } = attributes;

			return (
				// Using Fragment to group elements without adding extra nodes to the DOM
				createElement(
					Fragment,
					null,
					// InspectorControls allows for additional settings in the sidebar
					createElement(
						InspectorControls,
						null,
						// PanelBody is used to group related controls
						createElement(
							PanelBody,
							{ title: 'Block Settings' },
							// ToggleControl for boolean option
							createElement(ToggleControl, {
								label: 'Toggle Option',
								checked: toggleOption,
								onChange: (value) => setAttributes({ toggleOption: value }),
							}),
							// TextControl with placeholder for text input
							createElement(TextControl, {
								label: 'Text Option',
								value: textOption,
								placeholder: 'Enter your text here...',
								onChange: (value) => setAttributes({ textOption: value }),
							}),
							// TextControl for URL input
							createElement(TextControl, {
								label: 'URL Option',
								value: urlOption,
								onChange: (value) => setAttributes({ urlOption: value }),
							}),
							// SelectControl for dropdown selection
							createElement(SelectControl, {
								label: 'Dropdown Option',
								value: dropdownOption,
								options: [
									{ label: 'Option 1', value: 'option1' },
									{ label: 'Option 2', value: 'option2' },
									{ label: 'Option 3', value: 'option3' },
								],
								onChange: (value) => setAttributes({ dropdownOption: value }),
							}),
							// ColorPalette for color selection
							createElement(ColorPalette, {
								value: colorOption,
								onChange: (value) => setAttributes({ colorOption: value }),
							})
						)
					),
					// The block's main content displayed in the editor
					createElement(
						'div',
						{
							style: { color: colorOption },
							className: 'custom-block-template'
						}, // Applying the selected color
						createElement('p', null, toggleOption ? 'Toggle is ON' : 'Toggle is OFF'), // Conditional text based on toggle
						createElement('p', null, textOption || 'No text entered'), // Display text or fallback
						createElement('a', { href: urlOption }, 'Link'), // Link element
						createElement('p', null, dropdownOption) // Display dropdown selection
					)
				)
			);
		},
		// Function to save the block's content to the frontend
		save: function ({ attributes }) {
			const { toggleOption, textOption, urlOption, dropdownOption, colorOption } = attributes;

			return createElement(
				'div',
				{
					style: { color: colorOption },
					className: 'custom-block-template'
				}, // Applying the selected color
				createElement('p', null, toggleOption ? 'Toggle is ON' : 'Toggle is OFF'), // Conditional text based on toggle
				createElement('p', null, textOption || 'No text entered'), // Display text or fallback
				createElement('a', { href: urlOption }, 'Link'), // Link element
				createElement('p', null, dropdownOption) // Display dropdown selection
			);
		}
	});
})(
	window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor,
	window.wp.components
);
