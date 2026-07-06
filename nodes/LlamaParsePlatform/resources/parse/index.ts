import type { INodeProperties } from 'n8n-workflow';

export const parseProperties: INodeProperties[] = [
	{
		displayName: 'Tier',
		name: 'tier',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['parse'],
			},
		},
		options: [
			{
				name: 'Fast',
				value: 'fast',
				description: 'Fastest, lowest cost. Plain text output only (best for simple documents).',
			},
			{
				name: 'Cost Effective',
				value: 'cost_effective',
				description: 'Balanced speed and quality with Markdown output',
			},
			{
				name: 'Agentic',
				value: 'agentic',
				description:
					'High-quality parsing with reasoning over complex layouts, tables, and figures',
			},
			{
				name: 'Agentic Plus',
				value: 'agentic_plus',
				description: 'Highest quality. Best for difficult documents where accuracy matters most.',
			},
		],
		default: 'fast',
		description: 'Quality and cost tier used to parse the document',
	},
	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['parse'],
			},
		},
		default: 'latest',
		placeholder: 'latest',
		description:
			'Version of the Parse service to use. Use "latest" unless you need to pin to a specific release.',
	},
	{
		displayName: 'Input Type',
		name: 'inputType',
		type: 'options',
		options: [
			{
				name: 'Binary File',
				value: 'binaryFile',
				description: 'Provide binary data as file input for parsing',
			},
			{
				name: 'File ID',
				value: 'fileId',
				description: 'Provide the ID of a file uploaded to the LlamaParse Platform',
			},
			{
				name: 'File URL',
				value: 'fileUrl',
				description: 'Use a publicly accessible URL as file input for parsing',
			},
		],
		default: 'binaryFile',
		noDataExpression: true,
		displayOptions: {
			show: {
				operation: ['parse'],
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
				operation: ['parse'],
				inputType: ['binaryFile'],
			},
		},
		default: 'data',
		placeholder: 'data',
		description: "Name of the input item's binary property that holds the file to parse",
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['parse'],
				inputType: ['fileId'],
			},
		},
		default: '',
		placeholder: 'e.g. 14977a95-8b09-47a9-a309-b4f1c3593742',
		description: 'ID of a file previously uploaded using the "Upload a File" action',
	},
	{
		displayName: 'URL',
		name: 'sourceUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['parse'],
				inputType: ['fileUrl'],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/download/file.pdf',
		description: 'Publicly available URL associated with the file to parse',
	},
];
