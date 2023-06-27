import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  return Promise.all([user, photo])
    .then((res) => console.log(`${res[1].body} ${res[0].firstName} ${res[0].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
