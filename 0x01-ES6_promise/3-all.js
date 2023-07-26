import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  createUser.then((user) => {
    uploadPhoto.then((pic) => {
      console.log(`${pic.body} ${user.firstName} ${user.lastName}`);
    });
  }).catch(() => console.log('Signup system offline'));
}
