import numpy as np
from keras.preprocessing import image
from keras.models import load_model

IMAGE_SIZE = [224, 224]

print('Image identification')

#trained model is loaded
cobrashot_m=load_model('cobrashot_m.h5')
#fetch and load image from the location
img = image.load_img('C:\\Users\\Nethmi Mohotti\\Desktop\\CobraShot\\Data Science\\dataset\\validation\\picture.jpeg', target_size=(224, 224))
x =image.img_to_array(img)
x = np.expand_dims(x,axis=0)
images = np.vstack([x]) 
pred = cobrashot_m.predict(images)
prediction= pred[0]
for k in range(7):
    if prediction[k] == 1:
        print('Saw-scaled viper')
    else:
        print('Unidentified')
    
