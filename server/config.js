import * as admin from 'firebase-admin'

const serviceAccount = {
  "type": "service_account",
  "project_id": "twitter-df36a",
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": "firebase-adminsdk-e6t1u@twitter-df36a.iam.gserviceaccount.com",
  "client_id": process.env.CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-e6t1u%40twitter-df36a.iam.gserviceaccount.com"
};

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const Auth = admin.auth()
export const Db = admin.firestore()
