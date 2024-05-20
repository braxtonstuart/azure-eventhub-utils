import {app, InvocationContext, output} from '@azure/functions';

export async function writeEventsToConsole(message: unknown, context: InvocationContext): Promise<void> {
    context.log(message.toString());
}

app.eventHub('read', {
    connection: 'AZURE_EVENT_HUB_CONNECTION_STRING',
    eventHubName: '',
    cardinality: 'one',
    handler: writeEventsToConsole,
});

