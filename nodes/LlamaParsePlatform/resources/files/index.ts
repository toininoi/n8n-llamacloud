import type { INodeProperties } from 'n8n-workflow';

export const uploadFileProperties: INodeProperties[] = [
	{
		displayName: 'Input Data Field Name',
		name: 'inputDataFieldName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['uploadFile'],
			},
		},
		default: 'data',
		placeholder: 'data',
		description:
			"Name of the input item's binary property that holds the file to upload to the LlamaParse Platform",
	},
];
