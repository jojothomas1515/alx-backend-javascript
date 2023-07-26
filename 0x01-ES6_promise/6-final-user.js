import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const prom = Promise.resolve();
  return prom.then(() => signUpUser(firstName, lastName).then((data) => ({ status: 'fulfilled', value: data })))
    .then((data) => uploadPhoto(fileName).catch((err) => [data, { status: 'rejected', value: err }]));
}
