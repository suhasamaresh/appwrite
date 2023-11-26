import { Client , Databases ,Query} from 'appwrite';
export const PROJECT_ID = '6561c3f4638967c50a72';
export const DATABASE_ID = '6561c595914a79263838';
export const COLLECTION_ID_MESSAGES = '6561c5ae644976746088';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6561c3f4638967c50a72');
export const databases = new Databases(client);

export default client;