import { firebase } from '../../Server-side/firebase';
import { getStorage, ref, uploadBytes} from 'firebase/storage';

const strorage = getStorage(); //the storage
const ref = res(strorage, 'image.jpg') // how the image will be addressed inside the storage
//convert image to array of bytes
const img = await fetch(result.uri);
const bytes = await img.blob();

await uploadBytes(ref, bytes)//upload images 