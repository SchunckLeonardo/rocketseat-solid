# App

GymPass Style App

## RFs (Requisitos Funcionais)

- [x] Must be possible sign in
- [x] Must be possible authenticate
- [x] Must be possible get user profile signed
- [ ] Must be possible get check-in amount by user signed
- [ ] Must be possible user get check-in history
- [ ] Must be possible user search for near gyms
- [ ] Must be possible user search gyms by name
- [x] Must be possible user do check-in in gym
- [ ] Must be possible validate check-in user
- [x] Must be possible register a gym

## RNs (Regras de Negócio)

- [x] User can't sign in with duplicate email
- [x] User can't do 2 check-ins in same day
- [x] User can't do check-in if not near (100m) to gym
- [ ] Check-in only can be validate at least 20 minutes after created
- [ ] Check-in only can be validate by admins
- [ ] Gym only can registered by admins

## RNFs (Requisos não-funcionais)

- [x] User's password must be encrypted
- [x] Application's data must be persists in PostgreSQL database
- [ ] All set of data must be paginate with 20 items by page
- [ ] User must be identified by JWT (JSON Web Token)
