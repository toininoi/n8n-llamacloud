import type { INodeProperties } from 'n8n-workflow';

/**
 * Single "Action" dropdown that replaces the previous Resource + Operation
 * pairing. Every action is a top-level choice on the node, matching the
 * pattern used by other AI-focused n8n community nodes (e.g. Browserbase).
 */
export const operationProperty: INodeProperties = {
	displayName: 'Action',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Classify a Document',
			value: 'classify',
			description: 'Classify a document into one of your defined categories',
			action: 'Classify a document',
		},
		{
			name: 'Extract Structured Data',
			value: 'extract',
			description:
				'Extract structured data from a document using an inline schema or a saved LlamaExtract configuration',
			action: 'Extract structured data from a document',
		},
		{
			name: 'Parse a Document',
			value: 'parse',
			description: 'Parse a document into clean text or Markdown',
			action: 'Parse a document',
		},
		{
			name: 'Retrieve Context From an Index',
			value: 'retrieveIndex',
			description:
				'Retrieve context from a LlamaCloud Index using the /api/v1/retrieval/retrieve endpoint',
			action: 'Retrieve context from an index',
		},
		{
			name: 'Split a Document',
			value: 'split',
			description: 'Split a document into segments by category',
			action: 'Split a document',
		},
		{
			name: 'Upload a File',
			value: 'uploadFile',
			description: 'Upload a file to the LlamaParse Platform so it can be reused across operations',
			action: 'Upload a file',
		},
	],
	default: 'parse',
};
