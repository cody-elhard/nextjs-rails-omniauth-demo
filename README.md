# NextJS w/ Rails omniauth demo

```mermaid
sequenceDiagram
    participant NextJS
    participant Rails
    participant Google Oauth Server
    NextJS->>Google Oauth Server: POST /google/oauth
    Google Oauth Server->>Rails: users/auth/google_oauth2/callback
    Rails->>NextJS: JsonWebToken(current_user_credentials)
    NextJS->>Rails: /graphql?token=JsonWebToken
```


# Getting started
- `cd backend && bundle && rails s`
- `cd frontend && yar install && yarn dev`
- `yarn run codegen` (if you want to generate types)
### Set secrets
- Set omniauth secret key. https://github.com/cody-elhard/nextjs-rails-omniauth-demo/blob/main/backend/config/initializers/devise.rb#L274
- Set google client_id. https://github.com/cody-elhard/nextjs-rails-omniauth-demo/blob/main/frontend/pages/sign_in/index.tsx#L9
