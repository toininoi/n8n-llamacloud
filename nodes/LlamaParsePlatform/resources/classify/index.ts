import type { INodeProperties } from 'n8n-workflow';

export const classifyProperties: INodeProperties[] = [
	{
		displayName: 'Rules',
		name: 'rulesUi',
		placeholder: 'Add Rule',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		required: true,
		description: 'Categories the document may be classified into. Add one rule per category.',
		options: [
			{
				name: 'rules',
				displayName: 'Rules',
				values: [
					{
						displayName: 'Category',
						name: 'category',
						default: '',
						required: true,
						type: 'string',
						description: 'Short label for this category, e.g. "invoice" or "contract"',
					},
					{
						displayName: 'Description',
						name: 'description',
						default: '',
						required: true,
						type: 'string',
						description:
							'Plain-language description of what content belongs in this category. Used by the model to decide.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['classify'],
			},
		},
	},
	{
		displayName: 'Input Type',
		name: 'inputType',
		type: 'options',
		options: [
			{
				name: 'Binary File',
				value: 'binaryFile',
				description: 'Provide binary data as file input for classification',
			},
			{
				name: 'File ID',
				value: 'fileId',
				description: 'Provide the ID of a file uploaded to the LlamaParse Platform',
			},
		],
		default: 'binaryFile',
		noDataExpression: true,
		displayOptions: {
			show: {
				operation: ['classify'],
			},
		},
	},
	{
		displayName: 'Input Data Field Name',
		name: 'inputDataFieldName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['classify'],
				inputType: ['binaryFile'],
			},
		},
		default: 'data',
		placeholder: 'data',
		description: "Name of the input item's binary property that holds the file to classify",
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['classify'],
				inputType: ['fileId'],
			},
		},
		default: '',
		placeholder: 'e.g. 14977a95-8b09-47a9-a309-b4f1c3593742',
		description: 'ID of a file previously uploaded using the "Upload a File" action',
	},
];
