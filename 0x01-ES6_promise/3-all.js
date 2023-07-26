import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return createUser().then((user) => {
    uploadPhoto().then((pic) => {
      console.log(`${pic.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => console.log('Signup system offline'));
  }).catch(() => console.log('Signup system offline'));
}
