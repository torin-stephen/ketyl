# Ketyl
****
A modern URL shortener built with React, Material UI and Firebase. Made to replace [ovre](https://github.com/torin-stephen/shorturls) (my old URL Shortener)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
****
### Features

1. Hosted with FireBase
2. Admin Panel
3. Domain Customization
4. Modern UI

****
## Requirements

1. A Firebase project with Hosting

2. Short domain

3. Enable Email/Password authentication in your Firebase Authentication settings

4. Enable Firestore in the Firebase project.
****
## How to Use

1. Visit https://ketyl.ml/

<img src="https://i.ibb.co/fqT2Xwk/login.png" alt="login" border="0" />

2. Login using credentials preset in the database

<img src="https://i.ibb.co/L5GQ6GX/empty.png" alt="empty" border="0" />

3. Add a new url to shorten
- **IMPORTANT** make sure there is "http://" or "https://" in the long URL or it wont work.

<img src="https://i.ibb.co/xgwVbvt/shorten.png" alt="shorten" border="0" width="500" height="500" />

4. Done! You can now visit the new short URL which will forward to the set long URL
****
## Configuration

The following configurations are available:

| Parameter | Type | Description |
|:---------:|:----:|:-----------:|
| global.config.mainsite | URL | The site to which a blank suffix redirects. For ex: **short.site** -> **long.site** |
****
### Suggested Rules for Firebase Database

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read : if true;
      allow write : if request.auth.uid != null;
    }
  }
}
```

****

