import type { INodeProperties } from 'n8n-workflow';

export const extractProperties: INodeProperties[] = [
	{
		displayName: 'Configuration Mode',
		name: 'configMode',
		type: 'options',
		options: [
			{
				name: 'Schema',
				value: 'schema',
				description: 'Provide an inline JSON schema defining the extraction structure',
			},
			{
				name: 'Configuration ID',
				value: 'configId',
				description: 'Use a saved LlamaExtract configuration from the LlamaCloud dashboard',
			},
		],
		default: 'schema',
		noDataExpression: true,
		displayOptions: {
			show: {
				operation: ['extract'],
			},
		},
	},
	{
		displayName: 'Data Schema',
		name: 'dataSchema',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['extract'],
				configMode: ['schema'],
			},
		},
		default: '',
		placeholder: '',
		description: 'JSON schema representing the structure the extracted data should follow',
	},
	{
		displayName: 'Configuration ID',
		name: 'configId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['extract'],
				configMode: ['configId'],
			},
		},
		default: '',
		placeholder: 'e.g. 1234abcd-...',
		description:
			'ID of the LlamaExtract configuration that defines the schema and prompts. Create one in the LlamaCloud dashboard under Extract.',
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['extract'],
			},
		},
		default: 'data',
		placeholder: 'data',
		description: "Name of the input item's binary property that holds the file to extract from",
	},
];
