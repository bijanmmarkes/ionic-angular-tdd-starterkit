# Ionic 3 Angular 5 NodeJS ExpressJS - Official PWA Repository

This is a template which can be used to get quickly started on a TDD PWA Application.


```$xslt
  npm i -g ionic@latest electron@latest node-sass @angular/cli jasmine
```

# Installing FontAwesome 5 Pro
- https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
```
  npm config set "@fortawesome:registry" https://npm.fontawesome.com/ \
  npm config set "//npm.fontawesome.com/:_authToken" <Auth_token>
```
### Providers
Providers are exactly what they sound like. They provide, whether it be data,
data from databases, data from configuration files, data from sessions, etc.
#### AuthProvider
What the heck is this for? Well let me tell you, this provider does the following:

- Keeps track of a users session and active status.
- Redirects user's depending on their authorization.
- Ensures that a user is logged in when they are supposed to be.
- Check if a user is authenticated and redirect accordingly.

#### ConfigProvider
- Provides the global configuration among other configuration files
- `Import { ConfigProvider }` whenever you need specific keys / data about the App or for it.

#### NetworkProvider

- Deals with anything related to the user's network
- Detects when a connection is :
  - Online on connect ( First Load )
  - Offline on connect ( First Load )
  - An onlline connection goes offline ( EventTrigger )
  - An offline connection goes online ( EventTrigger )
  - Pushes a toast notification about the network change.
  
### Pages

#### Home
This is the page a user see's when they are not authenticated which contains two tabs.
A tab for logging in and a tab for signing up. Up to date it currently uses the AuthProvider which is
using Auth0 SaaS.
#### Tabs
Controller for the tabs, Allows clean navigation using IonicTabs to the different
portals / pages. Battle, Watch, OpenMic, Profile, Etc.
### Controllers

#### ToastController
This is the central notification system for the application.
Any errors, connectivity issues, status updates, etc... will be displayed
through this controller. Allows us to use toast without dirty syntax in every file

## Directories

#### `/test-config`
  - Home for all test framework config files, etc.
#### `/src`
  - The app lives here : `/src/app` and ` /src/* `
